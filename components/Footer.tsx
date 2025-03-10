import React from 'react';

const Footer: React.FC = () => {
  const linkedInURL = 'https://acortar.link/QlJS3u'; // Reemplaza con tu URL de LinkedIn

  return (
    <footer className="text-left ">
      <p>
        Desarrollado por{' '}
        <a
          href={linkedInURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          @WillDev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
