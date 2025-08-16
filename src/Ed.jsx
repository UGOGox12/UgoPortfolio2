import calender from '/src/assets/calendar.svg'


export default function Education(){
    return(
        <>
            <section  className=" education text-white flex items-center justify-center flex-col p-[5rem] w-[100%] m-auto  " id="edu">
      <h2 className="text-4xl font-bold mb-15 text-center">
        My <span className="text-sky-400">Journey</span>
      </h2>
      <div className="education-row flex gap-[4rem] max-sm:flex-col justify-center max-sm:text-center">
        <div className="education-column ">

          <h3 className="text-2xl font-bold ml-4 mb-4">Education</h3>

          <div className="education-box border-transparent border-l-sky-400 border-2">
            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem]">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem]"> <img alt="calender" src={calender} className="text-sky-400 w-6" />2023-Ongoing</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5">BSc. Software Eng.</h3>
                <p>
                  I am a student a Babcock University Ilishan Remo, located in
                  Nigeria,Ogun State. I am currently a Third year student studying 
                  Software Engineering with CGPA of 4.33 .
                  
                </p>
              </div>
            </div>

            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem]">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem]"> <img alt="calender" src={calender} className="text-sky-400 w-6" />2024-2025</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5"> Udemy, Full Stack Dev.</h3>
                <p>
                  I bought the best selling Course i could find on Udemy.
                  Which was Dr. Angela Yu's Full Stack development Bootcamp.
                  It was very informative to say the list and fully Understood.
                
                </p>
              </div>
            </div>

            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem]">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem]"> <img alt="calender" src={calender} className="text-sky-400 w-6" />2025</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5">Python Programming</h3>
                <p>
                  I was looking for Programming languages to add my Arsenal.
                  And studied Under New Horizon Traning center. Where i 
                  learned intermediate and advanced python programming.
                
                </p>
              </div>
            </div>
          </div>
        </div>




        <div className="education-column ">
          <h3 className="text-2xl font-bold ml-4 mb-4 ">Experience</h3>
          <div className="education-box border-transparent border-l-sky-400 border-2">
            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem]">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem]"> <img alt="calender" src={calender} className="text-sky-400 w-6" />2024-2025</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5">Freelanced Preparkering</h3>
                <p>
                  A client had requested for a system that could be used for  
                  Managing and booking parking spaces in a Parking Garage. 
                  I as the head frontend developer and my team completed the task.
                 
                </p>
              </div>
            </div>

            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem]">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem]"> <img alt="calender" src={calender} className="text-sky-400 w-6" />2023-2024</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5">Group Project</h3>
                <p>
                  A group of associates and i were tasked to build a fully Responsive website for 
                  a local restaurant. A deadline was given, but we had finished
                  all in record time.
               
                </p>
              </div>
            </div>

            <div className="education-content relative pl-[1.5rem]">
              <div className="content relative p-[1.5rem] border-[.2rem] border-sky-400 rounded-[.6rem] mb-[2rem] ">
                <div className="year flex gap-2 text-[1.5rem] text-sky-400 pb-[.5rem] "> <img alt="calender" src={calender} className="text-sky-400 w-6  " /> 2025</div>
                <h3 className="font-bold text-[1.4rem] mb-1.5">freelanced Pygame</h3>
                <p>
                  I already had a hobby of building simply pthon games. So when
                  i had heard a client was looking for a tech enthusiast who could
                  deliver a simple flappy bird like game, i was ready with prototypes.
               
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
        </>
    )
}