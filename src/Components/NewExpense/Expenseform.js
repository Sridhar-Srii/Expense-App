import { useState } from 'react';
import './Expenseform.css'
function Expenseform (props) {
    const [name1,newname1]= useState("")
    // const [name2,newname2]= useState("")
    // const [name3,newname3]= useState("")
    
    function sample1(e) {
        newname1(e.target.value);
        // newname2(e.target.value);
        // newname3(e.target.value);
        // console.log(e.target.value);
    }

    const [amt1,newamt1]=useState("")
    function sample2(e) {
        newamt1(e.target.value);
    }

    const [date1,newdate1]=useState("")
    function sample3(e) {
        newdate1(e.target.value);
    }
    


    function s(e) {
        e.preventDefault();
        let a={
            Title:name1,
            Amount:amt1,
            Date:new Date(date1)
        }
       props.add(a)
        // console.log({amt1});
        // console.log({date1});
        newname1("");
        newamt1("");
        newdate1("");
        vk()
        // console.log(name2);
        // console.log(name3);
    }

    const[btn,setbtn]=useState(false)

    function sk() {
        setbtn(true)
    }
    function vk() {
        setbtn(false)
    }


    return (
        <div id="form">
          
           { btn ?<form onSubmit={s}>
            <label className='title' >Title</label> <label className='amt'>Amount</label> <br></br>
            <input type="text" className='title'value={name1} onChange={sample1}></input> 
            <input type="number" className='input2'value={amt1} onChange={sample2}></input>  <br></br> <br></br>
            <label className='date'>Date</label> <br></br> 
            <input type="date" min="2020-01-01" max="2022-12-31" className='input3' value={date1} onChange={sample3}></input> <br></br>
            <button className='button' type='submit' onClick={s} >Add Expense</button>
            <button className='button'onClick={vk}>Cancel</button>
            </form> :  <button className='click' onClick={sk}>Click</button> }
        </div>
    )
}
export default Expenseform;