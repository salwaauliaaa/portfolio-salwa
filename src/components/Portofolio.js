import React from 'react';
import './portofolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="project-gallery">
        <div className="project">
          <img src="/images/crud.jpg" alt="Project Title 1" />
          <p>CRUD</p>
        </div>
        <div className="project">
          <img src="/images/sekolah.png" alt="Project Title 2" />
          <p>Website Sekolah</p>
        </div>
        <div className="project">
          <img src="/images/resto.png" alt="Project Title 3" />
          <p>Website Restaurant</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
