// import React, { useState } from "react";
import Ex from './Ex';
import './Sri.css';

function Sri (props) {
    
    // let Date1="November 26 2020"
    // let Title1="Bike"
    // let Amount1="100000"

    // let Date2="March 02 2021"
    // let Title2="Car"
    // let Amount2="1000000"

    // let Date3="December 25 2021"
    // let Title3="House"
    // let Amount3="2500000"
    
    // const [Bike,SetBike]=useState(props.Title1);
    // const [Car,SetCar]=useState("Audi")
// function sample(){
//     SetBike("Rx100")
//     console.log(Bike);
// }
    return (
        <div>
        
        {/* <div className="cls">
            <h3>{props.Date1}</h3>
            <h3>{props.Title1}</h3>
            <h3>{props.Amount1}</h3>
        </div>
        <br></br> */}
        <div className="cls">
            
            <Ex d={props.Date}></Ex>
            <h3 id="title">{props.Title}</h3>
            <h3 id="amount">{props.Amount}</h3>
            
        </div>
       

        
        {/* <br></br> */}
        
        {/* <div className="cls">
            <h3>{props.Title1}</h3>
            <h3>{props.Title2}</h3>
            <h3>{props.Title3}</h3>
        </div> */}

        
        </div>
    );
}
export default Sri;
