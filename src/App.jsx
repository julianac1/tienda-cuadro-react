import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {

  const bienvenida = 'Bienvenida(o)'


  return (
    <div className='main'>
      <NavBar/>
      
      <ItemListContainer
      bienvenida = {bienvenida}
      />
      
      
      <ItemDetailContainer/>


    

    </div>
  )
}

export default App







