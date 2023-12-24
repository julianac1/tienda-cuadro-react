import React from 'react'
import { Flex, Box, } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'

//misma logica del itemListContainer
//copiar y pagar lo mismo de ItemLista Container
//Tiene como hijo ItemDetail (nuevo componente)
const ItemDetailContainer = () => {

  const productos = [
    {id:1 ,titulo: "cuadro 1", descripcion: "natureza", precio: 100},
    {id:2 ,titulo: "cuadro 2", descripcion: "persona", precio: 200},
    {id:3 ,titulo: "cuadro 3", descripcion: "animal", precio: 300}
  ]

  const exhibirProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }else{
      reject(alert("Falla en la descarga de los productos"))
    }
  })

  exhibirProductos
  .then((resultado)=>{
    console.log(resultado);
  })
  .catch((error)=>{
    console.log(error);
  })


  return (
    <div>
      <Flex wrap='nowrap' justify='center' bg='rgba(255, 255, 128, .5)' fontSize='3xl'>

    <Box>
    
      <ItemDetail/>
    </Box>
    
    </Flex>
    </div>
  )

}

export default ItemDetailContainer