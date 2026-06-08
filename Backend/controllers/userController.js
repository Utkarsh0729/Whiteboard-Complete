import { createUser, validateUser } from "../services/userService.js";
import { signToken } from "../utils/jwt.js";
import User from "../models/userModel.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ error: "Missing fields" });

        const user = await createUser(email, password);
        const token = signToken({ userId: user._id });

        // Return token so the frontend can auto-login
        res.status(201).json({ message: "Registered", token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ error: "Missing fields" });

        const user = await validateUser(email, password);
        const token = signToken({ userId: user._id });

        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
};

export const googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;

        if (!credential) {
            return res.status(400).json({ error: "Missing credential token" });
        }

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email } = payload;

        if (!email) {
            return res.status(400).json({ error: "Email not retrieved from Google" });
        }

        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ email });
            await user.save();
        }

        const token = signToken({ userId: user._id });

        res.json({ token, email });
    } catch (err) {
        res.status(400).json({ error: err.message || "Google authentication failed" });
    }
};