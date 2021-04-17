import React, { useState } from "react";
import "./styles.css";

var foodData = {
  breakfast: [
    { name: "Poha", rating: "5/5" },
    { name: "Upma", rating: "4/5" }
  ],
  lunch: [
    { name: "Aloo Paratha", rating: "5/5" },
    { name: "Veg Thali", rating: "4/5" }
  ],
  dessert: [
    { name: "Gulam Jamun", rating: "5/5" },
    { name: "Rasgulla", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("lunch");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍔 Food Recommendation </h1>
      <h3>Checkout my favorite food.</h3>

      <div>
        {Object.keys(foodData).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "red",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "0",
              color: "#ffffff",
              fontSize: "1rem",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ width: "60%", maxWidth: "600px" }} />
      <div
        style={{
          textAlign: "left",
          margin: "auto",
          width: "60%",
          maxWidth: "600px"
        }}
      >
        <ul style={{ paddingInlineStart: "0" }}>
          {foodData[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
