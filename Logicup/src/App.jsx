import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import './components/header.css'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import './components/home.css'
import './components/goals.css'
import './components/instructor.css'
import './components/achievements.css'
import './components/feedback.css'
import './components/learning.css'
import Footer from './components/Footer';
import './components/footer.css'
import PlayCourse from './components/PlayCourse';
import './components/playcourse.css'
import Course from './components/Course';
import './components/course.css'
function App() {

  return (
    <>
    <Router>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/about" element={<PlayCourse />} />
     </Routes>
     <Footer />
     </Router>
    </>
  )
}

export default App
