import { useState } from "react"
import { AddCategory, GiftGrid } from './components'

export const GiftExpertApp = () => {
const [categories, setCategories] = useState(['One Punch'])

const onAddCategory = (newCategory) => {
  
  // Validamosque la categoria que queremos insertar no este repetida dentro del arreglo de categories
  if(categories.includes(newCategory)) return;
  
  setCategories([ newCategory, ...categories])
  //setCategories(cat =>[...cat , 'Valorant'])
}

  return (
    <>
     <h1>GiftExpertApp</h1> 
    
    <AddCategory
      onNewCategory={ value => onAddCategory(value)}
    />

    { categories.map( category => (
          //El que tiene que tener la key es el elemento que se esta iterando
          <GiftGrid
            key={category}
            category={category}
          />
        ))
    }
    </>
  )
}

