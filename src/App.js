import { Button, Table, Form, Input, Card  } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import './App.css';
const App = () => {
  const[data, setData] = useState([]);  
  
  useEffect(() => {
    const fetchData= async () => {
      const info = await fetch('http://localhost:8000/api/materias', {
        headers:{
          mode: 'no-cors'
        }
      })
        .then(res => res.json())
        .then(data => setData(data.materias[0]));
    }
    fetchData(); 
  }, []);



  return (
    <Fragment>
      {
        data.map((item,index)=> (
          <Card>
          <p>Nombre: {item.nombre}</p>
          <p>Grado: {item.grado}</p>
           <p>Sección: {item.seccion}</p>
           Estudiantes
           <hr></hr>
           {item.estudiantes.map((elt,index) => (
             <div>
             <p>Nombres:{elt.nombres }</p>
             <p>Apellidos:{elt.apellido }</p>
             <p>Calificación:{elt.calificacion }</p>
             </div>
           ))}
          </Card>
        ))
      }
    </Fragment>
  );
};

export default App;
