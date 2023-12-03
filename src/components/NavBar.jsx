import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (

    <header>
        <h1>JCM CUADROS</h1>
        <nav>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Cursos</a>
                </li>
                <li>
                    <a href="">Nosotros</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    </header>

    )
}

export default NavBar