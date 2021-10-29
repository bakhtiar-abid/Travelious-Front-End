import "./App.css";

import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Login from "./Login/Login";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import ManageOrders from "./Pages/Home/ManageOrders/ManageOrders";
import AddService from "./Pages/Home/AddAService/AddService";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>

                  <Route path="/login">
                     <Login></Login>
                  </Route>

                  <PrivateRoute path="/myorders">
                     <MyOrders></MyOrders>
                  </PrivateRoute>

                  <PrivateRoute path="/manageorders">
                     <ManageOrders></ManageOrders>
                  </PrivateRoute>
                  <PrivateRoute path="/addservice">
                     <AddService></AddService>
                  </PrivateRoute>
                  {/* <Route path="*">
                     <NotFound></NotFound>
                  </Route> */}
               </Switch>
               {/* <Footer></Footer> */}
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
