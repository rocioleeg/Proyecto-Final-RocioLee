
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  const { state } = useContext(ContextGlobal);
  return (
   
    <div  className={state.theme}>
    
       
          <Navbar/>
          <Outlet/>
          <Footer/>
         
      </div>
  );
}

export default App;
