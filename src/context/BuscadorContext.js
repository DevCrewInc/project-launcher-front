import { createContext,useContext } from "react";

export const BuscadorContext=createContext(null);


export const useBuscado=()=>{
    return useContext(BuscadorContext);
}

