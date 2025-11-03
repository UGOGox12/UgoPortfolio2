import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Contact from './contact.jsx';
import About from './About.jsx';
import Home from './home.jsx';
import Skills from './Skills.jsx';
import Education from './Ed.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
createRoot(document.getElementById('root')).render(
<>
<div className=' w-[100vw] h-[100vh]  '>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>
</div>
</>
)