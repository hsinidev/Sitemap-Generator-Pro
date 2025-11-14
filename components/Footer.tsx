
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center p-4 text-gray-400 text-sm">
      <p>
        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-gold hover:text-yellow-300 transition-colors">HSINI MOHAMED</a>
      </p>
      <p className="mt-1">
        <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a> | doodax.com
      </p>
    </footer>
  );
};

export default Footer;
