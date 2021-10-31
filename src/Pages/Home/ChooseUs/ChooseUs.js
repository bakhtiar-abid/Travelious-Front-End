import React from "react";
import imag1 from "../../../images/choose-3.jpeg";
import imag2 from "../../../images/choose-us-1.jpeg";

const ChooseUs = () => {
   return (
      <div style={{ backgroundColor: "#FBFBFB" }} className="p-4 mb-5">
         <div className="container ">
            <div className="my-5 text-center">
               <h2
                  style={{
                     color: "#478ac9",
                  }}
               >
                  Why Choose Us!
               </h2>
               <div className="d-flex justify-content-center align-items-center">
                  {" "}
                  <p
                     style={{
                        borderBottom: "2px solid blue",
                        width: "35px",
                     }}
                  ></p>
               </div>

               <p style={{ fontStyle: "italic" }}>
                  The gladdest moment in human life, me thinks, is a departure
                  into unknown lands.
               </p>
            </div>

            <div className="row justify-content-center align-items-center">
               <div className="col-lg-6">
                  <img src={imag1} className="img-fluid" alt="" />
               </div>
               <div className="col-lg-5 p-5 ">
                  <p className="fs-5">
                     If you love being hands-on and out and about in the great
                     outdoors, we've got plenty of exciting options for you.
                     From in-depth cultural tours in Asia to once in a lifetime
                     adventure opportunities in South America - you can journey
                     to the end of the earth and back. If reaching the summit of
                     the highest peaks and tearing down rapids float your boat,
                     then these adventure tours are just the ticket. You'll be
                     traversing mountain ranges, navigating through extreme
                     weather and experiencing some of the world's best natural
                     beauty in no time!.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChooseUs;
