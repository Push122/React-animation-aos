// import React, { useState } from "react";
// import { RiFacebookCircleFill } from "react-icons/ri";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import {signInWithEmailAndPassword} from 'firebase/auth'
// import { auth } from "../../firebase";
// // import {signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, getAuth} from 'firebase/auth'


// // import {app} from '../components/Firebase'

// const Login = () => {
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')
//   // const [loginError,setloginerror]=useState('')

//   const Navigate=useNavigate()

//   // const auth=getAuth(app)

//   // const HandleLogin = async () => {
//   //   try {
//   //     await signInWithEmailAndPassword(auth, email, password);
//   //     console.log("Login Successful");
//   //     Navigate("/dashboard"); // Navigate to the dashboard or desired page after login
//   //   } catch (error) {
//   //     console.log(error.message);
//   //     setloginerror(error.message); // Set the error message to display to the user
//   //   }
//   // };
//   const loginaccount=async()=>{
//     try {
//       await signInWithEmailAndPassword(auth,email,password)
//       console.log("Signin successfully");
//       setEmail('')
//       setPassword('')
      
      
//     } catch (error) {
//       console.log("Error is:",error.message);
      
      
//     }
    
//   }
//   return (
//     <>
//       <div
//         data-aos="flip-up"
//         className=" h-screen w-screen bg-white border border-gray-300 flex justify-center items-center"
//       >
//         <div className=" h-auto w-auto border border-gray-200 shadow-2xl hover:shadow-blue-300 px-12 py-10 rounded-lg">
//           <div>
//             <h1 className=" text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-transparent bg-clip-text text-transparent">
//               Login
//             </h1>
//             <div className=" ml-2">
//               <p className=" mt-7">
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-auto shadow-xl p-2 "
//                   type="password"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
                  

//                 />
//               </p>
//               <p className=" mt-4">
//                 {" "}
//                 <input
//                   className=" h-11  border border-gray-200 rounded-lg w-auto shadow-xl p-2"
//                   type="text"
//                   placeholder=" Password"
//                   value={password}
//                   onChange={(e)=>setPassword(e.target.value)}
//                 />{" "}
//               </p>
//             </div>
//           </div>
//           <div>
//             <p className=" text-center mt-4 text-blue-800 cursor-pointer">
//               Forgot Password
//             </p>
//           </div>
//           <div className=" mt-3 h-10 text-center border border-gray-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900">
//             <button  className=" mt-2 text-white" onClick={loginaccount}>Login</button>
//           </div>
//           <div className=" flex">
//             <div className=" mt-3">Don't have an account?</div>
//             <button  onClick={()=>Navigate("/signup")} className=" mt-3 ml-2 text-blue-800">signup</button>
//           </div>
//           <div className=" mt-5 border border-gray-300"></div>
//           <div className=" mt-6 h-10 text-center border border-gray-200 rounded-lg bg-blue-500">
//             <button className=" mr-6 bg-white rounded-full  ">
//               <RiFacebookCircleFill />
//             </button>
//             <button className=" mt-2 text-white">Login with facebook</button>
//           </div>
//           <div className=" mt-6 h-10 text-center border border-gray-200 rounded-lg bg-white shadow-lg hover:shadow-red-500">
//             <button className=" mr-6 bg-white rounded-full  ">
//               {" "}
//               <FcGoogle />{" "}
//             </button>
//             <button className=" mt-2 text-black  ">Login with google</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;




// // // import React, { useState } from "react";
// // // import { RiFacebookCircleFill } from "react-icons/ri";
// // // import { FcGoogle } from "react-icons/fc";
// // // import { useNavigate } from "react-router-dom";
// // // import { auth } from "./Firebase";
// // // import {
// // //   signInWithEmailAndPassword,
// // //   signInWithPopup,
// // //   GoogleAuthProvider,
// // //   FacebookAuthProvider,
// // // } from "firebase/auth";

// // // const Login = () => {
// // //   const navigate = useNavigate();
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const googleProvider = new GoogleAuthProvider();
// // //   const facebookProvider = new FacebookAuthProvider();

// // //   const handleEmailLogin = async () => {
// // //     try {
// // //       await signInWithEmailAndPassword(auth, email, password);
// // //       alert("Login Successful!");
// // //       navigate("/dashboard"); // Redirect to another page
// // //     } catch (error) {
// // //       alert(error.message);
// // //     }
// // //   };

// // //   const handleGoogleLogin = async () => {
// // //     try {
// // //       await signInWithPopup(auth, googleProvider);
// // //       alert("Login with Google Successful!");
// // //       navigate("/dashboard");
// // //     } catch (error) {
// // //       alert(error.message);
// // //     }
// // //   };

