import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
   const { signInUsingGoogle } = useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || "./home";

   const handleGoogleLogin = () => {
      signInUsingGoogle().then((result) => {
         history.push(redirect_uri);
         const user = result.user;
         console.log(user);
      });
   };

   return (
      <div>
         <p>Sign-In Using Google</p>
         <button className="btn btn-warning" onClick={handleGoogleLogin}>
            {" "}
            Google Sign-In{" "}
         </button>
      </div>
   );
};

export default Login;
