export default function Home(){
    return(
        <>
         <section id="Home" className="home text-white mt-20 p-[30px] inline-block w-[100%] h-[100vh] m-auto max-sm:flex max-sm:flex-col max-sm:justify-center  max-sm:items-center max-sm:text-center" >
      <div className="home-content max-sm:m-0 max-w-[600px] mt-10 ml-10 flex flex-col gap-3.5 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <h1 className="relative text-5xl font-extrabold Open max-sm:text-4xl">
          Hey, I'm Ugochukwu Esomonu
        </h1>
        <h3 className=" dev  relative Open text-3xl font-bold text-transparent max-sm:text-2xl">
          Frontend Developer
        </h3>
        <p className=" relative Open mt-3 mb-3">
          I am a tech enthusiast who majors on frontend development.
          web development is my calling, So i believe i will always be the right person for
          the job. Feel free to glance through.
        </p>
        <div className="btn-box w-[345px] h-[50px] flex items-center justify-between">
          <a
            href="#"
            className=" relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center "
          >
            {/* PROJECT LINKS HERE */}
            <span className=" w-19 hover:bg-blue-950 hover:text-sky-400 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
              Hire Me
            </span>
          </a>
          <a
            href="#"
            className="  relative w-[150px] text-sky-400 h-[100%]  inline-flex rounded-2xl border-2 border-sky-400  font-semibold items-center justify-center bg-transparent "
          > 
             {/* DOWNLOAD CV HERE */}
            <span className=" w-[81%] text-center hover:bg-sky-400 hover:text-blue-950 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
              Download CV
            </span>
          </a>
        </div>
      </div>
      
      <div className="my-Socials max-sm:ml-0 Open  flex  gap-20 mt-20 ml-10 ">
        
        <a href="#" className="text-white">
          <img
            src="./src/assets/linkedin.svg"
            alt="hey"
            className="w-7 h-7 rounded-4xl bg-sky-400 hover:scale-[1.5] transition-all"
          />
        </a>
        <a href="#">
          <img
            src="./src/assets/github_repository.svg"
            alt="hey"
            className="w-7 h-7  border-sky-400 border-2 rounded-4xl bg-sky-400 hover:scale-[1.5] transition-all"
          />
        </a>
        <a href="#">
          <img
            src="./src/assets/google.svg"
            alt="hey"
            className="w-7 h-7  hover:scale-[1.5] transition-all rounded-4xl "
          />
        </a>
      </div>
    </section>
        </>
    )
}