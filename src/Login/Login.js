import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Header from "../Shared/Header";
import "./Login.css";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
   const [error, setError] = useState();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || "./home";

   const handleGoogleLogin = () => {
      signInUsingGoogle()
         .then((result) => {
            history.push(redirect_uri);
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
         });
   };

   return (
      <div className="text-center height">
         <Header></Header>
         <div className=" my-5 d-flex justify-content-center align-content-center">
            <div className="sign-in p-5">
               <h3>Login/Register Using Google</h3>
               <button
                  className="btn btn-warning w-50 pt-3 pb-3 mt-3"
                  onClick={handleGoogleLogin}
               >
                  {" "}
                  <i class="fab fa-google me-1"></i> Google Sign-In{" "}
               </button>
               <p></p>
               <span className="text-danger"> {error} </span>
            </div>
         </div>
      </div>
   );
};

export default Login;
