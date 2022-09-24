import React, { useState } from "react";
import swal from "sweetalert";

import axios from "axios";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";
import Header from "../../../Shared/Header";

const SinglePlanDetail = () => {
   const { user } = useFirebase();
   const [singleItem, setSingleItem] = useState([]);
   const { planId } = useParams();
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      data.status = "pending";
      axios
         .post("https://backend-travelious.onrender.com/orders", data)
         .then((res) => {
            if (res.data.insertedId) {
               swal(
                  "Booked!",
                  "You have sucessfully added your plan!",
                  "success"
               );
               reset();
            }
         });
      console.log(data);
      reset();
   };

   // console.log(singleItem);
   useEffect(() => {
      fetch(`https://backend-travelious.onrender.com/plan/${planId}`)
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   }, []);
   return (
      <div>
         <Header></Header>
         <h1
            className="my-3 text-center"
            style={{
               color: "#478ac9",
            }}
         >
            See Your Plan
         </h1>
         {/* Single Item Info */}
         <div>
            <div className="d-flex justify-content-center align-content-center">
               <div className="card mb-3 my-5" style={{ maxWidth: "1000px" }}>
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
                           {/* Place Order */}
                           <div>
                              <Button variant="primary" onClick={handleShow}>
                                 Place Order
                              </Button>

                              <Modal
                                 show={show}
                                 onHide={handleClose}
                                 backdrop="static"
                                 keyboard={false}
                              >
                                 <Modal.Header closeButton>
                                    <Modal.Title>
                                       Give Your Information
                                    </Modal.Title>
                                 </Modal.Header>
                                 <Modal.Body className="text-center">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                       {/* register your input into the hook by invoking the "register" function */}
                                       <p>
                                          Name:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             defaultValue={user?.displayName}
                                             placeholder="Your Name"
                                             {...register("name")}
                                          />
                                       </p>
                                       {/* include validation with required or other standard HTML validation rules */}
                                       <p>
                                          Email:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             placeholder="Your Email"
                                             defaultValue={user?.email}
                                             {...register("email", {
                                                required: true,
                                             })}
                                          />{" "}
                                       </p>
                                       <p>
                                          Address:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             placeholder="Your Address"
                                             defaultValue=""
                                             {...register("address", {
                                                required: true,
                                             })}
                                          />{" "}
                                       </p>
                                       <p>
                                          Phone:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             placeholder="Your Phone"
                                             defaultValue=""
                                             {...register("phone", {
                                                required: true,
                                             })}
                                          />{" "}
                                       </p>
                                       <p>
                                          Destination:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             placeholder="Your Destination"
                                             defaultValue={singleItem?.name}
                                             {...register("destination", {
                                                required: true,
                                             })}
                                          />{" "}
                                       </p>
                                       <p>
                                          {" "}
                                          Travel Date:
                                          <input
                                             {...register("date", {
                                                required: true,
                                             })}
                                             placeholder="data"
                                             type="date"
                                             className="p-2 m-2 w-100"
                                          />
                                       </p>
                                       <p>
                                          Price:{" "}
                                          <input
                                             className="p-2 m-2 w-100"
                                             placeholder="Price"
                                             defaultValue={singleItem?.price}
                                             {...register("price", {
                                                required: true,
                                             })}
                                          />{" "}
                                       </p>
                                       <p>
                                          Person:
                                          <select
                                             {...register("person")}
                                             className="p-2 m-2 w-100"
                                          >
                                             <option value="1">1</option>
                                             <option value="2">2</option>
                                             <option value="3">3</option>
                                             <option value="4">4</option>
                                             <option value="5">5</option>
                                          </select>
                                       </p>
                                       {/* errors will return when field validation fails  */}

                                       {errors.email && (
                                          <span>This field is required</span>
                                       )}

                                       <p>
                                          <input
                                             className="btn btn-primary"
                                             type="submit"
                                          />
                                       </p>
                                    </form>
                                 </Modal.Body>
                                 <Modal.Footer>
                                    <Button
                                       variant="secondary"
                                       onClick={handleClose}
                                    >
                                       Close
                                    </Button>
                                    {/* <Button variant="primary">
                                       Confirm Order
                                    </Button> */}
                                 </Modal.Footer>
                              </Modal>
                           </div>
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
