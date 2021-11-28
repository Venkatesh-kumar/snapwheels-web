import React from "react"
import "./auth.css"
import {Link} from "react-router-dom"
import M from "materialize-css";

export default class signup extends React.Component{

constructor(props){
    super(props);
        this.state={
            UserNameEntered:'',
            PasswordEntered:'',
            EmailEntered:'',
            UserNameNotAvailable:0,
            UserEmpty:0,
            error:1
        };
       this.handleUserNameChange = this.handleUserNameChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handlePasswordChange = this.handlePasswordChange.bind(this)
       this.handleEmailChange = this.handleEmailChange.bind(this)
    }

handleUserNameChange(event){

    this.setState({UserEmpty:0,error:0})
    this.setState({
        UserNameEntered:event.target.value
    })
}

handlePasswordChange(event){
    this.setState({PasswordEmpty:0,error:0})
    this.setState({
        PasswordEntered:event.target.value
    })
}

handleEmailChange(event){
    this.setState({EmailEmpty:0,error:0})
    this.setState({
        EmailEntered:event.target.value
    })
}
handleSubmit(){
    if(this.state.UserNameEntered ==='')
    {
        this.setState({UserEmpty:1,error:1})
    }
    if(this.state.EmailEntered === '')
    {
        this.setState({EmailEmpty:1,error:1})
    }
     if(this.state.PasswordEntered === '')
    {
        this.setState({PasswordEmpty:1,error:1})
    }
    else{
        this.setState({error:0})
    }
  
}

    render(){
        return(
            <div>
                 <div className="loginbody">
                        <div className="row container">
                            <div className="logincontainer white-text center">
                                <h5 className="center "><b>Create Snapwheels Account</b></h5>
                                <div className="loginfields">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user_name" type="text" onChange={this.handleUserNameChange} className="validate white-text"></input>
                                            <label htmlFor="user_name">User Name*</label>
                                           {this.state.UserNameNotAvailable?
                                                <div className="red-text left">Sorry, Username not available</div>:null
                                            }
                                            {
                                                this.state.UserEmpty?
                                                <div className="red-text left">User name should not be empty</div>:null
                                            }
                                            
                                        </div>    
                                        
                                    </div>
                                    
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" onChange={this.handleEmailChange} className="validate"></input>
                                            <label htmlFor="email">Email*</label>
                                            {
                                                this.state.EmailEmpty?
                                                <div className="red-text">Email should not be empty</div>:null
                                            }
                                        </div> 
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" onChange={this.handlePasswordChange} className="validate"></input>
                                            <label htmlFor="password">Password*</label>
                                            {
                                                this.state.PasswordEmpty?
                                                <div className="red-text">Password should not be empty</div>:null
                                            }
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light green" type="button" onClick={this.handleSubmit}>Sign Up</button>
                                    </div>
                                    <p>Already have an account? <Link to="/"  >Log In</Link>.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}