import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Login/Login";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import MyPlans from "./Pages/Home/MyPlans/MyPlans";
import ManagePlans from "./Pages/Home/ManagePlans/ManagePlans";
import AddPlan from "./Pages/Home/AddAPlan/AddPlan";
import SinglePlanDetail from "./Pages/Home/PlanDetail/SinglePlanDetail";

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

                  <PrivateRoute path="/myplans">
                     <MyPlans></MyPlans>
                  </PrivateRoute>

                  <PrivateRoute path="/manageplans">
                     <ManagePlans></ManagePlans>
                  </PrivateRoute>
                  <PrivateRoute path="/addplan">
                     <AddPlan></AddPlan>
                  </PrivateRoute>
                  <PrivateRoute path="/plan/:planId">
                     <SinglePlanDetail></SinglePlanDetail>
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
