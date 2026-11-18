import React, { useState } from "react";

function ToyCard({ toy, ontoydelete, onLike }) {
  const [likes, setLikes] = useState(toy.likes);

  function deleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        ontoydelete(id);
      }
    });
  }

  function likeToy(id) {
    const newLikesCount = likes + 1;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikesCount }), 
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        setLikes(updatedToy.likes);
        onLike(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => likeToy(toy.id)}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={() => deleteToy(toy.id)}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;