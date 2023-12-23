import React from 'react'
import { Flex, Spacer, Box, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemListContainer = ({bienvenida}) => {
  return (
    
    <Flex wrap='nowrap' justify='center' bg='rgba(255, 255, 128, .5)' fontSize='3xl'>
    <Box>
        <Text color='rgb(201, 76, 76)' as='b'>{bienvenida}</Text>
        <ItemCount/>
    </Box>
    
    </Flex>
    
  )
}

export default ItemListContainer