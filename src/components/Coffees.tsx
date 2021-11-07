import React, { CSSProperties } from "react";
import { Coffees as CoffeeList } from "../model/coffee";

const coffeeStyle: CSSProperties = {
  display: "block",
  padding: "25px",
  paddingLeft: "50px",
  paddingRight: "70px",
  borderLeft: "0.1em solid black",
  minHeight: "100vh"
}

const item: CSSProperties = {
  marginBottom: "30px",
  display: "flex",
  flexDirection: "column",
};
const title: CSSProperties = {
  margin: "8px 0px 0px",
};

const description: CSSProperties = {
    margin: "7px 0px 7px 0px",
  };
const ingredient: CSSProperties = {
  fontSize: "0.7em",
};

export const Coffees: React.FC<{ coffees: CoffeeList }> = ({ coffees }) => {

  if(!coffees.length){
    return <div style={coffeeStyle}><p>No coffee found</p></div>;
  }

  return (
    <div style={coffeeStyle}>
      {coffees.map((c) => {
        return (
          <div key={c.id} style={item}>
            <h2 style={title}>{c.title}</h2>
            <p style={description}>{c.description}</p>
            <div style={ingredient}>
              <span>Ingredients: {c.ingredients.join(", ")}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
