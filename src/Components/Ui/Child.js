// import Filter from '../Expense/Filter';
import './Child.css';
function Child(props){
    return(
        <div className="new">
           {props.children}
        </div>
    )
}
export default Child ;