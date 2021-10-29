import React from "react";
import { Button } from "react-bootstrap";

const Service = ({ services }) => {
   const { name, description, price, img } = services;
   return (
      <div>
         <div className="col">
            <div className="card h-100">
               <img src={img} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description.slice(0, 180)}...</p>
               </div>
               <div className="py-2">
                  <div>
                     <Button className="btn btn-warning">Book Now </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Service;
