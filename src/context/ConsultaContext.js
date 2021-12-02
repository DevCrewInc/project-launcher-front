import { createContext, useContext } from 'react';

export const ConsultaContext = createContext(null);

export const useConsulta = () => {
  return useContext(ConsultaContext);
};
