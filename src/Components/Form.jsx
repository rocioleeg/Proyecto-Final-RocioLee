import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible]=useState(false);

  const validateName = (name) => {
    if (name.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (email) => {
    if (email.length >= 6) {
      return true;
    } else {
      return false;
    }
  };

  function signUser(e) {
    e.preventDefault();

    if (!validateName(name) || !validateEmail(email)) {
      setVisible(false);
      
     
    }else{ setVisible(true)}
   
  }

  const cambioNombre = (e) => {
    setName(e.target.value);
  };
  const cambioEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className=".container" id="#root">     
      <form onSubmit={signUser}>
        <div>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={cambioNombre}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Ingrese su email"
            value={email}
            onChange={cambioEmail}
          />
        </div>
        <div>
          <button type="submit">
            ENVIAR
          </button>
        </div>
     
      </form>
      {visible?<div>Gracias {name},te contactaremos vía email</div>:<div>Por favor, chequeá que la información sea correcta</div>}
    </div>
  );
}

export default Form;
  //Aqui deberan implementar el form completo con sus validaciones


