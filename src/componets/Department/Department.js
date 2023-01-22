import './Department.css';
import { BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";


const Department =(props) =>{
    
    return (
        <div className='shadow Cont text-center'>
            <div className='text-center'  style={{filter: `brightness(40%)`}}>
                <img className='Pic' src={props.pic} alt='nothing' />
            </div>
                <div className='type text-center'><b>{props.type}</b></div>
            <div className='text-center' >
                <h1 style={{fontSize:'20px', position:'relative', top:'-50px'}}>{props.name}</h1>
                <div className='data'>
                    <p> <BsFillHouseFill />  {props.house}</p>
                    <p> <BsDoorOpenFill />  {props.porch}</p>
                </div>

            </div>

        </div>
    );
}


export default Department;