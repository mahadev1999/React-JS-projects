import React from "react";
import './tech.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export function Learn(){
    return(
        <div className="container-fluid">
        <h1>Learn 4.0 Technologies</h1>
         <h4>Get trained by alumini IT and top companies like amazon,microsoft
         ,intel,nvida,qualcomm,etc.learn directly from professionals involved in
            product Development</h4>
        <div className="row justify-content-around mt-5">
            <div className="card col-lg-5 samy">
                <h1>Data Scientist</h1>
                <p className="m1">Data scientists are big data wranglers, gathering and analyzing large sets of structured and unstructured data. A data scientist's role combines computer .</p>
            </div>

            <div className="card col-lg-5 t2 bala">
                <h1>IOT Developer</h1>
                <p className="m2">An IoT Programmer is a wide term that encompasses a variety of professions and skill sets. Professionals that combine three basic components</p>
                
            </div>
          
          <div className="row justify-content-around mt-5">
            <div className="card col-lg-5 t3 naveen">
            <h1>VR Develpoer</h1>
            <p className="m3">A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, </p>
            </div>

            <div className="card col-lg-5 t4 nivas">
            <h1>ML Engineer</h1>
            <p className="m4">Machine learning engineers act as critical members of the data science team. Their tasks involve researching</p>
            </div>
           
          </div>
            
        </div>

      

         </div>
    );
}