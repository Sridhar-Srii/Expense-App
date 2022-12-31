import React, { useState } from 'react';
import './App.css';
import Expenses from './Components/Expense/Expenses';
// import Sri from './Components/Expense/Sri';
import Expenseform from './Components/NewExpense/Expenseform';
// import Child from './Components/Ui/Child';

function Expenseapp () {
  
    // let Date1="November 26 2020"
    // let Title1="Bike"
    // let Amount1="100000"

    // let Date2="March 02 2021"
    // let Title2="Car"
    // let Amount2="1000000"

    // let Date3="December 25 2021"
    // let Title3="House"
    // let Amount3="2500000"


    let Expense=[{
      Date:new Date("11/26/2020"),
      Title:"Bike",
      Amount:"100000"
    },
    {
      Date:new Date("03/27/2021"),
      Title:"Car",
      Amount:"1000000"
    },
    {
      Date:new Date("12/25/2021"),
      Title:"House",
      Amount:"2500000"
    }
    ]
    
    const [Exp,setExp] =useState(Expense)
    

    function sk (s){
      console.log(s);
      setExp((Expense)=>{
      return[...Expense,s]
    }) 
  }

  return (
    <div className='bg'>
    
    <h1 className='expenseapp'>Expense App</h1>
    <Expenseform add={sk}></Expenseform>
    <Expenses Ex={Exp}></Expenses>
    </div>
    
  )
} 

export default Expenseapp;
