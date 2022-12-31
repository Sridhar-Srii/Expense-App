// import React, { useState } from "react";
function Ex (props) {
    let month=props.d.toLocaleString("en-US",{month:"long"})
    let date=props.d.toLocaleString("en-US",{day:"numeric"})
    let year=props.d.getFullYear()

    // const [month1,NewDate]= useState(month)
    // function Date () {
    //   NewDate("April")
    //   console.log(month1);
    // }
    
    return (
       <div id="date">
        
         <h3> 
         {month} <br></br> {year} <br></br> {date} <br></br>
         {/* <button id="button" onClick={Date}>Click</button> */}
         
         </h3>
         
         
       </div>
    )
}
export default Ex;