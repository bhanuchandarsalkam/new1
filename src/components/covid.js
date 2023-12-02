import React,{useState} from 'react';

const Covid=()=>{
const [resp,setResp]=useState("");
const [name,setName]=useState("");
function implement(name){
    const api=`https://disease.sh/v3/covid-19/countries/${name}`;
    fetch(api)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setResp(data)
    })
}

    return(
        <div>
       <input type="text" onChange={(e)=>setName(e.target.value)}/>
       <button onClick={implement(name)}>search</button>
       {
        resp&&(
 <div id='countryData'>
<p>Country Name: {resp.country}</p>
<p>Cases: {resp.cases}</p>
<p>Deaths: {resp.deaths}</p>
<p>Recovered: {resp.recovered}</p>
<p>Today Cases: {resp.todayCases}</p>
</div>
        )
       }
        </div>
    )
}
export default Covid;