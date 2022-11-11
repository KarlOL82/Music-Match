import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./styles.css"

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 bg-yellow-800  mt-auto bg-secondary fixed inset-x-0  bottom-0 p-4 ">
      <div className="container text-center mb-5">


        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
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
