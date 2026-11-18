import React,{useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys,setToys]=useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch plants data');
        }
        return res.json();
      })
      .then((data) => {
        setToys(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div id="toy-collection">
      {toys.map(toysData => (
        <ToyCard key={toysData.id} toy={toysData}/>
      ))}
    </div>
  );
}

export default ToyContainer;
