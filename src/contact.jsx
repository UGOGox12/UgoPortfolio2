function Contact(){
    return(
    <>
    <section id="cont" className="contact text-white flex flex-col justify-center gap-4 items-center w-[100%] m-auto ">
  <h2 className="text-4xl text-center font-bold mb-7 mt-8 max-sm:mb-15">Contact <span  className="text-sky-400">Me !</span></h2>

  <form action="wronggweg@gmail.com" method="post" className="h-[500px]  flex flex-col  w-[70%] p-4 justify-center items-center" >

    <div className="input-box flex gap-4 justify-between w-[100%] max-sm:flex-col max-sm:gap-0 items-center">
      <div className="w-[90%]">
        <input type="text"  placeholder="Full Name" required  className="relative input-field border-3  border-sky-400 rounded-[5px] w-[100%] h-[50px] mb-4 p-2.5"/>
        <span className="focus"></span>
      </div>

      <div className="w-[90%]" >
        <input type="text"  placeholder="Email Address" required className="input-field border-3 relative  w-[100%] border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5 "  />
        <span className="focus"></span>
      </div>

    </div>


     <div className="input-box flex gap-4 justify-between relative w-[100%] max-sm:flex-col max-sm:gap-0 items-center">
      <div className="w-[90%]">
        <input type="number"  placeholder="Mobile No." required className="input-field relative border-3 w-[100%] border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5"  />
        <span className="focus"></span>
      </div>

      <div className="w-[90%]" >
        <input type="text"  placeholder="Email Subject" required className="input-field relative border-3 w-[100%] relayive border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5 focus:outline-none "  />
        <span className="focus"></span>
      </div>

    </div>
    <div className=" flex justify-center items-center  w-[100%]" >
      <textarea name="" id="" cols="30" rows="30" placeholder="What's Your Message?" required className=" textarea-field border-3 relative  border-sky-400 rounded-[5px] w-[100%] p-3 h-[15rem] max-sm:w-[90%] "></textarea>
      <span className="focus"></span>
    </div>
    <div className="  mt-6 btn-box w-[345px] h-[50px] flex items-center justify-center max-sm:mb-15 max-sm:mt-5">
        <a
          href="mailto:wronggweg@gmail.com"
          className=" btn  text-center relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center  "
        >
          <button type="submit"  className="w-23 hover:bg-blue-950 hover:text-sky-400 h-[100%]  flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  ">
            SUBMIT
          </button>
        </a>
      </div>
  </form>
</section>
    
    </>
    )
}

export default Contact;