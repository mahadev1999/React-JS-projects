import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import laptop from './laptop.png';
import './login.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";

export function Login(){
    return(
        
        
            <div className="over">
                <div className="col-lg-12 row cover">
                    <div className="col-lg-6">
                        <img src={laptop} className="col-lg-12 img"/>
                    </div>
                    <div className="col-lg-6">
                        <form className="col-lg-6">

                            <h1>Member Login</h1><br/>
                            <FontAwesomeIcon icon={faLock}/>

                            <input type="text" name="mem1" placeholder="email"/><br/><br/>
                            <FontAwesomeIcon icon={faEnvelope}/>

                            <input type="password" name="mem2" placeholder="password"/><br/><br/>
                            <button className="login">Login</button><br/><br/>

                            <p>Forget<span className="user"> Username/Password?</span></p>
                            <p className="create">Create your account <FontAwesomeIcon icon={faArrowRight}/></p>
                        </form>
                    </div>
                </div>
            </div>
       
    );

}