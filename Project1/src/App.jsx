
import { useState } from 'react';
import './App.css'
import AllCards from './Components/AllCards'
import Heading from './Components/Heading'
import data from './utils/data';




function App() {
  const [val,setVal]=useState("Null");
  const [filterData,setFilterData]=useState(data);

  function filterCards(){
   const res=filterData.filter((element)=> element.title.toLowerCase().includes(val.toLowerCase()));
   if(res===null || res.length===0){
    alert("No such item found");
    setFilterData(data);
   }
   else{
      setFilterData(res);
   }
   
  }

  return (
    <>
    <Heading/>
    <div>
      <input type="text" placeholder='Kya chahiye ??...' onChange={(e)=> setVal(e.target.value)}/>
      <button onClick={filterCards}>Search</button>
    </div>
    <AllCards data={filterData}/>
    </>
  )
}

export default App
