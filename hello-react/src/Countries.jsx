import React from "react";

function Countries(){
    const [countries,setcountries]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    return(<div className="betterview">
          <h1>Rest Countries</h1>
          <ul>
          {
            countries && countries.map((c,i)=>{
                return (<li key={i}>{c.name}</li>)
            })
          }
          </ul>
    </div>)
}
export default Countries;