import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const About = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className={styles.aboutContainer}>
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
            About <span className={styles.highlight}>WhiteBoard</span>
          </h1>
          <p className={styles.heroDescription}>
            Empowering creativity and collaboration through innovative digital canvas technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                We believe that great ideas emerge when people can collaborate freely and express their thoughts visually. 
                WhiteBoard was created to break down the barriers between imagination and implementation, providing a 
                seamless digital canvas where teams, educators, and creative professionals can bring their ideas to life.
              </p>
              <p>
                Our platform combines the intuitive feel of traditional whiteboarding with the power of modern technology, 
                enabling real-time collaboration regardless of geographical boundaries.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.visualCard}>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Collaborative</h3>
                <p>Work together in real-time with team members around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                WhiteBoard was born from a simple observation: the best ideas often emerge during spontaneous 
                brainstorming sessions around a physical whiteboard. However, in our increasingly digital and 
                distributed world, these moments of creative collaboration were becoming harder to achieve.
              </p>
              <p>
                Founded in 2024, our team set out to recreate that magic of collaborative whiteboarding in a 
                digital format that could scale across teams, time zones, and devices. We wanted to preserve 
                the natural, intuitive feel of drawing and sketching while adding the benefits of digital 
                technology: persistence, sharing, and unlimited canvas space.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>10K+</h3>
                  <p>Active Users</p>
                </div>
                <div className={styles.stat}>
                  <h3>50K+</h3>
                  <p>Canvases Created</p>
                </div>
                <div className={styles.stat}>
                  <h3>100+</h3>
                  <p>Countries</p>
                </div>
              </div>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.timelineCard}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2024</div>
                  <div className={styles.timelineContent}>
                    <h4>Foundation</h4>
                    <p>WhiteBoard was founded with a vision to revolutionize digital collaboration</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>Q2</div>
                  <div className={styles.timelineContent}>
                    <h4>Beta Launch</h4>
                    <p>Released beta version with core drawing and collaboration features</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>Q4</div>
                  <div className={styles.timelineContent}>
                    <h4>Public Release</h4>
                    <p>Launched publicly with advanced sharing and real-time collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We continuously push the boundaries of what's possible in digital collaboration, always seeking new ways to enhance creativity.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Collaboration</h3>
              <p>We believe the best ideas emerge when people work together, and we design every feature with collaboration in mind.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M13 12h3a2 2 0 0 1 2 2v1"/>
                  <path d="M11 12H8a2 2 0 0 0-2 2v1"/>
                </svg>
              </div>
              <h3>Simplicity</h3>
              <p>Complex problems require simple solutions. We strive to make powerful tools that are intuitive and easy to use.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>Security</h3>
              <p>Your ideas and data are precious. We implement robust security measures to protect your creative work and privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind WhiteBoard</p>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <div className={styles.avatarPlaceholder}>JS</div>
              </div>
              <h3>John Smith</h3>
              <p className={styles.teamRole}>Founder & CEO</p>
              <p className={styles.teamBio}>
                Passionate about creating tools that enhance human creativity and collaboration.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <div className={styles.avatarPlaceholder}>SD</div>
              </div>
              <h3>Sarah Davis</h3>
              <p className={styles.teamRole}>Lead Designer</p>
              <p className={styles.teamBio}>
                Focused on creating intuitive user experiences that feel natural and delightful.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <div className={styles.avatarPlaceholder}>MJ</div>
              </div>
              <h3>Mike Johnson</h3>
              <p className={styles.teamRole}>CTO</p>
              <p className={styles.teamBio}>
                Building scalable technology infrastructure that powers seamless real-time collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Creating?</h2>
            <p>Join our community of creators, educators, and innovators</p>
            <button className={styles.ctaButton} onClick={handleGetStarted}>
              Get Started Today
            </button>
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
              <h4>Contact</h4>
              <ul>
                <li>hello@whiteboard.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
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

export default About;