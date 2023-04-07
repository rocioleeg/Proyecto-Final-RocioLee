import React, {  useContext } from 'react'

import { ContextGlobal } from './utils/global.context';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);


  
  const handleThemeChange = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };


  return (
    <nav className>    
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */
      } 
        <Nav.Item>  
        <Nav.Link href="/contacto">Contact</Nav.Link>
       </Nav.Item>
       <Nav.Item>  
        <Nav.Link href="/home">Home</Nav.Link>
       </Nav.Item>
       <Nav.Item>  
        <Nav.Link href="/favs">Favs</Nav.Link>
       </Nav.Item>
       <Button variant="secondary" size="lg"  onClick={handleThemeChange}>Change theme</Button> 


        
   
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      
      
    </nav>
  )
}

export default Navbar