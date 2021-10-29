import "./App.css";

import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home/Home";
import Login from "./Login/Login";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               {/* <Header></Header> */}
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
                  {/* <PrivateRoute path="/about">
                     <AboutUs></AboutUs>
                  </PrivateRoute>
                  <PrivateRoute path="/contact">
                     <ContactUs></ContactUs>
                  </PrivateRoute>
                  <PrivateRoute path="/service/:serviceId">
                     <ServiceDetail></ServiceDetail>
                  </PrivateRoute>
                  <Route path="*">
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
