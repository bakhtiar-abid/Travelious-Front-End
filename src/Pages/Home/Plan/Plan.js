import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Plan = ({ places }) => {
   const { _id, name, description, price, img } = places;
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
                     <Link to={`/plan/${_id}`}>
                        <Button className="btn btn-warning">Book Now </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Plan;
