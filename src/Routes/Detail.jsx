import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detailById, setDetailById]= useState([]);
  const param= useParams();
  

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentistaById = async ()=>{
    const res  = await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`);
    const data = await res.json();
    setDetailById(data)   
   } 
 
   useEffect (()=>{
    getDentistaById();
  },[])
     
  return (
    <div>
       <ListGroup variant="flush">
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <ul key= {detailById.id}>
       <ListGroup.Item>Name: {detailById.name} </ListGroup.Item>
       <ListGroup.Item>Email: {detailById.email} </ListGroup.Item>
       <ListGroup.Item>Phone: {detailById.phone} </ListGroup.Item>
       <ListGroup.Item>Web Site: {detailById.website} </ListGroup.Item>
       </ul>
 
       </ListGroup>
    </div>
  )
}

export default Detail