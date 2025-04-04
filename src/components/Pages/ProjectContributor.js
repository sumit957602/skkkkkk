import React from "react";
import "./ProjectContributor.css"; // Import a CSS file for styling

export const ProjectContributor = () => {
  return (
    <div className="contributor-container">
      <h1 className="contributor-name">Sumit Kumar</h1>
      <p className="contributor-role">Lead Developer</p>
      <p className="contributor-description">
        Sumit Kumar is a passionate software developer with expertise in
        building responsive web applications. He has contributed significantly
        to this project.
      </p>
      <div className="social-links">
        <a
          href="https://github.com/sumit957602"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sumit957602"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
