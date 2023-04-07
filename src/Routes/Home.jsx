import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 const [dentista, setDentista] = useState([]);



 const getDentista = async ()=>{
  const res  = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  setDentista(data);
  
 }

useEffect (()=>{
  getDentista();
},[])

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {dentista.length && dentista.map((dentista)=>(
          <Link to= {`/detail/${dentista.id}`} style= { { textDecoration: 'none' }}>

         <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}> </Card>
         </Link>
         
        ))}
      </div>
    </main>
  )
}

export default Home