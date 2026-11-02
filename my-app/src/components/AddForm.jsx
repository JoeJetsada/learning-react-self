import "./AddForm.css";
import { useState } from "react";

export default function AddForm(props){
    const[name,setName] =useState('');
    const[gender,setGender] =useState('');
    const[age,setAge] =useState('');
    
    const {data,setData} = props;

    function saveData(e){
        e.preventDefault()
        const person={
            id:Math.floor(Math.random()*1000),
            name:name,
            gender:gender,
            age:age
        }
        console.log(person);
        setData([...data,person]);
        setName('');
        setGender('');
        setAge('');
    }
    return(
        <section className='container'>
            <form onSubmit={saveData}>
                <label>ชื่อประชากร:</label>
                <input type="text" className='input-text' value={name} onChange={(e) => setName(e.target.value)}/>
                <label>อายุ:</label>
                <input type="number" className='input-number' value={age} onChange={(e) => setAge(e.target.value)}/>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">เลือกเพศ</option>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
                <button type="submit" className='btn-save' disabled={name==='' || age==='' || gender===''}>เพิ่ม</button>
            </form>
        </section>
    );
}