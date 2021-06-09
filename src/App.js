import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import SignIn from "./containers/auth/SignIn";
import SignUp from "./containers/auth/SignUp";
import TicketDetails from "./components/TicketDetails";
import Order from "./containers/Order";
import OrderDetails from "./components/Orderdetails";


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/ticket/:id' component={TicketDetails} />
                        <Route exact path='/orders' component={Order} />
                        <Route path='/orders/:id' component={OrderDetails} />
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        {/*<Route path='/create' component={CreateProject}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;
