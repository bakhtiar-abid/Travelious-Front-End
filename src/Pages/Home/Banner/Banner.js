import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Banner.css";

const Banner = () => {
   const { user, logOut } = useAuth();
   return (
      <div className="top-banner">
         <Navbar
            className=""
            bg=""
            variant="dark"
            sticky="top"
            collapseOnSelect
            expand="lg"
         >
            <Container>
               <Navbar.Brand href="/home">Travelious</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav.Link to="/home" className="text-white">
                     Home
                  </Nav.Link>
                  {user?.displayName ? (
                     <Nav.Link to="/myorder" className="text-white">
                        My Orders
                     </Nav.Link>
                  ) : (
                     ""
                  )}
                  {user?.displayName ? (
                     <Nav.Link to="/manageorder" className="text-white">
                        Manage All Orders
                     </Nav.Link>
                  ) : (
                     ""
                  )}
                  {user?.displayName ? (
                     <Nav.Link to="/addservice" className="text-white">
                        Add A Service
                     </Nav.Link>
                  ) : (
                     ""
                  )}

                  {user?.displayName ? (
                     <Button className="text-white" onClick={logOut} variant="">
                        Logout
                     </Button>
                  ) : (
                     <Nav.Link as={Link} to="/login" className="text-white">
                        Login/Register
                     </Nav.Link>
                  )}
                  <Navbar.Text className="log-in">
                     {user?.displayName ? (
                        <span className="me-2 text-white">Signed in as:</span>
                     ) : (
                        ""
                     )}
                     <a href="#login">
                        {user?.displayName}{" "}
                        <img
                           src={user?.photoURL}
                           className="rounded-circle ms-3"
                           style={{ width: "55px" }}
                           alt=""
                        />
                     </a>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <section className="container">
            <div className="row">
               <div
                  className="col-lg-4 col-md-4 col-12 text-white"
                  style={{ marginTop: "250px" }}
               >
                  <h1 style={{ fontSize: "60px" }}>Travelious</h1>
                  <p style={{ fontSize: "20px" }}>
                     Pack your bags. We’re going on vacation!
                  </p>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Banner;
