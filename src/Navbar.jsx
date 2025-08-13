import { useState } from "react";
import { createRoot } from "react-dom/client";
// import back from "./assets/epi.jpg"






// document.querySelector("header BUT").addEventListener("click", ()=>{
//     document.querySelector("nav").classList.toggle("ham")
//    document.querySelector("nav a").classList.toggle("hamLink")
// })



export default function Navbar(){
  const [hamburger,setHamburger]= useState(false)

  
function hamburger1(){
  setHamburger(!hamburger)
}

  return(
  <> 
    <header className=" justify-center stick fixed z-50 bg-transparent  w-[100%] top-0 left-0 p-[20px] flex  items-center gap-[50%] max-sm:gap-[15%] transition-[1s]">
      <p href="#Home" className="relative text-3xl text-white font-black Open">
        Ugo.
      </p>
       <button onClick={hamburger1} className="BUT"  >
        <img src="./src/assets/hamburger-White.svg" alt="hamburger menu" />
       </button>
      <nav className={`text-white text-[18px] flex gap-3 ${hamburger && "ham"}`}>
        <a
          href="#"
          className={`ml-1 hover:text-sky-400 transition-all duration-450 active:text-red-400 ${hamburger && "hamLink" }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`ml-1 hover:text-sky-400 transition-all duration-450 active:text-red-400 ${hamburger && "hamLink" }`}
        >
          About
        </a>
        <a
          href="#edu"
          className={`ml-1 hover:text-sky-400 transition-all duration-450 active:text-red-400 ${hamburger && "hamLink" }`}
        >
          Education
        </a>
        <a
          href="#skills"
          className={`ml-1 hover:text-sky-400 transition-all duration-450 active:text-red-400 ${hamburger && "hamLink" }`}
        >
          Skills
        </a>
        <a
          href="#cont"
          className={`ml-1 hover:text-sky-400 transition-all duration-450 active:text-red-400 ${hamburger && "hamLink" }`}
        >
          Contacts
        </a>
      </nav>
    </header>
  </>
)}





