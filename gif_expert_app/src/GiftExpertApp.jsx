import { useState } from "react";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([1, 2, 3, 4]);

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>
      {/* imput */}
      {/* listado de Gif */}
      {categories.map((category) => {
        return <li key={category}>{category}</li>;
      })}
      {/* Gif Item */}
    </>
  );
};
