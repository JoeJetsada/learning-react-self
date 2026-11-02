import React, { useState } from 'react';
import './personlist.css';
import User from './user.jsx';

function Personlist(props){
const {data} = props;
const [show,setShow] = useState(true);
 
    return(
    <div className='container'>
        <div className='header'>
            <h2 style={{ color: '#eaa402' }}>รายชื่อบุคคล</h2>
            <button onClick={()=>setShow(!show)}>{show ? 'ซ่อน': 'แสดง'}</button>
        </div>
        <ul>
            {show && data.map((item)=>(
                 <User key={item.id} item={item}/>
            ))}
        </ul>
    </div>
    );
}
export default Personlist;