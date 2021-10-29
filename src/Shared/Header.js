import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";

const Header = () => {
   const { user, logOut } = useAuth();
   return (
      <div>
         <Navbar
            className=""
            bg="dark"
            variant="dark"
            sticky="top"
            collapseOnSelect
            expand="lg"
         >
            <Container>
               <Navbar.Brand href="/home">Travelious</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as={HashLink} to="/home" className="text-white">
                     Home
                  </Nav.Link>
                  {user?.displayName ? (
                     <Nav.Link
                        as={HashLink}
                        to="/myorders"
                        className="text-white"
                     >
                        My Orders
                     </Nav.Link>
                  ) : (
                     ""
                  )}
                  {user?.displayName ? (
                     <Nav.Link
                        as={HashLink}
                        to="/manageorders"
                        className="text-white"
                     >
                        Manage All Orders
                     </Nav.Link>
                  ) : (
                     ""
                  )}
                  {user?.displayName ? (
                     <Nav.Link
                        as={HashLink}
                        to="/addservice"
                        className="text-white"
                     >
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
      </div>
   );
};

export default Header;
