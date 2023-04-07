import React, {  useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () =>{
    
 const{state}= useContext(ContextGlobal)
  console.log(state)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { state.data?.map((cards) => (
          <Card key={cards.id} name={cards.name} username={cards.username} id={cards.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
