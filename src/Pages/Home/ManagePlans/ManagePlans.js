import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import Header from "../../../Shared/Header";

const ManagePlans = () => {
   const [plans, setPlans] = useState([]);

   const [control, setConrol] = useState(false);

   useEffect(() => {
      fetch("https://vast-depths-37710.herokuapp.com/manageplans")
         .then((res) => res.json())
         .then((data) => setPlans(data));
   }, [control]);

   const handleUpdate = (id) => {
      const url = `https://vast-depths-37710.herokuapp.com/manageplans/${id}`;

      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         // body: JSON.stringify("approved"),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               setConrol(!control);
               swal("Approved!", "You have sucessfully approved!", "success");
            } else {
               setConrol(false);
            }
         });
   };

   const handleDelete = (id) => {
      swal({
         title: "Are you sure?",
         text: "Once cancelled, you will not be able to recover this selected file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            fetch(`https://vast-depths-37710.herokuapp.com/deleteplan/${id}`, {
               method: "DELETE",
               headers: { "content-type": "application/json" },
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount) {
                     setConrol(!control);
                     swal("Poof! Your selected file has been cancelled", {
                        icon: "success",
                     });
                  } else {
                     setConrol(false);
                  }
               });
         } else {
            swal("Your selected file is safe!");
         }
      });
   };
   return (
      <div>
         <Header></Header>
         <div className="text-center">
            <h1
               className="my-3"
               style={{
                  color: "#478ac9",
               }}
            >
               Manage Plans
            </h1>
         </div>
         {/* Showing All Plans */}
         <div className="container">
            <Table striped bordered hover responsive>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Address</th>
                     <th>Phone</th>
                     <th>Destination</th>
                     <th>Date</th>
                     <th>Price</th>
                     <th>Person</th>
                     <th>Status</th>
                     <th>Action</th>
                     <th>Action</th>
                  </tr>
               </thead>
               {plans?.map((pd, index) => (
                  <tbody>
                     <tr>
                        <td> {index + 1} </td>
                        <td> {pd?.name} </td>
                        <td>{pd?.email}</td>
                        <td> {pd?.address} </td>
                        <td>{pd?.phone}</td>
                        <td>{pd?.destination}</td>
                        <td>{pd?.date}</td>
                        <td>${pd?.price}</td>
                        <td>{pd?.person}</td>
                        <td>{pd?.status}</td>
                        <td>
                           <button
                              onClick={() => handleUpdate(pd?._id)}
                              className="btn bg-success text-white p-2"
                           >
                              Update
                           </button>
                        </td>
                        <td>
                           <button
                              onClick={() => handleDelete(pd?._id)}
                              className="btn bg-danger text-white p-2"
                           >
                              Cancel
                           </button>
                        </td>
                     </tr>
                  </tbody>
               ))}
            </Table>
         </div>
      </div>
   );
};

export default ManagePlans;
