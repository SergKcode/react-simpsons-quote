import QuoteCard from './components/QuoteCard';
import './App.css';
import React, {useState} from "react";
import { useAxios } from './hook/useAxios';

function App() {
  const [change, setChange] = useState(false)
  const  {data, loaded} = useAxios('https://simpsons-quotes-api.herokuapp.com/quotes' , change)
  const handleButton = ()=>{
    setChange(!change)

  }

  return (
    <>
      <h1>Simpson quote</h1>
      {loaded && <QuoteCard data={data} loaded={loaded}/>}
      <button onClick={handleButton}></button>
      
    </>
  );
}


export default App;
