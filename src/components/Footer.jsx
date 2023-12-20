import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-blue-500 fixed bottom-0 left-0 w-352 h-56 flex justify-around items-center rounded-t-3xl">
      <Link to="/">
        <div className="text-white">
          <i className="fas fa-home text-2xl"></i>
        </div>
      </Link>
      <Link to="/community">
        <div className="text-white">
          <i className="fas fa-users text-2xl"></i>
        </div>
      </Link>
      <Link to="/therapist-connection">
        <div className="text-white">
          <i className="fas fa-user-md text-2xl"></i>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
