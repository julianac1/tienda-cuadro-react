import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'

const NavBar = () => {

    return (

    <header>

        <Flex bg='rgba(255, 255, 128, .5)'>

            <Box p='4' fontSize='3xl' color='rgb(201, 76, 76)' as='b'>
            J.C.M CUADROS
            </Box>

        <Spacer/>

        <Menu>
            <MenuButton>
                Menu
            </MenuButton>
            <MenuList>
                <MenuItem>Productos</MenuItem>
                <MenuItem>Cursos</MenuItem>
                <MenuItem>Nosotros</MenuItem>
            </MenuList>
        </Menu>

        <Spacer/>

        <Box p='4'>
            <CartWidget/>
        </Box>
        </Flex>
        
    </header>

    )
}

export default NavBar