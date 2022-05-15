// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../redux/actions/User";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const loginHandler = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(email, password));
//   };

//   return (
//     <div className="flex justify-center items-center h-[100vh] bg-purple-400 px-8 sm:px-0">
//       <div className="flex flex-col bg-white w-96 py-14 px-10 gap-10 rounded-xl justify-center shadow-xl">
//         <div className="flex justify-center">
//           <img className="h-10" src={logo} alt="" />
//         </div>
//         <form className="flex flex-col gap-2" action="" onSubmit={loginHandler}>
//           <input
//             className="outline-none bg-gray-100 rounded-3xl py-2 px-4 mb-3"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             className="outline-none bg-gray-100 rounded-3xl py-2 px-4 mb-3"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <div
//             className="text-center text-white
//           "
//           >
//             <button
//               className="bg-purple-500 px-10 py-2 rounded-3xl mb-3"
//               type="submit"
//             >
//               Login
//             </button>
//           </div>

//           <Link
//             className="text-center text-purple-400 text-sm mb-3 hover:underline transition duration-100"
//             to="/forgot/password"
//           >
//             Forgot Password?
//           </Link>

//           <button className="bg-green-500 py-2 mx-6 sm:mx-8 rounded-3xl text-white">
//             <Link className="text-center" to="/register">
//               Create New Account
//             </Link>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
