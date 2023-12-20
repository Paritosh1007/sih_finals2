import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Questions'
import Question2 from './components/Questions2'
import Home from './components/Home'
import Task1 from './components/Tasks/Task1'
import Resources from './components/Resources'
import Mindfulness from './components/Mindfullness'
import Books from './components/Resources/Books'
import Blogs from './components/Resources/Blogs'
import Audios from './components/Resources/Audios'
import Videos from './components/Resources/Videos'
import Podcast from './components/Resources/Podcast'
import Meditation from './components/Mindfullness/Meditation'
import VRTherapy from './components/Mindfullness/Vrtherephy'
import MusicTherapySection from './components/Mindfullness/Musictherephy'
import ExerciseSection from './components/Mindfullness/Excercise'
import Calmness from './components/Mindfullness/Clamness'
import Brainwaves from './components/Mindfullness/BrainWaves'
import Profile from './components/Profile'
import Signup from './components/Signup'
import { auth } from './Firebase'

const App = () => {
  const [userName , setUserName]=useState("")
useEffect =(()=>{
  auth.onAuthStateChanged((user)=>{
    console.log(user);
  })
},[]);
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/questions' element={<Question/>}/>
     <Route path='/questions2' element={<Question2/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/taks1' element={<Task1/>}/>
     <Route path='/resources' element={<Resources/>}/>
     <Route path='/mindfullness' element={<Mindfulness/>}/>
     <Route path='/books' element={<Books/>}/>
     <Route path='/blogs' element ={<Blogs/>}/>
     <Route path='/audio' element={<Audios/>}/>
     <Route path='/videos' element={<Videos/>}/>
     <Route path='/podcast' element={<Podcast/>}/>
     <Route path='/meditation' element={<Meditation/>}/>
     <Route path='/Vrtherephy' element={<VRTherapy/>}/>
     <Route path='/Musictherephy' element={<MusicTherapySection/>}/>
     <Route path='/Excercies' element={<ExerciseSection/>}/>
     <Route path='/calmness' element={<Calmness/>}/>
     <Route path='/brainWaves' element={<Brainwaves/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/signup' element={<Signup/>}/>




    </Routes>
    
    
    </>
  )
}

export default App