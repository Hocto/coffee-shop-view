export interface Coffee {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: string[];
  createdTime: string;
  updatedTime: string;
}

export type Coffees = Coffee[];

export interface CategoryFilterProp {
  categoryKey: string;
  categories: string[];
  filterCategory(categoryKey: string): void;
}

export interface SearchProp {
  searchKey: string;
  searchCoffees(expr: string): void;
}

export interface SearchBarProp {
  searchKey: string;
  categories: string[];
  categoryKey: string;
  searchCoffees(expr: string): void;
  filterCategory(category: string): void;
}
