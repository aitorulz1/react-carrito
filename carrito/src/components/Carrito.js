import React from 'react'
import Producto from './Producto'

const Carrito = ({carrito, agregarProductoACArrito}) => (
        <div className="carrito">
            <h1>Productos que me llevo</h1>
        

        {carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProductoACarrito = {agregarProductoACArrito}
            />
        ))}
    
    </div>
)


export default Carrito