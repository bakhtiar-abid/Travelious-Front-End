import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import Header from "../../../Shared/Header";

const MyPlans = () => {
   const { user } = useAuth();
   const [myplans, setmyPlans] = useState([]);
   const [control, setConrol] = useState(false);

   useEffect(() => {
      fetch(`https://backend-travelious.onrender.com/myplans/${user?.email}`)
         .then((res) => res.json())
         .then((data) => setmyPlans(data));
   }, [user.email, control]);

   const handleDelete = (id) => {
      swal({
         title: "Are you sure?",
         text: "Once cancelled, you will not be able to recover this selected file!",
         icon: "warning",
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            fetch(`https://backend-travelious.onrender.com/deleteplan/${id}`, {
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
               My Plans
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
                  </tr>
               </thead>
               {myplans.map((pd, index) => (
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
                        <td>{pd?.status} </td>
                        <td>
                           <button
                              onClick={() => handleDelete(pd._id)}
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

export default MyPlans;
