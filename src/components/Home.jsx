// Home.js

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


library.add(faFire, faBell);

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Profile Section */}


      {/* Mood Section */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">How are you feeling today?</h2>

        {/* Cards for Mobile */}
        <div className="flex flex-col space-y-4">
          <div className="bg-cover bg-center h-32 rounded-md" style={{ backgroundImage: 'url("path_to_image.jpg")' }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-white mb-2">Happy</h3>
              <p className="text-sm text-white">Feeling joyful and positive today.</p>
            </div>
          </div>

          <div className="bg-cover bg-center h-32 rounded-md" style={{ backgroundImage: 'url("path_to_image.jpg")' }}>
            <div className="bg-black bg-opacity-50 p-4 rounded-md">
              <h3 className="text-lg font-semibold text-white mb-2">Calm</h3>
              <p className="text-sm text-white">Feeling relaxed and at peace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Task Section */}
   {/* Daily Task Section */}
<div className="p-4">
    <Link to='/task1'>
  
  <div className="bg-purple-800 text-white p-4 rounded-md">
    <h2 className="text-2xl font-semibold mb-4">Daily Tasks</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Card 1 */}
    
    </div>
  </div>
  </Link>
  <Link to='/resources' >
  <div className="bg-cover bg-center h-24 md:h-32 rounded-md" style={{ backgroundImage: 'url("path_to_image.jpg")' }}>
        <div className="bg-black bg-opacity-50 p-2 md:p-4 rounded-md">
          <h3 className="text-lg font-semibold text-white mb-1 md:mb-2">Resources</h3>
          <p className="text-sm text-white">Check out helpful resources.</p>
        </div>
      </div>
      </Link>

      {/* Card 2 */}
      <Link to='/mindfullness'>
      <div className="bg-cover bg-center h-24 md:h-32 rounded-md" style={{ backgroundImage: 'url("path_to_image.jpg")' }}>
        <div className="bg-black bg-opacity-50 p-2 md:p-4 rounded-md">
          <h3 className="text-lg font-semibold text-white mb-1 md:mb-2">Mindfulness</h3>
          <p className="text-sm text-white">Practice mindfulness for a peaceful mind.</p>
        </div>
      </div>
      </Link>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default Home;
