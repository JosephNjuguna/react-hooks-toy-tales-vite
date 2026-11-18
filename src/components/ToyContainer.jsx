import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, ontoydelete}) {
  return (
    <div id="toy-collection">
      {toys.map(toysData => (
        <ToyCard key={toysData.id} toy={toysData} ontoydelete={ontoydelete}/>
      ))}
    </div>
  );
}

export default ToyContainer;
