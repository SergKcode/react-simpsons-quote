import QuoteCard from './components/QuoteCard';
import React, {useState} from "react";
import { useAxios } from './hook/useAxios';
import styled from "styled-components"; 

const StyledContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items:  center;
  margin: 10px;
`;
const StyledButton = styled.button`
  background-color: #170AF8;
  font-size: 2rem;
  color: white;
  border-radius: 10px;
  padding:10px;
  width:25%;
  margin-top:10px;
  &:hover{
    background-color: #303AF0;
  }
`;


const StyledH1 = styled.h1`
  text-shadow: 3px 1px 0px rgba(0, 0, 0, 1);
  font-weight: bold;
  font-size: 4em;
  color: #F7F31D;
`;

function App() {
  const [change, setChange] = useState(false)
  const  {data} = useAxios('https://simpsons-quotes-api.herokuapp.com/quotes' , change)
  const handleButton = ()=>{
    setChange(!change)

  }

  return (
    <>
      <StyledContainer>
        <StyledH1>Simpson quote</StyledH1>
      </StyledContainer>
      <StyledContainer>
        {data!==null && <QuoteCard data={data} />}
        <StyledButton onClick={handleButton}> <i>Get a new quote</i></StyledButton>
      </StyledContainer>
      
    </>
  );
}


export default App;
