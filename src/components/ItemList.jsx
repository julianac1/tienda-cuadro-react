import React from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'

const ItemList = ({productos}) => {
    
  return (
    <div>{
        productos.map((p)=>{
            return(
              <>
                <Item
                key={p.id} //ese key es solo para que no aparezca el error en la consosla
                titulo = {p.titulo}
                descripcion = {p.descripcion}
                precio = {p.precio}
                />
              </>
            )
        })
        }</div>
  )
}

export default ItemList