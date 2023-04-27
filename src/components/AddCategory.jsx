import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    /* Si el valor del input (sin contar los espacios en blanco es menor o igual a 1
     no se puede enviar nada  ) */
     
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim())
   /*  setCategories(categories => [inputValue, ...categories]); */
    setInputValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}

export default AddCategory;
