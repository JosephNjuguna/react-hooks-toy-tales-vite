import React,{useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    <div id="toy-collection">
      {toys.map(toysData => (
        <ToyCard key={toysData.id} toy={toysData}/>
      ))}
    </div>
  );
}

export default ToyContainer;
