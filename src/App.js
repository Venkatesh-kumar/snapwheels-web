import React from "react";
import{Switch,Route} from "react-router-dom";
import Axios from "axios"

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Support from "./Pages/Support"
import Tariff from "./Pages/Tariff";
import Privacypolicy from "./Pages/privacypolicy";
import Termsofservice from "./Pages/termsofservice";

Axios.defaults.baseURL = 'https://snapwheels-backend.herokuapp.com';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support" exact component={Support} />
          <Route path="/Tariff" exact component={Tariff} />
          <Route path="/termsandconditions" exact component={Termsofservice} />
          <Route path="/privacypolicy" exact component={Privacypolicy} />

        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}
