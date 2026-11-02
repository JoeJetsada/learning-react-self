import { useState } from 'react';
import Header from './components/header.jsx';
import Personlist from './components/personlist.jsx';
import './App.css';

function App() {
         const [data,setData] = useState([
    {id:1,name:'Joe',gender:'male',age:25},
    {id:2,name:'Jane',gender:'female',age:30},
    {id:3,name:'John',gender:'male',age:35},
    ])
  return (
    <div className="App">
    <Header tittle="แอพจัดการข้อมูล"/>
    <main>
      <Personlist data={data}/>
    </main>
    
      
    </div>
  )
}

export default App;