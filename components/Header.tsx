import React, { useState } from 'react';
import Modal from './Modal';
import { SeoArticle } from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface HeaderProps {
    showNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNav = true }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const navLinks: { name: string; modal: ModalType }[] = [
    { name: 'About', modal: 'about' },
    { name: 'Contact', modal: 'contact' },
    { name: 'Guide', modal: 'guide' },
    { name: 'Privacy Policy', modal: 'privacy' },
    { name: 'Terms of Service', modal: 'terms' },
    { name: 'DMCA', modal: 'dmca' },
  ];

  const getModalContent = (modal: ModalType) => {
    switch (modal) {
        case 'guide':
            return <SeoArticle />;
        case 'about':
            return <p>This Sitemap Generator is a high-fidelity placeholder UI designed to showcase modern front-end development with React, TypeScript, and Tailwind CSS. It simulates the functionality of a real sitemap tool with a beautiful, responsive interface.</p>;
        case 'contact':
            return <p>For inquiries, please reach out to us at hsini.web@gmail.com or visit doodax.com.</p>;
        case 'privacy':
            return <p>This is a placeholder application and does not collect or store any personal data. All operations are performed on the client-side within your browser.</p>;
        case 'terms':
            return <p>By using this placeholder application, you agree that it is for demonstration purposes only and should not be used for production sitemap generation without further development.</p>;
        case 'dmca':
            return <p>This application does not host user-generated content. For any copyright concerns related to the application itself, please contact us.</p>;
        default:
            return null;
    }
  };
  
  const getModalTitle = (modal: ModalType) => {
    const link = navLinks.find(l => l.modal === modal);
    return link ? link.name : '';
  };

  return (
    <>
      <header className="py-4 px-8 text-white w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold">Sitemap Generator Pro</h1>
          {showNav && (
            <nav className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                <button 
                    key={link.name}
                    onClick={() => setActiveModal(link.modal)}
                    className="hover:text-gold transition-colors"
                >
                    {link.name}
                </button>
                ))}
            </nav>
          )}
        </div>
      </header>
      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setActiveModal(null)}
        title={getModalTitle(activeModal)}
      >
        <div className="text-gray-300">
          {getModalContent(activeModal)}
        </div>
      </Modal>
    </>
  );
};

export default Header;
