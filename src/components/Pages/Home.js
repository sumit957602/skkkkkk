import React from "react";
import "./Home.css"; // Assuming you will create a CSS file for styling

export const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Document Authenticator</h1>
        <p>Securely authenticate and verify your documents with ease.</p>
      </header>
      <main className="home-main">
        <div className="features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              🔒 <strong>Secure:</strong> State-of-the-art encryption ensures
              your data is safe.
            </li>
            <li>
              ⚡ <strong>Fast:</strong> Real-time document verification.
            </li>
            <li>
              📄 <strong>Easy:</strong> User-friendly interface for seamless
              experience.
            </li>
          </ul>
        </div>
        <div className="cta">
          <button className="cta-button">Get Started</button>
        </div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 Document Authenticator. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="footer-link">
            {" "}
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};
