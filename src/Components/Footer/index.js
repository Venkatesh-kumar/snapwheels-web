import React from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import {Link} from "react-router-dom";
import mii from "../../Images/makeinindia.jpg"
import {FaInstagram,FaFacebookSquare,FaTwitterSquare,FaHeart,FaInstagramSquare} from "react-icons/fa";
import "./style.css"


export default class navbar extends React.Component{
    render(){
        return(
            <section className="ffooter">
            <footer className="page-footer">
                <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                    <h5 >SSL SECURED PAYMENT</h5>
                    <p className="grey-text text-lighten-4 ">Your information is secured by 256-bit SSL encryption.</p>
                    <br></br>
                    <p className="grey-text text-lighten-4">Follow us on</p>
                    <div>
                        
                    <a href="https://www.facebook.com/socialcardofficial-111544603885022" target="_blank" className="white-text"><FaFacebookSquare size={24} round={true}></FaFacebookSquare> &nbsp;</a>
                    <a href="https://twitter.com/socialcard_in" target="_blank" className="white-text"><FaTwitterSquare size={24} round={true}></FaTwitterSquare>&nbsp;</a>
                    <a href="https://www.instagram.com/socialcardofficial/" target="_blank" className="white-text"><FaInstagramSquare size={24} round={true}></FaInstagramSquare></a>
                    </div>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <br />
                    <ul>
                        <li><Link className="grey-text text-lighten-3" to="/termsandconditions">Terms and Condition</Link></li>
                        <li><Link className="grey-text text-lighten-3" to="/privacypolicy">Privacy Policy</Link></li>
                        {/* <li><Link className="grey-text text-lighten-3" to="/refundpolicy">Refund Policy</Link></li> */}
                       
                    </ul>
                    <br />
                    {/* <img src={mii} alt="Make in India" height={50} width={100}></img> */}
                    </div>
                </div>
                </div>
                <div className="footer-copyright">
                <div className="container center">
                Made with &nbsp;<FaHeart size={16} color='#D82E2F' />&nbsp; by team Sanpwheels
                </div>
                </div>
            </footer>
        </section>
    
            
        )
    }
}