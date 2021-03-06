import { useState,useRef,useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import fotoman from 'fotoman.jpeg';
import useFormObjetivos from 'hooks/useFormObjetivo';
import { useMutation } from '@apollo/client';
import { CrearProyecto } from 'graphql/lider/mutaciones';



const ModalcrearProyecto=()=> {
  const datePick = new Date().toISOString().split("T")[0];
  const[crearProyecto]= useMutation(CrearProyecto);
 

  const{form, formData, updateFormData} = useFormObjetivos();

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
    await crearProyecto({variables: formData});
    handleClose()
  }



  

  return (
    <div>
        <div onClick={handleClickOpen('paper')} className="wrapper">
              <div className="button-new">
                <div className="icon-new self-center flex justify-between"><i className="self-center fas fa-plus"></i>
                  <span>Crear proyecto </span>
                </div>
              </div>
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
                      <input required name="nombre" className="w-full rounded-sm" placeholder="Nombre del proyecto" type="text" id="fname" />
                    </div>
                
                    <div className="flex self-center">
                      <div className="flex space-x-4">
                      <img className="rounded-full w-10 h-10" src={fotoman} alt="Profile"/>
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
                    <input name="fechaEstimada" required className= "date-icon date-budget input-perfil h-7 pl-1" type="date" min={datePick}/>
                      
                  </div>
                  <div className= "space-x-2">
                    <i className = "fas fa-calculator date-budget"/>
                      <input required type="number" name="presupuesto" className= "date-icon date-budget input-perfil h-7 pl-1"/>
                  </div>
                </div>
                <textarea required name="descripcionProyecto" className="mt-4 pl-2 pt-2 text-sm rounded-md input-perfil" placeholder="Describe tu proyecto" id="w3review"  rows="7" cols="75"></textarea> 
                <input type="text" name="lider" className="hidden" value={JSON.parse(localStorage.getItem('userData'))._id} ></input>
              </DialogContent>

              <div>
                <DialogContent>
                    <div className="flex self-center justify-between">
                      <span className="objetivos-dialogo">Objetivos generales y espec??ficos</span>
                        <div onClick={()=>{setObejetivosEspecificos([...objetivosEspecificos,objetivosEspecificos.length+1])}} className="relative cursor-pointer add-button w-6 h-6 rounded-full"><i className="p-2 fas fa-plus fa-xs"></i></div>
                      </div>
                  <div className="pt-2 mt-3 flex justify-between">
                    <input required name="GENERAL" className="w-full h-8 text-sm rounded-sm pl-2 text-m input-perfil" placeholder="Objetivo general" type="text" id="fname"></input>
                    <div className="self-center">
                    </div> 
                  </div>
                  {/* <div className="pt-2 mt-2 flex justify-between">
                    <input name="ESPECIFICO" required className="w-full h-8 text-sm rounded-sm pl-2 text-m input-perfil" placeholder="Objetivo espec??fico" type="text" id="fname"></input>
                   
                  </div> */}
                  {objetivosEspecificos.map((objetivo,index)=>{

                    return (
                      <input required className="w-full h-8 text-sm rounded-sm mt-3 text-m input-perfil pl-2" placeholder={`Objetivo espec??fico  ${index}`} type="text" id="fname" name={`ESPECIFICO${index}`}></input>)

                    })} 
                  <div className="text-center">
                      <input className="w-1/3 h-7 cursor-pointer filled-button mt-8 mb-5" type="submit" value="CREAR PROYECTO" />
                  </div>
                </DialogContent>
              </div>
            </form>
            
          </Dialog>
    </div>
  );
}

export default ModalcrearProyecto;

