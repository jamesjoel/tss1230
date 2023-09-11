import './Box.css'
import Contact from './Contact';
const Box = (props)=>{
    return(
        <div className='box'>
            <h3>User Info</h3>
            <h4>Name : {props.info.name}</h4>
            <h4>Age : {props.info.age}</h4>
            <h4>City : {props.info.city}</h4>
            <Contact num={props.info.contact} color = {props.info.color} />
        </div>
    )
}

export default Box;