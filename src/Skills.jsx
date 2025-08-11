function Skills(){
    return(
        <>
        
<section className="skills text-white pb-[4rem] h-auto p-15" id="skills" >
  <h2 className="text-[2.5rem] font-bold mb-15 text-center">
        My <span className="text-sky-400 ">Skills</span>
      </h2>
      <div className="skills-row flex-wrap flex gap-[5rem]   ">
        <div className="skill-col flex-col ">
          <h3 className="text-2xl mb-[1.4rem]">Coding Skills</h3>
        <div className="skill-box  ">
          <div className="skill-content relative border-2 border-sky-400 rounded-2xl p-[.5rem] pb-[1.5rem]">

            <div className="progress">
              <h3>HTML <span className="text-sky-400">100%</span></h3>
              <div className="bar"><span></span></div>
            </div>

            <div className="progress">
              <h3>CSS <span className="text-sky-400">85%</span></h3>
              <div className="bar"><span className="w-[85%]"></span></div>
            </div>

            <div className="progress">
              <h3>Javascipt <span className="text-sky-400" >70%</span></h3>
              <div className="bar"><span className="w-[70%]"></span></div>
            </div>

            <div className="progress">
              <h3>Python <span className="text-sky-400">80%</span></h3>
              <div className="bar"><span className="w-[80%]"></span></div>
            </div>

          </div>
        </div>
        </div>

        <div className="skill-col">
          <h3 className="text-2xl mb-[1.4rem]">Coding Skills</h3>
        <div className="skill-box">
          <div className="skill-content  relative border-2 border-sky-400 rounded-2xl p-[.5rem] pb-[1.5rem]">

            <div className="progress">
              <h3>HTML <span className="text-sky-400">100%</span></h3>
              <div className="bar"><span className="w-[100%]"></span></div>
            </div>

            <div className="progress">
              <h3>CSS <span className="text-sky-400">85%</span></h3>
              <div className="bar"><span className="w-[85%]"></span></div>
            </div>

            <div className="progress">
              <h3>Javascipt <span className="text-sky-400" >70%</span></h3>
              <div className="bar"><span className="w-[70%]"></span></div>
            </div>

            <div className="progress">
              <h3>Python <span className="text-sky-400">80%</span></h3>
              <div className="bar"><span className="w-[80%]"></span></div>
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
