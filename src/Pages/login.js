import React from "react"
import "./auth.css"
import {Link} from "react-router-dom";

export default class login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            UserNameEntered:'',
            PasswordEntered:'',
            UserNameEmpty:0,
            PasswordEmpty:0,
            UserNotExists:0,
            IncorrectPassword:0
        }
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserNameChange(event){
        this.setState({
            UserNameEmpty:0,
            UserNameEntered:event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            PasswordEmpty:0,
            IncorrectPassword:0,
            PasswordEntered:event.target.value
        })
    }
    handleSubmit(){
        if(this.state.UserNameEntered === '')
        {
            this.setState({UserNameEmpty:1})
        }
        if(this.state.PasswordEntered === '')
        {
            this.setState({PasswordEmpty:1})
        }
       
    }



    render(){
        return(
            <div>
                 <div className="loginbody">
                        <div className="row container">
                            <div className="logincontainer white-text center">
                                <h5 className="center  white-text"><b>Login to Snapwheels</b></h5>
                                <div className="loginfields">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="user_name" type="text" onChange={this.handleUserNameChange} className="validate white-text"></input>
                                            <label htmlFor="user_name">Mobile number</label>
                                            {this.state.UserNameEmpty?
                                            <div className="red-text left">User name should not be empty</div>    :null
                                        }
                                        {
                                            this.state.UserNotExists?
                                            <div className="red-text left">User does not exists</div>:null
                                        }
                                        </div>    
                                    </div>
                                    
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="password" type="password" onChange={this.handlePasswordChange} className="validate white-text"></input>
                                            <label htmlFor="password">Password</label>
                                            {this.state.PasswordEmpty?
                                            <div className="red-text left">Password should not be empty</div>    :null
                                        }
                                        {
                                            this.state.IncorrectPassword?
                                            <div className="red-text left">Incorrect Password</div>:null
                                        }
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light green" type="button" onClick={this.handleSubmit} >Login</button>
                                    </div>
                                    <p>Don't you have an account? <Link to="/signup"  >Sign Up</Link>.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}