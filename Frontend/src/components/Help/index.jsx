import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const Help = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const handleBackToHome = () => {
    navigate('/');
  };

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'drawing-tools', name: 'Drawing Tools', icon: '🎨' },
    { id: 'collaboration', name: 'Collaboration', icon: '👥' },
    { id: 'sharing', name: 'Sharing & Export', icon: '📤' },
    { id: 'account', name: 'Account & Settings', icon: '⚙️' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' }
  ];

  const helpContent = {
    'getting-started': [
      {
        question: 'How do I create my first whiteboard?',
        answer: 'After signing up and logging in, click the "Create New Canvas" button in the sidebar. Your new whiteboard will be created automatically and you can start drawing immediately.'
      },
      {
        question: 'What tools are available?',
        answer: 'WhiteBoard offers various tools including brush, line, rectangle, circle, arrow, eraser, and text. You can access these tools from the toolbar at the top of the canvas.'
      },
      {
        question: 'How do I navigate the interface?',
        answer: 'The main canvas is in the center, tools are in the top toolbar, tool options are on the left sidebar, and your canvas list is on the right sidebar.'
      }
    ],
    'drawing-tools': [
      {
        question: 'How do I change brush size and color?',
        answer: 'Select the brush tool, then use the toolbox on the left to adjust stroke color and size. You can use the color picker or preset colors.'
      },
      {
        question: 'How do I draw shapes?',
        answer: 'Select the shape tool (rectangle, circle, etc.) from the toolbar, then click and drag on the canvas to create the shape. You can customize stroke and fill colors.'
      },
      {
        question: 'How do I add text?',
        answer: 'Select the text tool from the toolbar, click where you want to add text, and start typing. You can adjust font size and color from the toolbox.'
      },
      {
        question: 'How do I erase elements?',
        answer: 'Select the eraser tool and click on any element you want to remove. The eraser works on individual elements, not pixel-by-pixel.'
      }
    ],
    'collaboration': [
      {
        question: 'How do I collaborate with others?',
        answer: 'Share your canvas with team members by entering their email in the sharing section. They\'ll be able to view and edit the canvas in real-time.'
      },
      {
        question: 'Can I see who else is working on the canvas?',
        answer: 'Yes, you\'ll see real-time updates as others draw and edit. All changes are synchronized instantly across all users.'
      },
      {
        question: 'How many people can collaborate on one canvas?',
        answer: 'Multiple users can collaborate on a single canvas simultaneously. There\'s no strict limit on the number of collaborators.'
      }
    ],
    'sharing': [
      {
        question: 'How do I share my whiteboard?',
        answer: 'Use the sharing section in the right sidebar. Enter the email address of the person you want to share with and click "Share Canvas".'
      },
      {
        question: 'How do I export my whiteboard?',
        answer: 'Click the download button in the toolbar to export your canvas as a PNG image. The entire canvas will be saved to your device.'
      },
      {
        question: 'Can I make my canvas public?',
        answer: 'Currently, canvases are private by default. You can only share with specific users by email address.'
      }
    ],
    'account': [
      {
        question: 'How do I create an account?',
        answer: 'Click "Sign Up" on the homepage, enter your email and password, or use Google Sign-In for quick registration.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'On the login page, click "Forgot Password" and follow the instructions sent to your email address.'
      },
      {
        question: 'Can I change my email address?',
        answer: 'Currently, email changes need to be done by contacting our support team. We\'re working on adding this feature to user settings.'
      }
    ],
    'troubleshooting': [
      {
        question: 'My drawings are not saving',
        answer: 'Make sure you\'re logged in and have a stable internet connection. Changes are saved automatically, but require authentication.'
      },
      {
        question: 'I can\'t see shared canvases',
        answer: 'Check the "Shared" tab in your canvas list. If you still don\'t see them, ask the owner to reshare the canvas with your email.'
      },
      {
        question: 'The canvas is loading slowly',
        answer: 'This might be due to a slow internet connection or server load. Try refreshing the page or clearing your browser cache.'
      },
      {
        question: 'Tools are not responding',
        answer: 'Try refreshing the page. If the problem persists, check if you have the latest browser version and disable browser extensions that might interfere.'
      }
    ]
  };

  const filteredContent = helpContent[activeCategory]?.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className={styles.helpContainer}>
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
            How can we <span className={styles.highlight}>help</span> you?
          </h1>
          <p className={styles.heroDescription}>
            Find answers to common questions and learn how to make the most of WhiteBoard
          </p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Help Content */}
      <section className={styles.helpSection}>
        <div className={styles.container}>
          <div className={styles.helpGrid}>
            {/* Categories Sidebar */}
            <div className={styles.categoriesSidebar}>
              <h3>Help Categories</h3>
              <ul className={styles.categoriesList}>
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className={styles.categoryIcon}>{category.icon}</span>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Content */}
            <div className={styles.helpContent}>
              <div className={styles.contentHeader}>
                <h2>
                  {categories.find(cat => cat.id === activeCategory)?.icon} {' '}
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                {searchTerm && (
                  <p className={styles.searchResults}>
                    {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''} for "{searchTerm}"
                  </p>
                )}
              </div>

              <div className={styles.faqList}>
                {filteredContent.length > 0 ? (
                  filteredContent.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                      <h3 className={styles.faqQuestion}>{item.question}</h3>
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.noResults}>
                    <p>No results found for "{searchTerm}". Try a different search term or browse categories.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className={styles.quickActionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Quick Actions</h2>
            <p>Common tasks to get you started</p>
          </div>
          <div className={styles.actionsGrid}>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>🎨</div>
              <h3>Start Drawing</h3>
              <p>Create your first canvas and start drawing</p>
              <button className={styles.actionButton} onClick={() => navigate('/register')}>
                Get Started
              </button>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>👥</div>
              <h3>Invite Team</h3>
              <p>Share your canvas with team members</p>
              <button className={styles.actionButton} onClick={() => navigate('/whiteboard')}>
                Share Canvas
              </button>
            </div>
            <div className={styles.actionCard}>
              <div className={styles.actionIcon}>📞</div>
              <h3>Contact Support</h3>
              <p>Get help from our support team</p>
              <button className={styles.actionButton} onClick={() => navigate('/contact')}>
                Contact Us
              </button>
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
              <p>Still need help? We're here to support you.</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Support</h4>
              <ul>
                <li><button onClick={() => navigate('/contact')} className={styles.footerLink}>Contact Support</button></li>
                <li>Community Forum</li>
                <li>Video Tutorials</li>
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

export default Help;