import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    /* Si la nueva categoria ya existe, entonces NO se 
    crea una nueva */
    if (categories.includes(newCategory)) return;
    /* setCategories(cat => [...cat, 'Valorant']) */
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1> GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
