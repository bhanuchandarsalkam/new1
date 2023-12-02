//import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React,{useState} from 'react';

const Birdlist=()=>{
 const [user,setUser]=useState("");
 const [name,setName]=useState([]);
 const [count,setCount]=useState(0);
 const implement=()=>{
  setName((prev)=> [...prev,user]);
 }
    return(
        <div>
          <h1>Bird List</h1>
          <h3>Add bird</h3>
          <input type="text" onChange={(e)=>setUser(e.target.value)}/><br/>
          <button onClick={implement}>Add</button>
          <ul>
          {
            name.map((data)=>{
                return(<li>{data}
                <div>like:{count}<button onClick={setCount(count+1)}>+</button></div></li>
            )})
          }
          </ul>
        </div>
    )
}
export default Birdlist;