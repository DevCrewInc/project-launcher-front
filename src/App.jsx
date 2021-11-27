import React, { useState,useEffect} from 'react';
import 'styles/globals.css';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import ListaUsuarios from 'pages/ListaUsuarios';
import 'styles/globals.css';
import Dialogos from 'pages/Dialogos'
import Proyectos1 from 'pages/Proyectos1';
import Solicitudes from 'pages/Solicitudes';
import ListaProyectos from 'pages/ListaProyectos';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import { AuthContext } from 'context/useAuth';
import jwt_decode from 'jwt-decode';

// import PrivateRoute from 'components/PrivateRoute';
// const httpLink = createHttpLink({
//   uri: 'https://devcrewserver.herokuapp.com/graphql',
// http://localhost:5000/graphql
// });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [userData, setUserData] = useState({});
  const [authData, setAuthData] = useState();


  const setToken = (token) => {
    console.log('set token', token);
    setAuthData(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authData) {
      const decoded = jwt_decode(authData);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }else if (localStorage.getItem('token')){
      const decoded = jwt_decode(JSON.parse(localStorage.getItem('token')));
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      })
      }
  }, [authData]);



  return (
    <ApolloProvider client = {client}>
      <AuthContext.Provider value={{authData, setAuthData,setToken}}>
        <UserContext.Provider value={{ userData, setUserData}}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/registro' element={<Registro/>} />
              <Route path='/' element={<PrivateLayout/>}>
                <Route path='page/dialogos' element={<Dialogos/>}/>
                <Route path='page/proyectos' element={<ListaProyectos/>}/>
                <Route path='page/usuarios' element={<ListaUsuarios />} />
                <Route path='page/solicitudes' element={<Solicitudes />} />
                <Route path='page/dialogos' element={<Dialogos/>}/>
                <Route path='page/proyectos1' element={<Proyectos1/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
