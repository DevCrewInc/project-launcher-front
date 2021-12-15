import { useState,useRef,useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import fotoman from 'fotoman.jpeg';
import { useMutation } from '@apollo/client';
import { MutationEditarProyecto,MutationEditarObjetivo} from 'graphql/lider/mutaciones';
import useFormData from 'hooks/useFormData';




const ModalEditarProyecto=({proyecto})=> {
  const[EditarProyectoLider]= useMutation(MutationEditarProyecto);
  const[EditarObjetivo]= useMutation(MutationEditarObjetivo);
 

  const{form, formData, updateFormData} = useFormData();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [objetivosEspecificos,setObejetivosEspecificos]=useState([])



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

  const submitForm = async (e) => {
    e.preventDefault();
    await EditarProyectoLider({variables: formData});
    handleClose()
  }



  

  return (
    <div>
        <div onClick={handleClickOpen('paper')} className=" cursor-pointer">
           <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
        </div>
      
        <Dialog
            className= "bg-black bg-opacity-50"
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          > 
            <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
                <DialogTitle id="scroll-dialog-title">
                
                <Box>
                  <div className="flex justify-between mt-3">
                    <div>
                      <input required name="nombre" className="w-full rounded-sm" defaultValue={proyecto.nombre} type="text" id="fname" />
                      <input required name="_id" className="hidden" defaultValue={proyecto._id} type="text" id="fname" />
                    </div>
                
                    <div className="flex self-center">
                      <div className="flex space-x-4">
                      <img className="rounded-full w-9 h-9" src={fotoman} alt="Profile"/>
                          <div className = "flex flex-col">
                              <span className = "font-semibold text-sm">{JSON.parse(localStorage.getItem('userData')).nombre}</span>
                              <span className = "text-xs font-medium text-blue-500">{JSON.parse(localStorage.getItem('userData')).identificacion} <i className="far fa-flag"></i></span>
                          </div>
                      </div>
                    </div>
                  </div>

                </Box>
              </DialogTitle>

              <DialogContent dividers={scroll === 'paper'}>
                <div className= "flex space-x-4">
                  <div className= "space-x-2">
               
                    <span  className= "date-icon date-budget input-perfil h-7 pl-1">{proyecto.fechaInicio}</span>
               
                  </div>
                  <div className= "space-x-2">
                    <i className = "fas fa-calculator date-budget"/>
                      <input required type="number" name="presupuesto" className= "date-icon date-budget input-perfil h-7 pl-1" defaultValue={proyecto.presupuesto}/>
                  </div>
                </div>
                <textarea type="text" required name="descripcionProyecto" className="mt-4 pl-2 pt-2 text-sm rounded-md input-perfil" defaultValue={proyecto.descripcionProyecto} id="w3review"  rows="7" cols="75"></textarea> 

              </DialogContent>

              <div>
                <DialogContent>
                  <span className="objetivos-dialogo">Objetivos generales y específicos</span>
                  <div className="pt-2 mt-2 flex justify-end">
                    <div className="self-center">
                      <div onClick={()=>{setObejetivosEspecificos([...objetivosEspecificos,objetivosEspecificos.length+1])}} className="relative cursor-pointer add-button w-6 h-6 rounded-full"><i className="p-2 fas fa-plus fa-xs"></i></div>
                    </div>
                  </div>
                  {proyecto.objetivos.map((objetivo,index)=>{
                    if(objetivo.tipo==="GENERAL"){
                      return(
                        <input onChange={(e)=>{EditarObjetivo({variables:{idProyecto:proyecto._id, indexObjetivo:index , campos:{tipo:"GENERAL",descripcion:e.target.value}}})}} className="w-full h-8 text-sm rounded-sm mt-3 text-m input-perfil" defaultValue={objetivo.descripcion} type="text" id="fname"></input>

                      ) 
                    }
                      return  <input onChange={(e)=>{EditarObjetivo({variables:{idProyecto:proyecto._id, indexObjetivo:index , campos:{tipo:"ESPECIFICO",descripcion:e.target.value}}})}} className="w-full h-8 text-sm rounded-sm mt-3 text-m input-perfil" defaultValue={objetivo.descripcion} type="text" id="fname"></input>
                  })}
                
                  <div className="text-center">
                      <input className="w-1/3 h-7 cursor-pointer filled-button mt-8 mb-5" type="submit" value="ACTUALIZAR PROYECTO" />
                  </div>
                </DialogContent>
              </div>
            </form>
            
          </Dialog>
    </div>
  );
}

export default ModalEditarProyecto;