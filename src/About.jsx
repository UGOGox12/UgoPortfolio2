export default function About(){
    return(
        <>
        <section
      className=" AboutUsSection text-white about flex justify-center items-center  flex-col gap-[1.5rem] pb-[6rem] p-23 w-[100%] m-auto max-sm:p-10  "
      id="about"
    >
      <h2 className="heading text-[2.5rem] font-bold  text-center mb-[.7rem] ">
        About <span className="text-sky-400">Me</span>
      </h2>
      <div className="about-img relative w-[15rem] h-[15rem] rounded-[50%] flex justify-center items-center  ">
       
          
        <div className="  p-5 Cir absolute ">
          <img
          src="/src/assets/blue.jpg"
          alt="#"
          className=" h-[100%] block w-[100%] rounded-[50%] border-[.5rem] border-sky-400 "
        />
        </div>
          </div>        

      <div className="about-content text-center"></div>
      <h3 className="text-4xl text-center ">Frontend <span className="text-sky-400">Developer!</span></h3>
      <p className="text-center">
        Like you've seen, my name is Ugochukwu Esomonu, but please 
        call me Ugo for short. I like coding simple Pygames for fun, love board
        games and enjoy the occasional movies/series. But I have to say that
        im not the locked inside of my house kind of person. I love to engage in 
        all sorts of sports, excersies and explore. My current passion for coding
        helps me bring designers creations to life. I love challenges, working with
        effiicent teams, and open to work with any tech stack need.
        As a Software Engineer i believe my job precedes web/mobile development.
        It's about using my tech based skills to bring people's imagination, hopes and
        and Dreams to life.
      </p>

      <div className="btn-box w-[345px] h-[50px] flex items-center justify-center ">
        <a
          href="#"
          className="btn text-center relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center "
        >
          <span className=" w-[67%] hover:bg-blue-950 hover:text-sky-400 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
            Read More
          </span>
        </a>
      </div>
    </section>
        </>
    )
}