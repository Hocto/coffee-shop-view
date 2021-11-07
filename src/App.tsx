import { SearchBar, Coffees } from "./components";
import { useState, useEffect } from "react";
import { Coffees as CoffeeList } from "./model/coffee";
import { apiUrl } from "./config/apiUrl";
import axios from "axios";
import "./style/App.css";

export const App: React.FC = () => {
  const [coffees, setCoffees] = useState<CoffeeList>([]);
  const [filteredCoffees, setFilteredCoffees] = useState<CoffeeList>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const [categoryKey, setCategoryKey] = useState<string>("");

  useEffect(() => {
    axios
      .get(apiUrl() + "/coffees")
      .then((response) => {
        console.log("Fetching coffees...")
        setCoffees(response.data);
      })
      .catch((error) => {
        console.error("An error: " + error);
      });
  }, []);

  const searchCoffee = (searchKey: string): void => {
    setSearchKey(searchKey);
    setFilteredCoffees(
      categoryKey !== ""
        ? filteredCoffees.filter((coffee) =>
            coffee.title.toLowerCase().includes(searchKey.toLowerCase())
          )
        : coffees.filter((coffee) =>
            coffee.title.toLowerCase().includes(searchKey.toLowerCase())
          )
    );
  };

  const coffeeCategories = (): string[] => {
    return [...new Set(coffees.map((coffee) => coffee.category))];
  };

  const filterCategory = (category: string): void => {
    if (category !== "" && categoryKey === category) {
      setCategoryKey("");
      setFilteredCoffees(coffees);
      return;
    }
    if (category !== "All Coffees") {
      setCategoryKey(category);
      setFilteredCoffees(
        searchKey !== ""
          ? filteredCoffees.filter((coffee) => coffee.category === category)
          : coffees.filter((coffee) => coffee.category === category)
      );
    } else {
      setCategoryKey(category);
      setFilteredCoffees(coffees);
    }
  };

  return (
    <div className="app">
      <SearchBar
        searchKey={searchKey}
        categoryKey={categoryKey}
        searchCoffees={searchCoffee}
        categories={coffeeCategories()}
        filterCategory={filterCategory}
      />
      <Coffees
        coffees={
          searchKey !== "" || categoryKey !== "" ? filteredCoffees : coffees
        }
      />
    </div>
  );
};
