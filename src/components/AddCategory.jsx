import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {
  
  const [inputValue , setInputValue  ] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
    //onAddCategory(categories => [ inputValue, ...categories])
    onNewCategory ( inputValue.trim())
    setInputValue('')
    
  }
   return (
    <form onSubmit={ onSubmit }>
        <input
            type='text'
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={ (event) => handleInputChange(event)}
        />
    </form>
    
  )
}
