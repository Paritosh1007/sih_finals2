// Login.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import BgImage from '../img/BgImage.png';
import InputControl from './inputControl/InputControl';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';


const Signup = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState ({
        name:"",
        email:"",
        pass:"",
    })
    const [errorMsg,setErrorMsg] = useState("");
    const handleSubmission=()=>{
        if(!values.name||! values.email || !values.pass ){
            setErrorMsg("Fill all  fields");
            return ;
        }
        setErrorMsg("")
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth    , values.email,values.pass).then(async   (res)=>{
            setSubmitButtonDisabled(false)
            const user = res.user;
           await updateProfile (user,{
                displayName:values.name
            })
            navigate("/")
        }).catch((err)=>{
            setSubmitButtonDisabled(false);
            console.log("error",err)
        }); 
        


    }
    const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);
  return (
    <>
  <div class="relative">
  <img src={BgImage} alt="Image" class="w-full h-auto rounded-lg"/>
  <div class="absolute inset-0 bg-white bg-opacity-0 backdrop-filter backdrop-blur-sm rounded-lg flex flex-col justify-center items-center">

    {/* card */}
    <div className="max-w-md w-auto h-auto bg-white p-6 rounded-lg shadow-md ml-10 mr-10 bg-opacity-60">
        <h2 className=' text-center font-bold'>Hello </h2>
        <h2 className='text-center'>Welcome to the app</h2>
        <h2 className="text-2xl  mt-6 text-center font-semibold mb-6">Sign Up</h2>
        
        <form>

        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              email
            </label>
            <InputControl
            label="text"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              onChange={(event)=>{
                setValues((prev  )=>({
                    ...prev,email:event.target.value
                }))
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <InputControl
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your username"
              onChange={(event)=>{
                setValues((prev  )=>({
                    ...prev,name:event.target.value
                }))
              }}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <InputControl
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              onChange={(event)=>{
                setValues((prev  )=>({
                    ...prev,pass:event.target.value
                }))
              }}
            />
          </div>

          <div className="mb-6">
            <Link to='/questions'>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              onClick={handleSubmission}
            >
              Sign Up
            </button>
            </Link>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <hr className="w-1/4 border-t" />
          <span className="text-gray-500">or</span>
          <hr className="w-1/4 border-t" />
        </div>

        <div className="mt-6">
            <b>{errorMsg    }</b>
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Sign up with Google
          </button>
          <button className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500">
            Sign up with Twitter
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Signup;