import React from 'react'
import Producto from '../components/Producto'

const Carrito = ({carrito, agregarProductoACArrito}) => (
        <div className="carrito">
            <h1>Productos que me llevo</h1>
        
            

        {
            
            carrito.length === 0
            
            ?
            
            <p>No hay elementos en el carrito</p>
            
            :
            
            carrito.map(producto => (
               
                <Producto 
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProductoACArrito = {agregarProductoACArrito}
            />
            
        ))}
    
    </div>
)


export default Carrito