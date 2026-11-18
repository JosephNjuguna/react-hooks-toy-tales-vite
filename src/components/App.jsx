import React, { useState,useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys]=useState([])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch toys data');
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

  function acceptnewtoy(toy) {
    setToys((newsettoy) => [...newsettoy, toy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm acceptnewtoy={acceptnewtoy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
