// import React, { useState } from "react";

// function Contact() {
//   const [status, setStatus] = useState({ message: "", type: "" });


//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData);

//   try {
//     const response = await fetch("http://localhost:3001/api/sendEmail", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();

//     if (result.success) {
//       setStatus({ message: result.message, type: "success" });
//       e.target.reset(); // clear form
//     } else {
//       setStatus({ message: result.message, type: "error" });
//     }
//   } catch (err) {
//     setStatus({ message: "Something went wrong!", type: "error" });
//   }

//   setTimeout(() => setStatus({ message: "", type: "" }), 4000);
// };


//   return (
//     <>
//       <section
//         id="cont"
//         className="contact text-white flex flex-col justify-center gap-4 items-center w-[100%] m-auto "
//       >
//         <h2 className="text-4xl text-center font-bold mb-7 mt-8 max-sm:mb-15">
//           Contact <span className="text-sky-400">Me !</span>
//         </h2>

//         <form
//           // action="http://localhost:3001/api/sendEmail"
//           onSubmit={handleSubmit}
//           // method="post"
//           className="h-[500px]  flex flex-col  w-[70%] p-4 justify-center items-center max-sm:w-[90%]"
//         >
//           <div className="input-box flex gap-4 justify-between w-[100%] max-sm:flex-col max-sm:gap-0  items-center">
//             <div className="w-[90%]">
//               <input
//                 type="text"
//                 name="Full Name"
//                 placeholder="Full Name"
//                 required
//                 className="relative input-field border-3  border-sky-400 rounded-[5px] w-[100%] h-[50px] mb-4 p-2.5 "
//               />
//               <span className="focus"></span>
//             </div>

//             <div className="w-[90%]">
//               <input
//                 type="text"
//                 name="Email Address"
//                 placeholder="Email Address"
//                 required
//                 className="input-field border-3 relative  w-[100%] border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5 "
//               />
//               <span className="focus"></span>
//             </div>
//           </div>

//           <div className="input-box flex gap-4 justify-between relative w-[100%] max-sm:flex-col max-sm:gap-0 items-center">
//             <div className="w-[90%]">
//               <input
//                 type="number"
//                 name="Mobile No."
//                 placeholder="Mobile No."
//                 required
//                 className="input-field relative border-3 w-[100%] border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5"
//               />
//               <span className="focus"></span>
//             </div>

//             <div className="w-[90%]">
//               <input
//                 type="text"
//                 name="Email Subject"
//                 placeholder="Email Subject"
//                 required
//                 className="input-field relative border-3 w-[100%] relayive border-sky-400 rounded-[5px]  h-[50px] mb-4 p-2.5 focus:outline-none "
//               />
//               <span className="focus"></span>
//             </div>
//           </div>
//           <div className=" flex justify-center items-center  w-[100%]">
//             <textarea
//               name="What's Your Message?"
              
//               cols="30"
//               rows="30"
//               placeholder="What's Your Message?"
//               required
//               className=" textarea-field border-3 relative  border-sky-400 rounded-[5px] w-[100%] p-3 h-[15rem] max-sm:w-[90%] "
//             ></textarea>
//             <span className="focus"></span>
//           </div>
//           <div className="  mt-6 btn-box w-[345px] h-[50px] flex items-center justify-center max-sm:mb-15 max-sm:mt-5">
//             <span className=" btn  text-center relative w-[150px] bg-sky-400 h-[100%] border-2 border-sky-400 inline-flex rounded-2xl text-blue-950  font-semibold items-center justify-center  ">
//               <button
//                 type="submit"
//                 className="w-23 hover:bg-blue-950 hover:text-sky-400 h-[100%]  flex items-center justify-center transition-all duration-500 rounded-2xl hover:w-full  "
//               >
//                 SUBMIT
//               </button>
//             </span>
//           </div>
//         </form>


//         {status.message && (
//   <div
//     className={`mt-4 p-3 rounded-lg border transition-opacity duration-1000 ${
//       status.type === "success"
//         ? "border-green-500 text-green-700 bg-green-50"
//         : "border-red-500 text-red-700 bg-red-50"
//     }`}
//   >
//     {status.message}
//   </div>
// )}


//       </section>
//     </>
//   );
// }

// export default Contact;
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent full page reload

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3001/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ message: "Successfully sent!", type: "success" });
        e.target.reset(); // clear form
      } else {
        setStatus({ message: "Failed to send message.", type: "error" });
      }
    } catch (err) {
      setStatus({ message: "Something went wrong!", type: "error" });
    }

    // Clear message after 4s
    setTimeout(() => setStatus({ message: "", type: "" }), 4000);
  };

  return (
    <section
      id="cont"
      className="contact text-white flex flex-col justify-center gap-4 items-center w-full m-auto"
    >

            {/* Status message */}
      {status.message && (
        <div
          className={`mt-4 p-3 rounded-lg border transition-opacity duration-1000 ${
            status.type === "success"
              ? "border-green-500 text-green-700 bg-green-50"
              : "border-red-500 text-red-700 bg-red-50"
          }`}
        >
          {status.message}
        </div>
      )}
      <h2 className="text-4xl text-center font-bold mb-7 mt-8 max-sm:mb-15">
        Contact <span className="text-sky-400">Me !</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="h-[500px] flex flex-col w-[70%] p-4 justify-center items-center max-sm:w-[90%]"
      >
        <div className="flex gap-4 justify-between w-full max-sm:flex-col max-sm:gap-0 items-center">
          <div className="w-[90%]">
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              required
              className="border-2 border-sky-400 rounded-md w-full h-[50px] mb-4 p-2.5"
            />
          </div>

          <div className="w-[90%]">
            <input
              type="email"
              name="Email Address"
              placeholder="Email Address"
              required
              className="border-2 border-sky-400 rounded-md w-full h-[50px] mb-4 p-2.5"
            />
          </div>
        </div>

        <div className="flex gap-4 justify-between w-full max-sm:flex-col max-sm:gap-0 items-center">
          <div className="w-[90%]">
            <input
              type="number"
              name="Mobile No."
              placeholder="Mobile No."
              required
              className="border-2 border-sky-400 rounded-md w-full h-[50px] mb-4 p-2.5"
            />
          </div>

          <div className="w-[90%]">
            <input
              type="text"
              name="Email Subject"
              placeholder="Email Subject"
              required
              className="border-2 border-sky-400 rounded-md w-full h-[50px] mb-4 p-2.5"
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <textarea
            name="What's Your Message?"
            placeholder="What's Your Message?"
            required
            className="border-2 border-sky-400 rounded-md w-full p-3 h-[15rem] max-sm:w-[90%]"
          />
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="w-[150px] bg-sky-400 h-[50px] border-2 border-sky-400 rounded-2xl text-blue-950 font-semibold hover:bg-blue-950 hover:text-sky-400 transition-all duration-500"
          >
            SUBMIT
          </button>
        </div>
      </form>


    </section>
  );
}

export default Contact;