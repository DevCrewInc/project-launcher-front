import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import fotoman from 'fotoman.jpeg';
import { useState, useEffect, useRef } from 'react';


const ModalPerfil = ({icon}) => {
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


  return (
    
    <div >
      <div onClick={handleClickOpen('paper')} className="cursor-pointer text-white mr-4 flex items-center pl-4 py-1 ml-4 mb-3 text-sm rounded-3xl sidebar-route-disable">
          <svg width="17" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d={icon}
            fill="white" stroke="white" stroke-width="0.1"/>
          </svg>
          <span className="pl-2 w-1/4text-white">Mi perfil</span>
      </div>
      

      <form>
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
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center ">
                  <img className="rounded-full h-20" src={fotoman}/>
                  <div className="ml-6">
                    <h1 className="id-perfil text-gray-300 font-normal">Id Estudiante</h1>
                    <h1 className="nombre-perfil font-semidold"> Juan Camilo Pérez</h1>
                    <h1 className="rol-perfil font-normal"> Estudiante</h1>
                  </div>
                </div>  
                <div className="space-x-4 flex">
                  <button className="px-4 h-7 outlined-button-perfil">RECHAZAR</button>
                  <button className="px-4 h-7 filled-button-perfil">ACEPTAR</button>
                </div>
              </div>
              <div className="mt-6 space-x-8 cursor-pointer">
                  <a className="tabs-perfil">Datos personales</a>
                  <a className="tabs-perfil">Privacidad</a>
              </div>
            </Box>
          </DialogTitle>

          <div className="m-7 mt-4 texto-perfil">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className=" font-medium">Documento</label>
                <input className="text-sm w-full font-light bg-gray-100 rounded-lg h-7 pl-2" placeholder="Doc identidad" />
              </div>
              <div>
                <label className=" font-medium">Email</label>
                <input className="text-sm font-light w-full bg-gray-100 rounded-lg h-7 pl-2" placeholder="ejemplo@ejemplo.com" />
              </div>
              <div>
                <label className=" font-medium">Celular</label>
                <input className=" text-sm font-light w-full bg-gray-100 rounded-lg h-7 pl-2" placeholder="Número celular" />
              </div>
              <div></div>
              <div>
                <label className=" font-medium">Facultad</label>
                <select required className="text-sm w-full font-light bg-gray-100 rounded-lg h-7 pl-2" name="saleStatus" defaultValue="">
                  <option disabled type="String" value="">Selecciona facultad</option>
                  <option type="String">Artes</option>
                  <option type="String">Ingeniería</option>
                  <option type="String">Ciencias</option>
                </select>
              </div>
              <div>
                <label className=" font-medium">Semestre</label>
                <select required className="text-sm w-full font-light bg-gray-100 rounded-lg h-7 pl-2" name="saleStatus" defaultValue="">
                  <option disabled type="String" value="">Selecciona semestre</option>
                  <option type="String">Primero</option>
                  <option type="String">Segundo</option>
                  <option type="String">Tercero</option>
                </select>
              </div>
              
            </div>
          <div className="grid mt-8 mb-6">
              <label className=" font-medium">Acerca de mi</label>
              <textarea className="pl-2 pt-2 text-sm rounded-md bg-gray-100" placeholder="Escribe acerca de ti" id="w3review" name="w3review" rows="4" cols="67"></textarea>
          </div>
        </div>
        </Dialog>
        
      </form>
      
    </div>
  );
}

export default ModalPerfil ;