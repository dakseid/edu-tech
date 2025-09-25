import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const FeaturedSection: React.FC = () => {
  return (
    <section className="featured-container">
      <div>
        <h2>Why Choose EduTech?</h2>
        <p>
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p>
      </div>
      <div className="features-video-row">
        <div className="features-col">
          <div className="feature-1">
            <span role="img" aria-label="Showcase">🖼️</span>
            <h3>Showcase Work</h3>
            <p>Showcase your project to stand out among all.</p>
            <button className="featured-btn">Add Work</button>
          </div>
          <div className="feature-2">
            <span role="img" aria-label="Users">🗺️</span>
            <h3>100K+ Active Users</h3>
            <p>Worldwind Active Users</p>
          </div>
        </div>
        <div className="video-center">
          <video className="my-video" controls>
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="features-col">
          <div className="feature-3">
            <FaLaptop className='laptop-icon' />
            <h3 className='feature3'>Network Opportunities</h3>
            <p>Connect with top professionals and mentors.</p>
          </div>
          <div className="feature-4">
            <span role="img" aria-label="Resume">📄</span>
            <h3>Resume Builder</h3>
            <p>Create a professional resume using our built-in resume builder.</p>
            <button className="featured-btn">Build Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;