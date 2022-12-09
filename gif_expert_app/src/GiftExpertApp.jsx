import { useState } from "react";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Valoran"]);
    // setCategories = [...categories, "Valoran"];
  };
  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>
      {/* imput */}
      {/* listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
