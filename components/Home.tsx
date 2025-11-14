import React from 'react';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full">
      <div className="max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Create Perfect XML Sitemaps in Seconds
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Our tool simplifies SEO by helping you generate a clean, valid XML sitemap. Just paste your URLs, set your preferences, and get a downloadable file ready for search engines.
        </p>
        <div className="mt-10">
          <button
            onClick={onGetStarted}
            className="bg-gold text-gray-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/20"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
