// import { useState } from 'react';
import './Filter.css'
function Filter (props) {
   
        
    
   
    return (
        <div className='h'>
            <strong>Filter By Year</strong>
            <select  onChange={props.F} value={props.year}>
                <option>Select a year</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    )
}
export default Filter;