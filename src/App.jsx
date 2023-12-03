import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  const bienvenida = 'bienvenida'


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







