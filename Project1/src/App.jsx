
import './App.css'
import AllCards from './Components/AllCards'
import Heading from './Components/Heading'

function App() {
  function filterCards(){
    console.log("Filter button clicked");
  }

  return (
    <>
    <Heading/>
    <div>
      <input type="text" placeholder='Kya chahiye ??...' />
      <button onClick={filterCards}>Search</button>
    </div>
    <AllCards/>
    </>
  )
}

export default App
