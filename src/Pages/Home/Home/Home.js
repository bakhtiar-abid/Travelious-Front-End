import React from "react";
import Banner from "../Banner/Banner";
import Plans from "../Booking/Plans";
import ChooseUs from "../ChooseUs/ChooseUs";
import Discount from "../Discount/Discount";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Plans></Plans>
         <Discount></Discount>
         <ChooseUs></ChooseUs>
      </div>
   );
};

export default Home;
