import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Item from './components/Item'


const App = () => {

  const bienvenida = 'Bienvenida(o)'


  return (
    <div className='main'>
      <NavBar/>

      <ItemListContainer
      bienvenida = {bienvenida}
      />


    

    </div>
  )
}

export default App







