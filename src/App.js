import QuoteCard from './components/QuoteCard';
import './App.css';
import React from "react";
import { useAxios } from './hook/useAxios';

function App() {
  
  const  {data} = useAxios('https://simpsons-quotes-api.herokuapp.com/quotes')
  console.log (data)

  return (
    <>
      <h1>Simpson quote</h1>
      <QuoteCard data={data}/>
    </>
  );
}


export default App;
