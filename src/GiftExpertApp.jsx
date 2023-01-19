import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    //no usar el push hasta el momento por que muta un objeto - react trata de no mutar el estado
    const newCategoryUp = newCategory.toLowerCase();
    if (categories.includes(newCategoryUp)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category}/>
      ))}
    </>
  );
};

export default GiftExpertApp
