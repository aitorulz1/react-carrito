import React from 'react'

const Producto = ({ producto, productos, carrito, agregarProductoACArrito }) => {

    const { nombre, precio, id } = producto;

    // Función que al dar a comprar, agregue producto al carrito

    const seleccionarProducto = (id) => { // Id identifico el producto que clicko
        const producto = productos.filter(producto => producto.id === id)[0]; //filtro on click el producto q su ide matchae con el od que le paso
        agregarProductoACArrito([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id); // Filtro y en productos se quedan los productos que no he clickado 
        agregarProductoACArrito(productos);   
    }


    return(
        <div>
            <p>{id}. {nombre}</p>
            <p>{precio} €</p>

            
            {productos
            
            ?
            (
                <button 
                type="button"
                onClick={ () => seleccionarProducto(id) }
                >
                Comprar</button>
            )
            :
            (  
                <button 
                type="button"
                onClick={ () => eliminarProducto(id) }
                >
                Eliminar</button>
            )
            
            }        

        </div>
    )
}

export default Producto