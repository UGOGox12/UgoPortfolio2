export default function About(){
    return(
        <>
        <section
      className=" text-white about flex justify-center items-center  flex-col gap-[1.5rem] pb-[6rem] p-23 "
      id="about"
    >
      <h2 className="heading text-[5rem]  text-center mb-[1rem] ">
        About <span className="text-sky-400">Me</span>
      </h2>
      <div className="about-img relative w-[15rem] h-[15rem] rounded-[50%] flex justify-center items-center  ">
        <img
          src="/src/assets/avatar.jpg"
          alt="#"
          className=" w-[90%] rounded-[50%] border-[.5rem] border-sky-400 "
        />

        <span className=" p-4 circle-spin "></span>
      </div>
      <div className="about-content text-center"></div>
      <h3 className="text-4xl ">Frontend Developer !</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vero
        voluptate nisi porro possimus voluptatum tenetur libero repudiandae
        incidunt ipsum necessitatibus facere, nulla adipisci mollitia obcaecati
        qui, exercitationem ullam fugiat. Ex, alias est repellendus dicta
        placeat fuga maxime adipisci exercitationem culpa delectus facere vero
        velit quia porro, doloremque ea dolores?
      </p>

      <div className="btn-box w-[345px] h-[50px] flex items-center justify-center ">
        <a
          href="#"
          className="btn text-center relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center "
        >
          <span className=" w-23 hover:bg-blue-950 hover:text-sky-400 h-[100%] flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
            Read More
          </span>
        </a>
      </div>
    </section>
        </>
    )
}