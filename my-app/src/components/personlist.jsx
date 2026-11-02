import React, { useState } from 'react';
import './personlist.css';
import User from './user.jsx';

function Personlist({data,deleteUser}){

const [show,setShow] = useState(true);
 
    return(
    <div className='container'>
        <div className='header'>
            <h2 style={{ color: '#eaa402' }}>รายชื่อบุคคล {data.length} คน</h2>
            <button onClick={()=>setShow(!show)}>{show ? 'ซ่อน': 'แสดง'}</button>
        </div>
        <ul>
            {show && data.map((item)=>(
                 <User key={item.id} item={item} deleteUser={deleteUser}/>
            ))}
        </ul>
    </div>
    );
}
export default Personlist;