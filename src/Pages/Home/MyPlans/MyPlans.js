import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Header from "../../../Shared/Header";

const MyPlans = () => {
   const { user } = useAuth();
   const [myplans, setmyPlans] = useState([]);

   useEffect(() => {
      fetch(`https://vast-depths-37710.herokuapp.com/myplans/${user?.email}`)
         .then((res) => res.json())
         .then((data) => setmyPlans(data));
   }, [user.email]);

   return (
      <div>
         <Header></Header>
         <h1
            className="my-2"
            style={{
               color: "#478ac9",
            }}
         >
            My Plans
         </h1>
         <h2> {myplans?.length} </h2>
      </div>
   );
};

export default MyPlans;
