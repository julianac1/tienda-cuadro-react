import React from 'react'
import cart from '../assets/cart.svg'
import { Flex, Spacer, Box, Text } from '@chakra-ui/react'

const CartWidget = () => {

    return (
    
    <Flex minWidth='max-content' alignItems='center' gap='2'>

    <Box p='2'>
        <img src={cart} alt="cart-widget" />
    </Box>
    <Box p='2' bs='b'>
        <Text as='b'>0</Text>
    </Box>
    </Flex>

    )
}

export default CartWidget