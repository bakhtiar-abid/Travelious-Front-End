import React from "react";
import "./Discount.css";

const Discount = () => {
   return (
      <div>
         <div className="discount mb-5 ">
            <div className="row container">
               <div className="col-lg-1"> </div>
               <div className="col-lg-11 my-5 ">
                  <h1 className=" text-white discount-detail overflow-hidden">
                     Discount 10-30% Off
                  </h1>
                  <div className="discount-text">
                     <p className="text-white fs-3 overflow-hidden">
                        Fly anywhere with Travelious at the most affordable
                        rates. Travelers from travelious who are fully
                        vaccinated are eligible to enter Thailand under the
                        Sandbox scheme. Under this scheme, travelers can travel
                        within a designated Province/district for the first week
                        before being able to travel freely throughout Thailand.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Discount;
