
import { useState } from 'react';
import './App.css'
import AllCards from './Components/AllCards'
import Heading from './Components/Heading'
import data from './utils/data';




function App() {
  const [val,setVal]=useState("");
  function filterCards(){
    console.log(val);
  }

  return (
    <>
    <Heading/>
    <div>
      <input type="text" placeholder='Kya chahiye ??...' onChange={function (e){
        setVal(e.target.val)
        }}/>
      <button onClick={filterCards}>Search</button>
    </div>
    <AllCards data={data}/>
    </>
  )
}

export default App