// // //   const handleFacebookLogin = async () => {
// // //     try {
// // //       await signInWithPopup(auth, facebookProvider);
// // //       alert("Login with Facebook Successful!");
// // //       navigate("/dashboard");
// // //     } catch (error) {
// // //       alert(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <div
// // //         data-aos="flip-up"
// // //         className="h-screen w-screen bg-white border border-gray-300 flex justify-center items-center"
// // //       >
// // //         <div className="h-auto w-auto border border-gray-200 shadow-2xl hover:shadow-blue-300 px-12 py-10 rounded-lg">
// // //           <h1 className="text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-transparent bg-clip-text text-transparent">
// // //             Login
// // //           </h1>
// // //           <div className="ml-2">
// // //             <input
// // //               className="h-11 border border-gray-200 rounded-lg w-auto shadow-xl p-2 mt-7"
// // //               type="email"
// // //               placeholder="Email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />
// // //             <input
// // //               className="h-11 mt-4 border border-gray-200 rounded-lg w-auto shadow-xl p-2"
// // //               type="password"
// // //               placeholder="Password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />
// // //           </div>
// // //           <button
// // //             onClick={handleEmailLogin}
// // //             className="mt-3 h-10 w-full text-center border border-gray-200 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900 text-white"
// // //           >
// // //             Login
// // //           </button>
// // //           <div className="flex mt-3">
// // //             <div>Don't have an account?</div>
// // //             <button
// // //               onClick={() => navigate("/signup")}
// // //               className="ml-2 text-blue-800"
// // //             >
// // //               Signup
// // //             </button>
// // //           </div>
// // //           <div className="mt-5 border border-gray-300"></div>
// // //           <button
// // //             onClick={handleFacebookLogin}
// // //             className="mt-6 h-10 w-full text-center border border-gray-200 rounded-lg bg-blue-500 text-white flex justify-center items-center"
// // //           >
// // //             <RiFacebookCircleFill className="mr-2" />
// // //             Login with Facebook
// // //           </button>
// // //           <button
// // //             onClick={handleGoogleLogin}
// // //             className="mt-6 h-10 w-full text-center border border-gray-200 rounded-lg bg-white shadow-lg hover:shadow-red-500 text-black flex justify-center items-center"
// // //           >
// // //             <FcGoogle className="mr-2" />
// // //             Login with Google
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Login;




// // // Example: LoginForm Component
// // import React, { useState } from "react";
// // import {createUserWithEmailAndPassword, login} from 'firebase/auth'
// // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loginError,setloginerror]=useState("")

// //   const auth = getAuth(app);

// // const HandleSignUp=async(e)=>{
// //   try {
// //     await createUserWithEmailAndPassword(auth,email,password)
// //     console.log("SignUp Done");
    
    
// //   } catch (error) {
// //     console.log(error);
    
    
// //   }
// // }
  

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // };

// // export default Login;











































import React, { useState } from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie"; // Correct import convention
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from "../../firebase";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state
  const navigate = useNavigate();
  const googleauthprovider=new GoogleAuthProvider()

  const loginaccountemail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signin successfully");
      alert('signin with email successfull')


     Cookies.set("isverified", true, { expires: 7 }); // Cookie expires in 7 days
     
      navigate("/product"); // ✅ optional redirection
    } catch (error) {
      console.log("Error is:", error.message);
      alert(`error is:${error.message}`)
    }
     setEmail('');
      setPassword('');
  };
  const loginaccoungoogle=async()=>{
    try {
      await signInWithPopup(auth,googleauthprovider)
      console.log("Sing in with google successfully");
      setEmail('')
      setPassword('')
      alert("Sing in with google successfully")
      
      
    } catch (error) {
      console.log("Error is:",error.message);
      alert("error is:",error.message)
      
      
    }
  }


  return (
    <>
 

  
   
   <div className="min-h-screen w-full bg-transparent flex justify-center items-center px-4">
  <div
    data-aos="flip-up"
    className="w-full max-w-md bg-violet-400 border border-gray-300 flex justify-center items-center p-4"
  >
    <div className="w-full px-6 py-8 rounded-lg shadow-2xl border border-blue-500 bg-violet-300">
      <h1 className="text-center font-semibold text-2xl bg-gradient-to-br from-red-800 to-yellow-800 bg-clip-text text-transparent">
        Login
      </h1>

      {/* Email Input */}
      <div className="mt-6">
        <input
          className="w-full h-11 border border-blue-700 rounded-lg shadow-xl p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Input with Toggle */}
      <div className="mt-4 relative">
        <input
          className="w-full h-11 border border-blue-700 rounded-lg shadow-xl p-2 pr-12"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(prev => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600"
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>

      {/* Forgot Password */}
      <p className="text-center mt-4 text-blue-800 cursor-pointer">
        Forgot Password?
      </p>

      {/* Login Button */}
      <div className="mt-4 text-center">
        <button
          onClick={loginaccountemail}
          className="w-full h-10 bg-gradient-to-br from-blue-500 to-blue-900 text-white rounded-lg"
        >
          Login
        </button>
      </div>

      {/* Signup Redirect */}
      <div className="flex flex-wrap justify-center mt-4 text-sm">
        <p>Don't have an account?</p>
        <button
          onClick={() => navigate("/")}
          className="ml-2 text-blue-800 underline"
        >
          Signup
        </button>
      </div>

      <div className="mt-5 border border-blue-600" />

      {/* Facebook Login */}
      <div className="mt-6 flex items-center justify-center h-10 rounded-lg bg-blue-500 text-white space-x-2">
        <RiFacebookCircleFill />
        <span>Login with Facebook</span>
      </div>

      {/* Google Login */}
      <div className="mt-4 h-10 flex items-center justify-center rounded-lg bg-white shadow-xl hover:shadow-red-600 space-x-2">
        <FcGoogle />
        <button className="text-black" onClick={loginaccoungoogle}>
          Login with Google
        </button>
      </div>
    </div>
  </div>
</div>

     </>
  );
};

export default Login;
