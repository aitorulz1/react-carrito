import React from 'react'

const Producto = ({ producto, productos, carrito, agregarProductoACArrito }) => {

    const { nombre, id, precio } = producto

    // Función que al dar a comprar, agregue producto al carrito

    const seleccionarProducto = (id) => { // Id identifico el producto que clicko
        const producto = productos.filter(producto => producto.id === id); //filtro on click el producto q su ide matchae con el od que le paso
        agregarProductoACArrito([
            ...carrito,
            producto
        ])
    }


    return(
        <div>
            <p>{id}. {nombre}</p>
            <p>{precio} €</p>

            

            <button 
            type="button"
            onClick={ () => seleccionarProducto() }
            >
            Comprar    
            </button>
        </div>
    )
}

export default Producto