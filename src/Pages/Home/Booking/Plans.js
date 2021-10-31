import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

import Plan from "../Plan/Plan";

const Plans = () => {
   const [places, setPlaces] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://vast-depths-37710.herokuapp.com/allplans")
         .then((res) => res.json())
         .then((data) => {
            setPlaces(data);
            setIsLoading(false);
         });
   }, []);

   return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
         <div className="container py-5 text-center">
            <h2
               style={{
                  color: "#478ac9",
               }}
            >
               Start Your Journey
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

            {isLoading ? (
               <div className="">
                  {" "}
                  <Spinner animation="border" variant="danger" />
               </div>
            ) : (
               ""
            )}
            <div
               id="services"
               className="row row-cols-1 row-cols-md-3  row-cols-sm-2 g-4"
            >
               {places?.map((place) => (
                  <Plan key={place?._id} places={place}></Plan>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Plans;
