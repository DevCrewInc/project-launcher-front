import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import fotoman from 'fotoman.jpeg';
import { useState, useEffect, useRef } from 'react';
import { EditarEstadoProyecto } from 'graphql/admin/mutations';
import {  useMutation } from '@apollo/client';
import PrivateComponent from './private/PrivateComponents';
import { mutacionCrearInscripcion } from 'graphql/estudiante/mutations';


const ModalDetalleProyecto = ({proyecto}) => {
  const[editarEstadoProyecto, {data:editarProyectoData, error:editarProyectoError, loading:editarProyectoLoading}]=useMutation(EditarEstadoProyecto);
  const[crearInscripcion, {data:inscripcionData, error:inscripcionError, loading:inscripcionLoading}]=useMutation(mutacionCrearInscripcion);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const[tabs, setTabs]=useState(true)
  

  return (
    <>
      <div>
        <i onClick={handleClickOpen('paper')} className = "fas fa-plus p-1 text-gray-400 hover:text-blue-600 cursor-pointer py-3"/>
        
        <Dialog
          className= "bg-black bg-opacity-50"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        > 
          <DialogTitle id="scroll-dialog-title">
            <Box>
              <div className="flex justify-between">
                <div className="w-64">
                  <h1 className="mt-5 leading-6">{proyecto.nombre}</h1>
                  <h1 className="mt-2 text-sm text-gray-300 font-normal">{proyecto._id}</h1>
                </div>
                
                <div className="flex mt-5 self-baseline">
                  <div className="flex space-x-4">
                  <img className="rounded-full w-9 h-9" src={fotoman}/>
                      <div className = "flex flex-col ">
                        <span className = "font-semibold text-sm">{proyecto.lider.nombre}</span>
                        <span className = "text-xs font-medium text-blue-500">{proyecto.lider.identificacion} <i className="far fa-flag"></i></span>
                      </div>
                  </div>
                </div>
              </div>
              <div className= "flex space-x-4 mt-2">
                <div className= "space-x-2">
                  <i className = "far fa-calendar-alt date-budget"/>
                    <span className = "date-budget">{proyecto.fechaInicio}</span>
                </div>
                <div className= "space-x-2">
                  <i className = "fas fa-calculator date-budget"/>
                    <span className = "date-budget">$ {proyecto.presupuesto}</span>
                </div>
              </div>
            </Box>
          </DialogTitle>

          <p className="my-2 mx-6 text-sm text-justify h-58 overflow-auto ">
          {proyecto.descripcionProyecto}
          </p>

          <div className="">
            <DialogContent>
                <div className="space-x-8 cursor-pointer">
                  {tabs?(
                  <>
                    <button onClick={()=>{setTabs(true)}} className="tabs-perfil-active">Objetivos generales</button>
                    <button onClick={()=>{setTabs(false)}} className="tabs-perfil-disable">Objetivos específicos</button>
                  

                  </>):(<>
                    <button onClick={()=>{setTabs(true)}} className="tabs-perfil-disable">Objetivos generales</button>
                    <button onClick={()=>{setTabs(false)}} className="tabs-perfil-active">Objetivos específicos</button>
                  </>)}
                </div>

                
                
            
                <div className="pt-2 mt-4 flex-col h-20 text-left overflow-auto">
                {tabs?(<>
                            {proyecto.objetivos.map((objetivo)=>{
                                if(objetivo.tipo==="GENERAL"){

                                    return(
                                    <h1 className = " text-sm">{objetivo.descripcion}</h1>
                                    )
                                }
                                return null

                            })}
          
                        </>):(
                        <>

                            {proyecto.objetivos.map((objetivo)=>{
                                if(objetivo.tipo==="ESPECIFICO"){

                                    return(
                                    <h1 className = "text-sm">{objetivo.descripcion}</h1>
                                    )
                                }
                                return null

                            })}
                        
                        </>)}
                  {/* {proyecto.objetivos.map((objetivo)=>{
                    if(objetivo.tipo === "GENERAL"){
                      return(
                        <>
                          <span className="w-full text-sm">  <br/>{objetivo.tipo}</span>
                          <span className="w-full text-sm">  <br/>{objetivo.descripcion}</span>
                        </>
                      )
                    } 
                  })} */}
                 
                </div>

              </DialogContent>
              <div className="text-center space-x-4 mt-2 mb-10">
                <PrivateComponent roleList="ADMINISTRADOR">
                  <button className="w-1/5 h-8 filled-button" onClick={()=>{editarEstadoProyecto({variables: {_id: proyecto._id, estadoProyecto:"ACTIVO", faseProyecto: proyecto.faseProyecto}})}} >ACEPTAR</button>
                  <button className="w-1/5 h-8 outlined-button ">RECHAZAR</button>
                </PrivateComponent>
                <PrivateComponent roleList="ESTUDIANTE">
                  <button className="w-1/3 h-7 filled-button" onClick={()=>{
                    crearInscripcion({variables: {proyecto: proyecto._id, estudiante:JSON.parse(localStorage.getItem('userData'))._id}})
                    handleClose()}}>UNIRME</button>
                </PrivateComponent>
              </div>
            
          </div>
        </Dialog>
      </div>
    </>
    

  );
  
}

export default ModalDetalleProyecto;