import boy from '../assets/boy.jpg';
import girl from '../assets/girl.jpg';
export default function User({item, deleteUser}){ 
  return (
    <li style={{ borderColor: item.gender === 'male' ? 'blue' : 'red' }}>
            <p>{item.name}/{item.gender}/{item.age}</p>
            <img src={item.gender === 'male' ? boy : girl} alt={item.name} width="100" height="100"/>
            <button onClick={()=>deleteUser(item.id)}>ลบ</button>
    </li>
  );
}