import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const Card = () => {
  const [count, setCounter] = useState(0);
  const counts =useRef(0)
  function countStart(){
    setInterval(()=>{
      setCounter(count=>count+1)
      // counts.current= counts.current+1
    },1000)
  }
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>counter : {count}</h1>
          <button
            className="bg-slate-700 text-cyan-100 w-full"
            onClick={countStart}
          >
            start
          </button>
          <button className="bg-slate-700 text-cyan-100 w-full">stop</button>
        </div>
      </div>
    </>
  );
};

export default Card;
