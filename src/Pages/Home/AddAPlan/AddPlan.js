import React from "react";
import Header from "../../../Shared/Header";
import { useForm } from "react-hook-form";
import "./AddPlan.css";

const AddPlan = () => {
   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      // data.status = "pending";
      // axios
      //    .post("https://vast-depths-37710.herokuapp.com/orders", data)
      //    .then((res) => {
      //       if (res.data.insertedId) {
      //          swal(
      //             "Booked!",
      //             "You have sucessfully added your plan!",
      //             "success"
      //          );
      //          reset();
      //       }
      //    });
      console.log(data);
      reset();
   };
   return (
      <div>
         <Header></Header>
         <div className="add-plan d-flex justify-content-center align-items-center">
            <div className="add-plan-form text-center p-5">
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
               <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <p>
                     Name:{" "}
                     <input
                        className="p-2 m-2 w-50"
                        defaultValue=""
                        placeholder="Destination Name"
                        {...register("name", {
                           required: true,
                        })}
                     />
                  </p>
                  {/* include validation with required or other standard HTML validation rules */}
                  <p>
                     Detail:{" "}
                     <input
                        className="p-2 m-2 w-50"
                        placeholder="Description"
                        defaultValue=""
                        {...register("description", {
                           required: true,
                        })}
                     />{" "}
                  </p>
                  <p>
                     Price:{" "}
                     <input
                        className="p-2 m-2 w-50"
                        placeholder="Price"
                        defaultValue=""
                        {...register("price", {
                           required: true,
                        })}
                     />{" "}
                  </p>

                  {/* errors will return when field validation fails  */}

                  {errors.name && <span>This field is required</span>}

                  <p>
                     <input className="btn btn-primary" type="submit" />
                  </p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddPlan;
