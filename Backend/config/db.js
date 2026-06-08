import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
    try {
        console.log("Connecting to DB...");
        
        // Set DNS servers to Google DNS to bypass ISP DNS resolution issues (e.g. Reliance Jio querySrv ECONNREFUSED)
        try {
            dns.setServers(["8.8.8.8", "8.8.4.4"]);
        } catch (dnsErr) {
            console.warn("⚠️ Failed to set custom DNS servers:", dnsErr.message);
        }

        
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000
        });

        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ DB ERROR:", err.message);
        process.exit(1);
    }
};