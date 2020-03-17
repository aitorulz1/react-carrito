import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'



function App() {



  //Listado de productos
const [ productos, guardarProductos ] = useState([
  { id: 1, nombre: 'Camiseta', precio: 30},
  { id: 2, nombre: 'Cinturón', precio: 20},
  { id: 3, nombre: 'Pantalón', precio: 40},
  { id: 4, nombre: 'Zapatos', precio: 60},
]);


// State para un carrito de compras | Estará al lado de Listado de productos. Es un array vacío en el que iremos añadiendo productos

const [ carrito, agregarProductoACArrito ] = useState([]);


// Date para el footer
const fecha = new Date().getFullYear()




  return (
    <Fragment>

      <Header 
        titulo= "Carrito de Compras"
      />

<div className="container">
    <div  className="productoContainer">
      <h1>Listado de productos</h1>
    
      {productos.map(producto => (
      <Producto 
        key={producto.id}
        producto={producto}
        productos={productos}
        carrito={carrito}
        agregarProductoACArrito= {agregarProductoACArrito}
      />
      )) }
    </div>

      <Carrito 
        carrito={carrito}
        agregarProductoACArrito= {agregarProductoACArrito}
      />
</div>

      <Footer 
        fecha = {fecha}
      />

    </Fragment>
  );
}

export default App
