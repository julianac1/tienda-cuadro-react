import React from 'react'
import { Flex, Spacer, Box, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = ({bienvenida}) => {

  //ARRAY DE OBJETOS CON LOS PRODUCTOS:
  //el ID es solo para que no aparezca el error en la consola
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
    
    <Flex wrap='nowrap' justify='center' bg='rgba(255, 255, 128, .5)' fontSize='3xl'>
    <Box>
        <Text color='rgb(201, 76, 76)' as='b'>{bienvenida}</Text>
    </Box>

    <Box>
      <ItemList productos={productos}/>
    </Box>
    
    </Flex>
    
  )
}

export default ItemListContainer