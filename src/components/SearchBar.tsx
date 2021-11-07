import React from "react";
import { CategoryFilter } from "./CategoryFilter";
import { Search } from "./Search";
import { SearchBarProp } from "../model/coffee";

export const SearchBar: React.FC<SearchBarProp> = (searchBarProp) => {
  return (
    <div className="search-bar">
      <Search
        searchKey={searchBarProp.searchKey}
        searchCoffees={searchBarProp.searchCoffees}
      />
      <CategoryFilter
        categories={searchBarProp.categories}
        filterCategory={searchBarProp.filterCategory}
        categoryKey={searchBarProp.categoryKey}
      />
    </div>
  );
};
