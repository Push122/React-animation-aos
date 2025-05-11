// import React, { useState } from "react";
// import { RiFacebookCircleFill } from "react-icons/ri";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
// import { auth } from "../../firebase";


// const Signup = () => {
//   const [name,setName]=useState('')
//   const [email,setEmail]=useState('')
//   const [Password,setPassword]=useState('')
//   const [confirmpassword,setconfirmPassword]=useState('')
//   const createaccount=async()=>{
//     try {
//      await createUserWithEmailAndPassword(auth,email,Password)
//      console.log("Signup user seccessfully");
//      setName('')
//      setEmail('')
//      setPassword('')
//      setPassword('')
//      setconfirmPassword('')
     

      
//     } catch (error) {
//       console.log("Error is:",error.message);
      
      
//     }
//   }
//   const Navigate=useNavigate()
//   return (
//     <>
//       <div
//         data-aos="flip-up"
//         className=" h-screen w-screen bg-white border border-gray-300 flex justify-center items-center"
//       >
//         <div className=" h-auto w-auto border border-gray-200 shadow-2xl hover:shadow-blue-300 px-20 py-11 rounded-lg">
//           <div>
//             <h1 className=" text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-transparent bg-clip-text text-transparent">
//               Sign Up
//             </h1>
//             <div className=" ml-2">
//             <p className=" mt-4">
//                 {" "}
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-64 shadow-xl pl-2"
//                   type="text"
//                   placeholder="Enter name"
//                   value={name}
//                   onChange={(e)=>setName(e.target.value)}
//                 />{" "}
//               </p>
//               <p className=" mt-6">
             
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-64 shadow-xl pl-2 "
//                   type="text"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
//                 />
//               </p>
//               <p className=" mt-4">
//                 {" "}
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-64 shadow-xl pl-2"
//                   type="text"
//                   placeholder="Create Password"
//                   value={Password}
//                   onChange={(e)=>setPassword(e.target.value)}
//                 />{" "}
//               </p>
//               <p className=" mt-4">
//                 {" "}
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-64 shadow-xl pl-2"
//                   type="text"
//                   placeholder=" Confirm Password"
//                   value={confirmpassword}
//                   onChange={(e)=>setconfirmPassword(e.target.value)}
//                 />{" "}
//               </p>
//             </div>
//           </div>

//           <div className=" mt-3 h-10 text-center border border-gray-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900">
//             <button className=" mt-2 text-white" onClick={createaccount}>Signup</button>
//           </div>
//           <div className=" flex">
//             <div className=" mt-3">Already have an account?</div>
//             <button onClick={()=>Navigate("/")} className=" mt-3 ml-2 text-blue-800">Login</button>
//           </div>
//           <div className=" mt-5 border border-gray-300"></div>
//           <div className=" mt-6 h-10 text-center border border-gray-200 rounded-lg bg-blue-500">
//             <button className=" mr-6 bg-white rounded-full  ">
//               <RiFacebookCircleFill />
//             </button>
//             <button className=" mt-2 text-white">Login with facebook</button>
//           </div>
//           <div className=" mt-6 h-10 text-center border border-gray-200 rounded-lg bg-white cursor-pointer shadow-xl hover:shadow-red-600">
//             <button className=" mr-6 bg-white rounded-full ">
//               {" "}
//               <FcGoogle />{" "}
//             </button>
//             <button className=" mt-2 text-black ">Login with google</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;


























// Note: Before creating cokie

// import React, { useState } from "react";
// import { RiFacebookCircleFill } from "react-icons/ri";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [confirmpassword, setconfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const Navigate = useNavigate();

//   const createaccount = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, Password);
//       console.log("Signup user with email successfully");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setconfirmPassword("");
//       alert(`Signup ${name} with email successfull `)
//       Navigate('/')
      
//     } catch (error) {
//       console.log("Error is:", error.message);
//     }
//   };

//   return (
//     <>


 
   
//     <div className="h-screen w-screen bg-transparent flex justify-center items-center">
//     <div data-aos="flip-up"
//        className=" h-screen w-screen bg-violet-400 border border-gray-300 flex justify-center items-center">
//       <div className="px-12 py-10 rounded-lg shadow-2xl border border-blue-500 bg-violet-300">
//         <h1 className="text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-clip-text text-transparent">
//           Sign Up
//         </h1>

//         <div className="ml-2">
//           <p className="mt-4">
//             <input
//               className="h-11 border border-blue-700 rounded-lg w-64 shadow-xl pl-2"
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </p>

//           <p className="mt-6">
//             <input
//               className="h-11 border border-blue-700 rounded-lg w-64 shadow-xl pl-2"
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </p>

