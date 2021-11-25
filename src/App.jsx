import React, { useState } from 'react';
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
import Login from 'pages/Login';

// import PrivateRoute from 'components/PrivateRoute';
// const httpLink = createHttpLink({
//   uri: 'https://devcrewserver.herokuapp.com/graphql',
// });

const client = new ApolloClient({
  uri: 'https://devcrewserver.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client = {client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login/>} />
            <Route path='/' element={<PrivateLayout/>}>
              <Route path='dialogos' element={<Dialogos/>}/>
              <Route path='proyectos' element={<ListaProyectos/>}/>
              <Route path='usuarios' element={<ListaUsuarios />} />
              <Route path='solicitudes' element={<Solicitudes />} />
              <Route path='dialogos' element={<Dialogos/>}/>
              <Route path='proyectos1' element={<Proyectos1/>} />
              <Route path='login' element={<Login/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
