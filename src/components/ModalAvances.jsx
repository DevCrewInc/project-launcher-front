import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import { Box} from '@mui/system';
import { MutationCrearObservacion } from 'graphql/lider/mutaciones';
import { useMutation } from '@apollo/client';
import  {useState, useEffect } from 'react';
import PrivateComponent from './private/PrivateComponents';





const ModalAvances=({avance})=>{

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');


  const [observaciones, setObservaciones] = useState({
    idAvance: avance._id,
    observaciones: avance.observaciones})

  useEffect(() => {
    if(observaciones.observaciones){
      crearObservacion({variables: observaciones})
    
    }
   
  }, [observaciones]);
 


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const[crearObservacion]=useMutation( MutationCrearObservacion);
  

  return (
    <div>
       <i onClick={handleClickOpen('paper')} className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
      
      <Dialog
        className= "bg-black bg-opacity-50"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      > 
        <form >
        <DialogTitle id="scroll-dialog-title">
          <Box>

            <div className="flex justify-between">
            <span className="w-full rounded-sm"  type="text" id="fname" name="">{avance.tituloAvance}</span>
              <i className="far fa-check-circle self-center text-gray-400 pl-3"></i>
            </div>
            
            <div className="flex justify-between">
                <h3 className="text-sm font-normal">{avance.creadoPor.nombre}</h3>
              <div className="flex space-x-4">
                <h3 className="avance_Date text-sm font-normal">{avance.fecha}</h3>
                <h3 className="avance_Date text-sm font-normal">8:00 a.m.</h3>
              </div>
            </div>
          </Box>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <span className="pl-2 pt-2 text-sm bg-gray-100 rounded-md" id="w3review" name="w3review" rows="4" cols="75">{avance.descripcion}</span>
          <div className="text-right">
            {/* <button className="w-1/6 h-7 filled-button mt-2">GUARDAR</button> */}
          </div>
        </DialogContent>
     
        <div>
          <PrivateComponent roleList={"LIDER"}>
            <DialogContent>
              <span className="observaciones font-medium text-base text-gray-300">Observaciones</span>
              <div className="pt-2 flex justify-between space-x-4">
                <Avatar src=""></Avatar>
                <textarea onChange={(e) => setObservaciones( {idAvance: avance._id, observaciones:e.target.value})} required name="observaciones" value={observaciones.observaciones} type="text" className="pl-2 pt-2 mb-5 text-sm rounded-md bg-gray-100" placeholder="Escribe un comentario"  rows="2" cols="67">{avance.observaciones}</textarea>
              </div>
            </DialogContent>
          </PrivateComponent>
          <PrivateComponent roleList={"ESTUDIANTE"}>
            <DialogContent>
              <span className="observaciones font-medium text-base text-gray-300">Observaciones</span>
              <div className="pt-2 flex justify-between space-x-4">
                <Avatar src=""></Avatar>
                <textarea name="observaciones" value={observaciones.observaciones} type="text" className="pl-2 pt-2 mb-5 text-sm rounded-md bg-gray-100" placeholder="Escribe un comentario"  rows="2" cols="67">{avance.observaciones}</textarea>
              </div>
            </DialogContent>
          </PrivateComponent>
        </div>
        </form>
      </Dialog>
  
    </div>
  

  );
}

export default ModalAvances;
