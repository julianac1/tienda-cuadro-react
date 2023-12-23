import React, { useState } from 'react'

const ItemCount = () => {

    //CONTADOR
    const [contador, setContador] = useState(0)

    const sumar = () =>{
        if (contador>10) {
            alert('No se permite la compra de más de 10 productos por cliente')
        }else{
            setContador (contador + 1)
        }
    }

    const subtrair = () =>{

        if (contador<0) {
            alert('Error')
        }else{
            setContador (contador - 1)
        }
        
    }

    //SOLO MENSAJE AGREGAR CARRITO -> CLICL ->ITEM AGREGADO.

    const [mensaje, setMensaje] = useState('Agregar al carrito')

    const agregar =()=>{
        setMensaje("Item agregado")
    }


    

  return (
    <div>
        <h2>Imagen Producto 1</h2>
        <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={agregar}>{mensaje}</button>
    
    </div>
  )
}

export default ItemCount