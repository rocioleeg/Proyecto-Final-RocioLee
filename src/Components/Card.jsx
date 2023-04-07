import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import Button from 'react-bootstrap/Button';
import Cardd from 'react-bootstrap/Card';


 const Card = ({ name, username, id }) => {
 const {dispatch, state}= useContext(ContextGlobal);

  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage   
    dispatch({type: "add_card", payload: {name,username,id} })
  }
  

  return (
  
    <Cardd className="card" style={{ width: '18rem' }}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <div className={state.theme} >
        <Cardd.Img variant="top" src='../images/doctor.jpg' />        
       
        <h5>{id} - {name}</h5>
        <Cardd.Text> {username} </Cardd.Text>
        </div>
        <Button variant="outline-secondary" onClick={addFav} className="favButton">Add fav</Button>
                
    </Cardd>
  );
};

export default Card;
