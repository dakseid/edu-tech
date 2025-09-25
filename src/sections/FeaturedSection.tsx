import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="featured-container">
      <div>
        <h2>Why Choose EduTech?</h2>
        <p>
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p>
      </div>

        {/* Centered Video */}
       

        <div className="feature-content">
          {/* Feature 1 */}
          <div className='container-ft'>
            <div className="feature-1">
              <h3>Showcase Work</h3>
              <p>Showcase your project to stand out among all.</p>
              <button className="featured-btn">
                Add Work
              </button>
            </div>
        </div>

          {/* Feature 2 */}
          <div className="feature-2">
            <h3> 🗺️100K+</h3>
            <p>Worldwind Active Users</p>
          </div>
          </div>

 <div className="video-container">
          <video
            className="my-video"
            controls
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            <div className="video-captions">
              <h3>Empower Your Future with EduTech</h3>
            </div>
          </video>
        </div>

          {/* Feature 3 */}
          <div className="feature-3">
            <h3>Network Opportunities</h3>
          </div>

          {/* Feature 4 */}
          <div className="feature-4">
            <h3>Resume Builder</h3>
            <p>Create a professional resume using our built-in resume builder.</p>
            <button className="featured-btn">
             Build Resume
            </button>
          </div>
        

     
    </section>
  );
};

export default FeaturedSection;