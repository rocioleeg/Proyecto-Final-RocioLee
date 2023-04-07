import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/contacto" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
      </Routes>
      </ContextProvider>
    </BrowserRouter>
    </React.StrictMode>
);


