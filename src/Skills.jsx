function Skills(){
    return(
        <>
        
<section className=" w-[100%] m-auto  skills text-white pb-[4rem] h-auto p-15" id="skills" >
  <h2 className="text-[2.5rem] font-bold mb-15 text-center">
        My <span className="text-sky-400 ">Skills</span>
      </h2>
                <h3 className="text-2xl mb-[1.4rem] text-center">C<span className="text-sky-400">o</span>d<span className="text-sky-400">i</span>n<span className="text-sky-400">g</span> L<span className="text-sky-400">e</span>v<span className="text-sky-400">e</span>l<span className="text-sky-400">s</span></h3>

      <div className="skills-row flex-wrap flex gap-[5rem]   ">
        <div className="skill-col flex-col ">
        <div className="skill-box  ">
          <div className="skill-content relative border-2 border-sky-400 rounded-2xl p-[.5rem] pb-[1.5rem]">

            <div className="progress">
              <h3>HTML <span className="text-sky-400 font-extrabold">100%</span></h3>
              <div className="bar"><span></span></div>
            </div>

            <div className="progress">
              <h3>CSS <span className="text-sky-400 font-extrabold">90%</span></h3>
              <div className="bar"><span className="w-[90%]"></span></div>
            </div>

            <div className="progress">
              <h3>Javascipt <span className="text-sky-400 font-extrabold" >82%</span></h3>
              <div className="bar"><span className="w-[82%]"></span></div>
            </div>

            <div className="progress">
              <h3>Python <span className="text-sky-400 font-extrabold">80%</span></h3>
              <div className="bar"><span className="w-[80%]"></span></div>
            </div>

          </div>
        </div>
        </div>

        <div className="skill-col">
        <div className="skill-box">
          <div className="skill-content  relative border-2 border-sky-400 rounded-2xl p-[.5rem] pb-[1.5rem]">

            <div className="progress">
              <h3>React.js <span className="text-sky-400 font-extrabold">75%</span></h3>
              <div className="bar"><span className="w-[75%]"></span></div>
            </div>

            <div className="progress">
              <h3>Tailwind CSS <span className="text-sky-400 font-extrabold">85%</span></h3>
              <div className="bar"><span className="w-[85%]"></span></div>
            </div>

            <div className="progress">
              <h3>C/C++ <span className="text-sky-400 font-extrabold" >90%</span></h3>
              <div className="bar"><span className="w-[90%]"></span></div>
            </div>

            <div className="progress">
              <h3>Git,Version Control <span className="text-sky-400 font-extrabold">70%</span></h3>
              <div className="bar"><span className="w-[70%]"></span></div>
            </div>

          </div>
        </div>
        </div>
      </div>
</section>
        </>
    )
}

export default Skills;
