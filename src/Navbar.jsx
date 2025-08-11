import { createRoot } from "react-dom/client";
// import back from "./assets/epi.jpg"

window.onscroll= () =>{
  var nav = document.querySelector('header');
  nav.classList.toggle('stick',window.scrollY>100);
}

// function hamburger(){
//   document.querySelector("nav").classList.toggle("ham")
//   document.querySelector("nav a").classList.toggle("hamLink")
// }

// document.querySelector("header BUT").addEventListener("click", ()=>{
//     document.querySelector("nav").classList.toggle("ham")
//    document.querySelector("nav a").classList.toggle("hamLink")
// })



export default function Navbar(){
  return(
  <> 
    <header className=" stick fixed z-50 bg-transparent  w-[100%] top-0 left-0 p-[20px] flex justify-around items-center gap-[50%] max-sm:gap-[20%] transition-[1s]">
      <p href="#Home" className="relative text-3xl text-white font-black Open">
        Ugo..
      </p>
       <button className=" BUT " >
        <img src="./src/assets/hamburger-White.svg" alt="hamburger menu" />
       </button>
      <nav className="text-white text-[18px]  ">
        <a
          href="#"
          className="ml-3 hover:text-sky-400 transition-all duration-450 active:text-red-400"
        >
          Home
        </a>
        <a
          href="#about"
          className="ml-3 hover:text-sky-400 transition-all duration-450"
        >
          About
        </a>
        <a
          href="#edu"
          className="ml-3 hover:text-sky-400 transition-all duration-450"
        >
          Education
        </a>
        <a
          href="#skills"
          className="ml-3 hover:text-sky-400 transition-all duration-450"
        >
          Skills
        </a>
        <a
          href="#cont"
          className="ml-3 hover:text-sky-400 transition-all duration-450"
        >
          Contacts
        </a>
      </nav>
    </header>


  </>
)}





