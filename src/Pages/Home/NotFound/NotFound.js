import React from "react";
import notFound from "../../../images/error-404-concept-landing-page_52683-21358.jpg";
import Header from "../../../Shared/Header";

const NotFound = () => {
   return (
      <div>
         <Header></Header>
         <img src={notFound} className="img-fluid w-100" alt="" />
         <a href="/home">
            <div className="text-center">
               <button className="btn btn-warning"> Go Back Home </button>
            </div>
         </a>
      </div>
   );
};

export default NotFound;
