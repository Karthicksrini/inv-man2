import Login from "./Login";
import Signup from "./Signup";
import Main from "./Main";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Dashboard from "./Main.router/DashBoard";
import Brands from "./Main.router/Brands";
import Category  from "./Main.router/Category"
import Company  from "./Main.router/Company"
import Group  from "./Main.router/Group"
import Logout  from "./Main.router/Logout"
import Orders  from "./Main.router/Orders"
import Profile  from "./Main.router/Profile"
import Setting  from "./Main.router/Setting"
import Stores  from "./Main.router/Stores";
import Users from "./Main.router/Users";
import Reports from "./Main.router/Reports";
import Products from "./Main.router/Products";
import Colors from "./Main.router/colors";
import Size from "./Main.router/Size";
import React from "react";
import "./Css/main.css";

function App(){
    return(
        <>
        <BrowserRouter forceRefresh={true}>
      <Switch>
            <Route exact path="/Signup" component={Signup}></Route>
            <Route exact path="/" component={Login}></Route>
      
        </Switch>
        </BrowserRouter>

        <BrowserRouter forceRefresh={true}>
        <Route exact path="/main" render={()=><><Main/><Dashboard/></>}></Route>
        <Switch>
        <Route path="/Brands" render={()=><><Main/><Brands/></>}></Route>
        <Route path="/Category"  render={()=><><Main/><Category/></>}></Route>
        <Route path="/Company"  render={()=><><Main/><Company/></>}></Route>
        <Route path="/Group" render={()=><><Main/><Group/></>}></Route>
        <Route path="/Logout"render={()=><><Main/><Logout/></>}></Route>
        <Route path="/Orders" render={()=><><Main/><Orders/></>}></Route>
        <Route path="/Products" render={()=><><Main/><Products/></>}></Route>
        <Route path="/Reports" render={()=><><Main/><Reports/></>}></Route>
        <Route path="/Setting" render={()=><><Main/><Setting/></>}></Route>
        <Route path="/Stores" render={()=><><Main/><Stores/></>}></Route>
        <Route path="/Users" render={()=><><Main/><Users/></>}></Route>
        <Route path="/Profile" render={()=><><Main/><Profile/></>}></Route>
        <Route path="/Attribute" render={()=><><Main/><Colors/><Size/></>}></Route>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default App;