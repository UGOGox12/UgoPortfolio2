export default function Home(){
    return(
        <>
         <section id="Home" className="home text-white mt-20 p-[30px] items-center ml-13 inline-block " >
      <div className="home-content max-w-[600px] ">
        <h1 className="relative text-5xl font-extrabold Open">
          Hey, I'm Ugochukwu Esomonu
        </h1>
        <h3 className=" dev  relative Open text-3xl font-bold text-transparent ">
          Frontend Developer
        </h3>
        <p className=" relative Open mt-3 mb-3">
          Lorem ipoom dolor, sit amet consectetur adipisicing elit. Reiciendis
          voluptas ducimus id. Non, officiis iure nulla ratione nemo
          voluptatibus error quas, sit minima molestiae, fugit quo facere?
        </p>
        <div className="btn-box w-[345px] h-[50px] flex items-center justify-between">
          <a
            href="#"
            className=" relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center "
          >
            <span className=" w-19 hover:bg-blue-950 hover:text-sky-400 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
              Hire Me
            </span>
          </a>
          <a
            href="#"
            className="  relative w-[150px] text-sky-400 h-[100%]  inline-flex rounded-2xl border-2 border-sky-400  font-semibold items-center justify-center bg-transparent "
          >
            <span className=" w-22 hover:bg-sky-400 hover:text-blue-950 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
              Lets Talk
            </span>
          </a>
        </div>
      </div>
      <div className="my-Socials flex  gap-20 mt-7 ml-5">
        <a href="#">
          {" "}
          <img
            src="./src/assets/instagramL.svg"
            alt="hey"
            className="w-7 h-7 rounded-4xl hover:scale-[1.5] transition-all "
          />
        </a>
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