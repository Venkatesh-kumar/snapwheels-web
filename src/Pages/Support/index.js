import "./style.css";
import {FaFacebook,FaInstagramSquare,FaWhatsapp,FaTwitter,FaEnvelope,FaPhone} from "react-icons/fa";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css"

const Support = () =>{
    return(
        <div>
            <div className="supportContainer container">
                <div className="bannerContainer">
                    <h1>Hello.</h1>
                    <h5>Talk with us! we love to help you.</h5>
                </div>
                <div className="row" style={{marginTop:50,marginBottom:50}}>
                    <div className="col s6 m4 l3 center">
                        <a href='https://wa.me/+919915020345' target="_blank" className="carousel-item" >
                            <div className="card-panel carouselwhatsappcard">
                                <FaWhatsapp size={120} ></FaWhatsapp>
                                <h5>WhatsApp</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col s6 m4 l3 center">
                        <a href='mailto: support@snapwheels.online' target="_blank" className="carousel-item" >
                            <div className="card-panel carouselenvelopecard">
                                <FaEnvelope size={120}></FaEnvelope>
                                <h5>Email</h5>
                            </div>
                        </a>
                    </div>
                    {/* <div className="col s6 m4 l3 center">
                        <a href='tel:+919915020345' className="carousel-item" >
                            <div className="card-panel carouselphoneecard">
                                <FaPhone size={120}></FaPhone>
                                <h5>Phone</h5>
                            </div>
                        </a>
                    </div> */}
                    <div className="col s6 m4 l3 center">
                        <a href='https://www.facebook.com' target="_blank" className="carousel-item" >
                            <div className="card-panel carouselfacebookcard" >
                                <FaFacebook size={120}></FaFacebook>
                                <h5>Facebook</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col s6 m4 l3 center">
                        <a href='https://www.instagram.com/snapwheels/' target="_blank" className="carousel-item" >
                            <div className="card-panel carouselinstagramcard" >
                                <FaInstagramSquare size={120}></FaInstagramSquare>
                                <h5>Instagram</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col s6 m4 l3 center">
                        <a href='https://www.twitter.com/ImSnapwheels' target="_blank" className="carousel-item" >
                            <div className="card-panel carouseltwittercard" >
                                <FaTwitter size={120}></FaTwitter>
                                <h5>Twitter</h5>
                            </div>
                        </a>
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}

export default Support