import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export function Notification(){
    return(
        <div>
            <div className="row">
            <h1>Notifications</h1>
            <div className="col-sm-12 col-md-4 col-lg-3 bg-primary">
                <p><FontAwesomeIcon icon={faCircleCheck}/> Information message</p>
            </div><br/>

            <div className="col-sm-12 col-md-4 col-lg-3 bg-success"> 
                <p><FontAwesomeIcon icon={faCircleCheck}/> Success message</p>
            </div><br/>

            <div className="col-sm-12 col-md-4 col-lg-3 bg-warning">
                <p><FontAwesomeIcon icon={faBell}/> Warning message</p>
            </div><br/>

            <div className="col-sm-12 col-md-12 col-lg-3 bg-danger">
                <p><FontAwesomeIcon icon={faWarning}/> Error meaasge</p>
            </div>
            
        </div>

        </div>
    );
}