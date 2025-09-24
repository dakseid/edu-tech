import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose EduTech?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations
        </p>

        {/* Centered Video */}
        <div className="flex justify-center mb-12">
          <video
            className="rounded-lg shadow-lg w-full max-w-xl"
            controls
          >
            <source src="/assets/3245638-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Showcase Work</h3>
            <p className="text-gray-600">Showcase your project to stand out among all.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Add Work
            </button>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">100K+</h3>
            <p className="text-gray-600">Worldwind Active Users</p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Network Opportunities</h3>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Resume Builder</h3>
            <p className="text-gray-600">Create a professional resume using our built-in resume builder.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Build Resume
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;