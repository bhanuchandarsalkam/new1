import React,{useState,useEffect} from 'react';

const Seconds=()=>{
     const [count,setCount]=useState(12);
     useEffect(()=>{
        if(count == 20){
            setCount(12)
        }
        count<=20&&setTimeout(()=>setCount(count+1),1000);
     },[count])
    return(
        <div>
          <p>{count}</p>
        </div>
    )
}
export default Seconds;