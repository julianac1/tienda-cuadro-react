import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button,  } from '@chakra-ui/react'
import ItemCount from './ItemCount'

//PONER SOLO IMAGEN Y TITULO
//AGREGAR ABAJO DE IMAGEN Y TITULO UM BOTOM VER DETALLE

//CARD:
const Item = ({titulo}) => {
  return (
    <Card maxW='sm'>
    <CardBody>
    <Stack mt='6' spacing='3'>
    <Heading size='md'>{titulo}</Heading>
    </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    <ButtonGroup spacing='2'>
        <Button colorScheme='teal' size='xs'>Ver Detalle</Button>
    </ButtonGroup>
    </CardFooter>
</Card>
)
}

export default Item