import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      {/* Navigation Header */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <h2>WhiteBoard</h2>
          </div>
          <div className={styles.navButtons}>
            <button className={styles.backButton} onClick={handleBackToHome}>
              ← Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Get in <span className={styles.highlight}>Touch</span>
          </h1>
          <p className={styles.heroDescription}>
            Have questions, feedback, or need support? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <p>We're here to help and answer any questions you might have.</p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>support@whiteboard.com</p>
                    <p>hello@whiteboard.com</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Office</h3>
                    <p>123 Innovation Drive</p>
                    <p>San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Response Time</h3>
                    <p>Within 24 hours</p>
                    <p>Usually much faster!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How do I get started?</h3>
              <p>Simply create a free account and start drawing on your first canvas. No downloads required!</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is WhiteBoard free to use?</h3>
              <p>Yes! We offer a free tier with essential features. Premium plans are available for advanced functionality.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I collaborate with my team?</h3>
              <p>Absolutely! Share your canvases with team members and collaborate in real-time.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do I export my work?</h3>
              <p>Use the download button in the toolbar to export your canvas as a PNG image.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>WhiteBoard</h3>
              <p>Empowering creativity through collaborative digital canvases.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Support</h4>
              <ul>
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 WhiteBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;