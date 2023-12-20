// Login.js

import React from 'react';
import { Link } from 'react-router-dom';
import BgImage from '../img/BgImage.png';


const Login = () => {
  return (
    <>
  <div class="relative">
  <img src={BgImage} alt="Image" class="w-full h-auto rounded-lg"/>
  <div class="absolute inset-0 bg-white bg-opacity-0 backdrop-filter backdrop-blur-sm rounded-lg flex flex-col justify-center items-center">

    {/* card */}
    <div className="max-w-md w-auto h-auto bg-white p-6 rounded-lg shadow-md ml-10 mr-10 bg-opacity-60">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <Link to='/questions'>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign In
            </button>
            </Link>
            <Link to='/Signup'>
            <h1 className='text-center my-4 hover:font-bold hover:cursor-pointer '>Or new to the app Sign Up ?</h1>
            </Link>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <hr className="w-1/4 border-t" />
          <span className="text-gray-500">or</span>
          <hr className="w-1/4 border-t" />
        </div>

        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Sign In with Google
          </button>
          <button className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500">
            Sign In with Twitter
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;