import { useState } from "react"
import Child from "../Ui/Child"
import Sri from "./Sri"
import Filter from "./Filter"
import "./Expenses.css"
function Expenses (props) {

      // let Dates=props.Expense.Date
      // let Titles=props.Expense.Title
      // let Amounts=props.Expense.Amount

      // const [expense,setexpense]=useState(Expenses)
      // setexpense("")
      // props.sk(expense)
      
      // props.add()
    //   newname1("");
    //   newamt1("");
    //   newdate1("");

    const [year,setyear]=useState("2020")
    function Navin(e){ 
        setyear(e.target.value)
        // console.log(e.target.value);
    }
    
    const filteryear=props.Ex.filter((Sri)=> {
      return Sri.Date.getFullYear().toString()===year;
    });

    return(
    <Child>
    <Filter F={Navin} year={year}></Filter>

    {
    filteryear.length===0 ?
    <h2>Expense Not Found</h2> :
    filteryear.map((New)=> (
      <Sri Date={New.Date} Title={New.Title} Amount={New.Amount}></Sri>
    )) 
    }
    
     {/* <Sri Date={props.Ex[0].Date} Title={props.Ex[0].Title} Amount={props.Ex[0].Amount}></Sri><br></br>
     <Sri Date={props.Ex[1].Date} Title={props.Ex[1].Title} Amount={props.Ex[1].Amount}></Sri><br></br>
     <Sri Date={props.Ex[2].Date} Title={props.Ex[2].Title} Amount={props.Ex[2].Amount}></Sri>
     
     <Sri Date={Dates} Title={Titles} Amount={Amounts}></Sri><br></br>  */}
     </Child>
    )
}
export default Expenses;