//           {/* Password Field */}
//           <div className="mt-4 relative">
//             <input
//               className="h-11 border border-blue-700 rounded-lg w-64 shadow-xl pl-2 pr-10"
//               type={showPassword ? "text" : "password"}
//               placeholder="Create Password"
//               value={Password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600"
//             >
//               {showPassword ?  <AiFillEye />: <AiFillEyeInvisible />}
//             </button>
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mt-4 relative">
//             <input
//               className="h-11 border border-blue-700 rounded-lg w-64 shadow-xl pl-2 pr-10"
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmpassword}
//               onChange={(e) => setconfirmPassword(e.target.value)}
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600"
//             >
//               {showConfirmPassword ? <AiFillEye />: <AiFillEyeInvisible />}
//             </button>
//           </div>
//         </div>

//         <div className="mt-3 h-10 text-center border border-gray-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900">
//           <button className="mt-2 text-white" onClick={createaccount}>
//             Signup
//           </button>
//         </div>

//         <div className="flex">
//           <div className="mt-3">Already have an account?</div>
//           <button
//             onClick={() => Navigate("/")}
//             className="mt-3 ml-2 text-blue-800"
//           >
//             Login
//           </button>
//         </div>

//         <div className="mt-5 border border-blue-600" />

//         <div className="mt-6 h-10 text-center border border-gray-200 rounded-lg bg-blue-500">
//           <button className="mr-6 bg-white rounded-full">
//             <RiFacebookCircleFill />
//           </button>
//           <button className="mt-2 text-white">Login with Facebook</button>
//         </div>

//         <div className="mt-6 h-10 text-center border border-gray-200 rounded-lg bg-white cursor-pointer shadow-xl hover:shadow-red-600">
//           <button className="mr-6 bg-white rounded-full">
//             <FcGoogle />
//           </button>
//           <button className="mt-2 text-black">Login with Google</button>
//         </div>
//       </div>
//         </div>
//     </div>
  
//      </>
//   );
// };

// export default Signup;


























// Note:- After creating cooking

import React, { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Cookies from "js-cookie"; // Correct import convention

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fixed variable name (Password to password)
  const [confirmPassword, setConfirmPassword] = useState(""); // Fixed variable name
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate(); // Fixed variable name (Navigate to navigate)

  const handleSignup = async () => {
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Create user with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");

      // Save name to cookie after successful signup
      Cookies.set("email", email, { expires: 7 }); // Cookie expires in 7 days

      Cookies.set("isverified", true, { expires: 7 }); // Cookie expires in 7 days
     const data =  Cookies.get("email")
     console.log("email is :---------",data)
      alert(`Signup successful for ${name}! Name saved to cookie.`);

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Navigate to home page
            Cookies.set("isverified", "true", { expires: 7 }); // Cookie expires in 7 days
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Signup failed: " + error.message);
    }
  };

  return (
   <>
   <div className="min-h-screen w-full bg-transparent flex justify-center items-center px-4">
  <div
    data-aos="flip-up"
    className="w-full max-w-md bg-violet-400 border border-gray-300 flex justify-center items-center p-4"
  >
    <div className="w-full px-6 py-8 rounded-lg shadow-2xl border border-blue-500 bg-violet-300">
      <h1 className="text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-clip-text text-transparent">
        Sign Up
      </h1>

      <div>
        {/* Name */}
        <input
          className="mt-4 h-11 border border-blue-700 rounded-lg w-full shadow-xl pl-2"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          className="mt-4 h-11 border border-blue-700 rounded-lg w-full shadow-xl pl-2"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="mt-4 relative">
          <input
            className="h-11 border border-blue-700 rounded-lg w-full shadow-xl pl-2 pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600"
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mt-4 relative">
          <input
            className="h-11 border border-blue-700 rounded-lg w-full shadow-xl pl-2 pr-10"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-600"
          >
            {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
      </div>

      {/* Signup Button */}
      <div className="mt-4 h-10 text-center border border-gray-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900">
        <button className="mt-2 text-white" onClick={handleSignup}>
          Signup
        </button>
      </div>

      {/* Already have an account */}
      <div className="flex flex-wrap justify-center mt-4 text-sm">
        <span>Already have an account?</span>
        <button
          onClick={() => navigate("/login")}
          className="ml-2 text-blue-800 underline"
        >
          Login
        </button>
      </div>

      <div className="mt-5 border border-blue-600" />

      {/* Facebook Login */}
      <div className="mt-6 h-10 flex items-center justify-center rounded-lg bg-blue-500 space-x-2">
        <button className="bg-white rounded-full p-1 text-blue-600">
          <RiFacebookCircleFill size={22} />
        </button>
        <button className="text-white">Login with Facebook</button>
      </div>

      {/* Google Login */}
      <div className="mt-4 h-10 flex items-center justify-center rounded-lg bg-white shadow-xl hover:shadow-red-600 space-x-2">
        <button className="rounded-full p-1">
          <FcGoogle size={22} />
        </button>
        <button className="text-black">Login with Google</button>
      </div>
    </div>
  </div>
</div>


   </>
  );
};

export default Signup;