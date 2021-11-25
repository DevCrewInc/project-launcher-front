import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import fotoman from 'fotoman.jpeg';
import { useState, useEffect, useRef } from 'react';

const ModalDetalleProyecto = ({icon}) => {
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
    <>
      <div>
        <i onClick={handleClickOpen('paper')} className = "fas fa-eye p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
        
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
                  <h1 className="mt-5 leading-6">Para titulos largos se puede poner limite de caracteres</h1>
                  <h1 className="mt-2 text-sm text-gray-300 font-normal">Id Proyecto</h1>
                </div>
                
                <div className="flex mt-5 self-baseline">
                  <div className="flex space-x-4">
                  <img className="rounded-full w-9 h-9" src={fotoman}/>
                      <div className = "flex flex-col ">
                        <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                        <span className = "text-xs font-medium text-blue-500">2345 <i class="far fa-flag"></i></span>
                      </div>
                  </div>
                </div>
              </div>
              <div className= "flex space-x-4 mt-2">
                <div className= "space-x-2">
                  <i className = "far fa-calendar-alt date-budget"/>
                    <span className = "date-budget">Feb 01- Dic 12</span>
                </div>
                <div className= "space-x-2">
                  <i className = "fas fa-calculator date-budget"/>
                    <span className = "date-budget">Feb 01- Dic 12</span>
                </div>
              </div>
            </Box>
          </DialogTitle>

          <p className="my-2 mx-6 text-sm text-justify h-58 overflow-auto ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>

          <div className="">
            <DialogContent>
                <div className="space-x-8 cursor-pointer">
                    <a className="tabs-modal">Objetivos generales</a>
                    <a className="tabs-modal">Objetivos específicos</a>
                </div>
            
                <div className="pt-2 mt-4 flex-col h-20 text-left overflow-auto">
                  <span className="w-full text-sm">1.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>2.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>3.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                  <span className="w-full text-sm"> <br/>4.Objetivo general ljdlkjaldkjaklsdjsklajdklsajdklsadlksja sdkjasdjsdkjsahjkdhsa</span>
                </div>

              </DialogContent>
              <div className="text-center space-x-4 mt-8 mb-10">
                <button className="w-1/5 h-7 filled-button ">ACEPTAR</button>
                <button className="w-1/5 h-7 outlined-button ">RECHAZAR</button>
                <button className="w-1/3 h-7 filled-button  ">UNIRME</button>
              </div>
            
          </div>
        </Dialog>
      </div>
    </>
    

  );
  
}

export default ModalDetalleProyecto;