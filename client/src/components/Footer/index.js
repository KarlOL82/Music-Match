import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./styles.css"

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="flex-col fixed w-100 bg-gray-300 mt-auto bg-secondary inset-x-0 bottom-0 p-4 items-end" aria-label="Site Footer">
      
      <div className="container text-center mb-5">


        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="text-gray-900">
          This has been{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          A JANK Production
        </h4>
        
      </div>
    </footer>
  );
};

export default Footer;
