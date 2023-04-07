import { createContext } from "react";
import { useReducer } from "react";


 /*const getDataDetail = ()=>{
    const localData = localStorage.getItem("card");
    return localData ? JSON.parse(localData) : []}*/
    const getDataDetail = () => {
      const localData = localStorage.getItem("card");
      const data = localData ? JSON.parse(localData) : [];
      return { theme: initialState.theme, data };
    };


 const saveLocalStorage = (card) =>{
  localStorage.setItem("card", JSON.stringify(card) )};



  export const initialState = {theme: localStorage.getItem("theme") || "light", data : [],}

  const reducer = (state, action) => {
    switch (action.type) {
        case "add_card":
        const newData = [...state.data, action.payload];
        saveLocalStorage(newData);
       return { ...state, data: newData };
      
        case 'toggle_theme':        
        localStorage.setItem ('theme', action.payload)
       return { ...state, theme: action.payload };
  
      default:
        return state;
        
    }
  };

 export const ContextGlobal = createContext(initialState);

 export const ContextProvider = ({ children }) => {
 
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer,initialState, getDataDetail);
  const toggleTheme = (newTheme) =>
  dispatch({ type: "toggle_theme", payload: newTheme });

  return (
    <ContextGlobal.Provider value={{state, toggleTheme ,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
