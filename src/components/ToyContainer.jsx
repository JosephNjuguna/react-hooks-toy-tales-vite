import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, ontoydelete, onLike}) {
  return (
    <div id="toy-collection">
      {toys.map(toysData => (
        <ToyCard key={toysData.id} toy={toysData} ontoydelete={ontoydelete} onLike={onLike}/>
      ))}
    </div>
  );
}

export default ToyContainer;
