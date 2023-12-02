import React,{useState} from 'react';

const Phonebook=()=>{
 const [username,setUsername]=useState("");
 const [number,setNumber]=useState("");
 const [showdata,setShowdata]=useState([]);
 function handle(e){
    e.preventDefault();
    setShowdata([...showdata,{username,number}]);
    setUsername("");
    setNumber("");
 }
    return(
        <div>
        <h1>phonebook</h1>
        <form>
            <label for="name">enter name:</label>
            <input type="text" placeholder="enter your name" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <label for="number">enter phonenumber:</label>
            <input type="number" placeholder="enter your phone number" value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
            <button type="submit" onClick={handle}>Add contact</button>
        </form>
        <h1>contacts</h1>
        {
            showdata.map((data,i)=>{
                return(
                <div key={i}>
                    <li>{data.username}-{data.number}</li>
                    </div>
                )
            }
            )
            }
        </div>
    )
}
export default Phonebook;