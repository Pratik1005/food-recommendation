import React, { useState } from "react";
import "./styles.css";

var foodData = {
  breakfast: [
    {
      name:
        "Poha: Poha, also known as pauwa, chira, or aval, among many other names, is flattened rice originating from the Indian subcontinent. ",
      rating: "4/5"
    },
    {
      name:
        "Upma: Upma, uppumavu or uppittu is a dish originating from the Indian subcontinent, cooked as a thick porridge from dry-roasted semolina or coarse rice flour.",
      rating: "3/5"
    },
    {
      name:
        "Dosa: A dosa (also dosai or dosha or dose) is a thin pancake or crepe, originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
      rating: "5/5"
    }
  ],
  lunch: [
    {
      name:
        "Kichdi: kichdi is a dish in South Asian cuisine made of rice and lentils (dal).",
      rating: "4/5"
    },
    {
      name:
        "Paneer Tikka: Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.",
      rating: "5/5"
    },
    {
      name:
        "Fried rice: Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients",
      rating: "3/5"
    }
  ],
  dessert: [
    {
      name:
        "Cheese Cake: Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese, eggs, and sugar.",
      rating: "4/5"
    },
    {
      name:
        "Rasmalai: Ras malai or rossomalai or Rasamalei is a dessert originating from the eastern regions of the Indian subcontinent. ",
      rating: "3/5"
    },
    {
      name:
        "Cham cham: Chomchom, cham cham, or chum chum is a traditional Bangladeshi sweet, popular throughout the Indian subcontinent.",
      rating: "5/5"
    }
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
