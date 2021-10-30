import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../../../Shared/Header";

const SinglePlanDetail = () => {
   const [singleItem, setSingleItem] = useState([]);
   const { planId } = useParams();
   console.log(singleItem);
   useEffect(() => {
      fetch(`https://vast-depths-37710.herokuapp.com/plan/${planId}`)
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   }, []);
   return (
      <div>
         <Header></Header>
         {/* Single Item Info */}
         <div className="row">
            <div className="col-lg-8">
               <div
                  className="card mb-3 my-5 container"
                  style={{ maxWidth: "840px" }}
               >
                  <div className="row g-0 ">
                     <div className="col-md-4">
                        <img
                           src={singleItem?.img}
                           className="img-fluid rounded-start"
                           alt="..."
                        />
                     </div>
                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">
                              Name: {singleItem?.name}{" "}
                           </h5>
                           <p className="card-text">
                              {" "}
                              <span className="fw-bold">
                                 Description:{" "}
                              </span>{" "}
                              {singleItem?.description}
                           </p>
                           <p className="card-text">
                              <h3> Price: ${singleItem?.price} </h3>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Place Booking */}
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default SinglePlanDetail;
