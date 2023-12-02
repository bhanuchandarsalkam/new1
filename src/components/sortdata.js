import React,{useState} from 'react';

const Sortdata=()=>{
 const apiurl="https://jsonplaceholder.typicode.com/users";
 const [users,setUsers]=useState([]);
 const [sortorder,setSortorder]=useState(0);
 function getusers(){
    return fetch(apiurl)
    .then((response)=>response.json())
    .then((data)=>setUsers(data));
 }
 function sortlist(){
    if(sortorder==0||sortorder==2){
        setUsers([...users].sort((a,b)=>a.name.length-b.name.length))
        setSortorder(1);
    }
    else if(sortorder==1){
        setUsers([...users].sort((a,b)=>b.name.length-a.name.length))
        setSortorder(2);
    }
 }
    return(
        <div>
            <h1>userlist</h1>
         <div>
            <button onClick={getusers}>Get users</button>
            <button onClick={sortlist}>sortlist</button>
         </div>
         <ul>
         {
            users.map((user)=>{
                return(
                <li key={user.id}>{user.name}</li>
                )
            })
         }
         </ul>
        </div>
    )
}
export default Sortdata;