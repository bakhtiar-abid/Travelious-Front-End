import React, { useRef } from "react";
import Header from "../../../Shared/Header";

import swal from "sweetalert";
import "./AddPlan.css";

const AddPlan = () => {
   const nameRef = useRef();
   const detailRef = useRef();
   const priceRef = useRef();
   const fileRef = useRef();

   const handleAddUser = (e) => {
      const name = nameRef.current.value;
      const description = detailRef.current.value;
      const price = priceRef.current.value;
      const img = fileRef.current.value;
      const newPlan = { name, description, price, img };
      console.log(newPlan);

      fetch("https://vast-depths-37710.herokuapp.com/addplan", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newPlan),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               swal(
                  "Added!",
                  "You have sucessfully added your plan!",
                  "success"
               );
               e.target.reset();
            }
         });
      e.preventDefault();
   };

   return (
      <div>
         <Header></Header>
         <div className="add-plan d-flex justify-content-center align-items-center ">
            <div className="add-plan-form text-center p-5 container ">
               <div className="text-center">
                  <h3
                     className=""
                     style={{
                        color: "black",
                     }}
                  >
                     Add A Plan
                  </h3>
               </div>
               <form onSubmit={handleAddUser}>
                  <p>
                     {" "}
                     Place:
                     <input
                        className="ms-2 w-50"
                        type="text"
                        ref={nameRef}
                        placeholder="Destination"
                     />
                  </p>

                  <p>
                     Detail:
                     <textarea
                        className="ms-2 w-50"
                        type="text"
                        id=""
                        cols=""
                        ref={detailRef}
                        rows=""
                        placeholder="Description"
                     ></textarea>
                  </p>
                  <p>
                     Price :
                     <input
                        className="ms-2 w-50"
                        type="number"
                        name=""
                        id=""
                        ref={priceRef}
                        placeholder="price"
                     />
                  </p>

                  <p>
                     Img :
                     <input
                        className="ms-2 w-50"
                        type="text"
                        name=""
                        id=""
                        ref={fileRef}
                        placeholder="Insert Image Link"
                     />
                  </p>

                  <p>
                     <input
                        type="submit"
                        className="btn btn-primary"
                        value="Add"
                     />
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddPlan;
