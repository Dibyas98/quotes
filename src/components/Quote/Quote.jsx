import React from "react";
import Quotestext from "./Quotes.json";
import QuoteCard from "./QuoteCard";
import './QuotesCard.css'

export default function Quote(props) {
  

  return (
    <div className={`quote quote${props.mode}`}>
      {Quotestext.quotes.map((ele, index) => (
        <QuoteCard mode={props.mode} key ={ele.id} para={ele.quote} author= {ele.author} id={index}></QuoteCard>
      ))}
    </div>
  );
}
