import React from "react";

const Footer = () => {
   return (
      <div className="py-5" style={{ backgroundColor: "#292e33" }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4 ">
                  <h2 className="text-white">Browse Tours By Activity</h2>
                  <p className="py-1  ">
                     <a className="text-decoration-none text-white" href="">
                        Outdoor Activites
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Cultural & Thematic Tours
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Family Friendly Tours
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Holiday & Seasonal Tours
                     </a>
                  </p>
               </div>
               <div className="col-lg-4 py-5 col-md-4">
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        City Tours
                     </a>
                  </p>
                  <p className="py-1">
                     <a className="text-decoration-none text-white" href="">
                        Indulgence & Luxury Tours
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Relaxation Tours
                     </a>
                  </p>
                  <p className="py-1 ">
                     <a className="text-decoration-none text-white" href="">
                        Wild & Adventure Tours
                     </a>
                  </p>
               </div>
               <div className="col-lg-4 col-md-4 ">
                  <h2 className="text-white">Newsletter</h2>
                  <p className="font-weight-light text-white">
                     {" "}
                     Subscribe for updates & promotions{" "}
                  </p>
                  <div className="input-group">
                     <input
                        type="text"
                        className="w-50 form-control"
                        placeholder="Enter a valid email address"
                     ></input>
                     <div className="input-group-append">
                        {" "}
                        <input
                           className="btn btn-primary ms-2"
                           type="button"
                           value="Submit"
                        />
                     </div>
                  </div>
                  <p className="py-3 text-center">
                     <i class="fab fa-facebook-f text-white pe-4"></i>
                     <i class="fab fa-twitter text-white pe-4"></i>
                     <i class="fab fa-instagram text-white pe-4"></i>
                     <i class="fab fa-youtube text-white pe-4"></i>
                     <i class="fab fa-linkedin text-white pe-4"></i>
                     <i class="fab fa-google-plus-g text-white pe-4"></i>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
