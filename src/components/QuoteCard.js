import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ data}) => {

 const {quote, character, image} = data[0]




return(
  
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>  
  </figure>
);
}

export default QuoteCard;
