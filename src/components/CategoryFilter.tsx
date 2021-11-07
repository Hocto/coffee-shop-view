import React, { CSSProperties } from "react";
import { CategoryFilterProp } from "../model/coffee";
import "../style/App.css";

const filterStyle: CSSProperties = {
  paddingInlineStart: "12px",
};

const listStyle: CSSProperties = {
  listStyleType: "none",
  marginRight: "40px",
  marginBottom: "6px",
  cursor: "pointer",
  textAlign: "left",
  textTransform: "capitalize",
};

const selectedItem: CSSProperties = {
  listStyleType: "none",
  marginRight: "40px",
  marginBottom: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  textAlign: "left",
  textTransform: "capitalize",
  color: "#0000ff",
};

export const CategoryFilter: React.FC<CategoryFilterProp> = (
  categoryFilterProp
) => {
  return (
    <div>
      <ul style={filterStyle}>
        <li
          style={
            categoryFilterProp.categoryKey === "All Coffees"
              ? selectedItem
              : listStyle
          }
          key={"allCoffees"}
          onClick={() => categoryFilterProp.filterCategory("All Coffees")}
        >
          All Coffees
        </li>
        {categoryFilterProp.categories.map((category) => (
          <li
            style={
              categoryFilterProp.categoryKey === category
                ? selectedItem
                : listStyle
            }
            key={category}
            onClick={() => categoryFilterProp.filterCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
