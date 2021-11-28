import React from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import {Link} from "react-router-dom";
import "./style.css"


export default class navbar extends React.Component{
    render(){
        return(
            <section className="fnavbar">
                <div className="navbar-fixed">
                <nav className="nav-fixed">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">snapwheels</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right  hide-on-med-and-down ">
                            <li className="nav-icon"><Link to="/" >Home<i className="material-icons left ">home</i></Link></li>
                            <li className="nav-icon"><Link to="/Tariff" >Tariff<i className="material-icons left ">percent</i></Link></li>
                           <li className="nav-icon"><Link to="/support">Support<i className="material-icons left">headset_mic</i></Link></li>
                        </ul>
                        
                    </div>
                    </nav>
                </div>
                
                
                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/"><i className="material-icons left">home</i>Home</Link></li>
                        <li><Link to="/Tariff"><i className="material-icons left ">percent</i>Tariff</Link></li>
                        <li><Link to="/support"><i className="material-icons left ">headset_mic</i>Support</Link></li>
                    </ul>
            </section>
           
            
        )
    }
}