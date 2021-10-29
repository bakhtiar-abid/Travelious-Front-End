import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
   const [services, setServices] = useState([]);
   console.log(services);

   useEffect(() => {
      fetch("https://vast-depths-37710.herokuapp.com/allservices")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <div style={{ backgroundColor: "#f2f2f2" }}>
         <div className="container py-5">
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
            <div id="services" className="row row-cols-1 row-cols-md-3 g-4">
               {services.map((item) => (
                  <Service key={item?._id} services={item}></Service>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Services;
