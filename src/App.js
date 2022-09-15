import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from "react"
import { evaluate } from "mathjs"

function App() {

  const [input, setImput] = useState("");

  const agregarImput = value => {
    setImput(input + value)
  };

  const calcularResultado = () => {
    if(input){
      setImput(evaluate(input))
    }else{
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarImput}>1</Boton>
          <Boton manejarClick={agregarImput}>2</Boton>
          <Boton manejarClick={agregarImput}>3</Boton>
          <Boton manejarClick={agregarImput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarImput}>4</Boton>
          <Boton manejarClick={agregarImput}>5</Boton>
          <Boton manejarClick={agregarImput}>6</Boton>
          <Boton manejarClick={agregarImput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarImput}>7</Boton>
          <Boton manejarClick={agregarImput}>8</Boton>
          <Boton manejarClick={agregarImput}>9</Boton>
          <Boton manejarClick={agregarImput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarImput}>0</Boton>
          <Boton manejarClick={agregarImput}>.</Boton>
          <Boton manejarClick={agregarImput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setImput("")}>
            Clear
          </BotonClear>
        </div>
        
      </div>
    </div>
  );
}

export default App;
