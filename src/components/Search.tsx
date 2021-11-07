import React, { CSSProperties } from "react";
import { SearchProp } from "../model/coffee";
import "../style/App.css";

const searchStyle: CSSProperties = {
  padding: "8px 11px",
  margin: "0px 8px 0px 8px",
  border: "1px solid #d0d0d0",
  borderRadius: "5px",
};
export const Search: React.FC<SearchProp> = (searchProp) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchProp.searchCoffees(event.target.value);
  };
  return (
    <div>
      <input
        style={searchStyle}
        type="search"
        tabIndex={0}
        onChange={handleOnChange}
        placeholder="Search for coffee..."
        value={searchProp.searchKey}
      />
    </div>
  );
};
