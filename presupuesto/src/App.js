import React, { Fragment, useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'


function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ resto, guardarResto ] = useState(0);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({})


  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

            <div className="contenido-principal contenido">

              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarResto={guardarResto}
              />
                
                <div className="row">

                  <div className="one-half column">
                    <Formulario 
                      guardarGasto = {guardarGasto}
                    />
                  </div>

                  <div className="one-half column">
                    2
                  </div>

                </div>

            </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
