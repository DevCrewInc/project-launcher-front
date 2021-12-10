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
    
  const[tabs, setTabs]=useState(false)


  return (
  
    
    <div >
      
      <div onClick={handleClickOpen('paper')} className="cursor-pointer text-white mr-4 flex items-center pl-4 py-1 ml-4 mb-3 text-sm rounded-3xl sidebar-route-disable">
          <svg width="17" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d={icon}
            fill="white" stroke="white" strokeWidth="0.1"/>
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
                    <h1 className="id-perfil text-gray-300 font-normal">{JSON.parse(localStorage.getItem('userData'))._id}</h1>
                    <h1 className="nombre-perfil font-semidold"> {JSON.parse(localStorage.getItem('userData')).nombre}</h1>
                    <h1 className="rol-perfil font-normal"> {JSON.parse(localStorage.getItem('userData')).rol}</h1>
                  </div>
                </div>
                {/* <div className="space-x-4 flex">
                  <button className="px-4 h-7 outlined-button-perfil">RECHAZAR</button>
                  <button className="px-4 h-7 filled-button-perfil">ACEPTAR</button>
                </div> */}
              </div>
              <div className="mt-6 space-x-8 cursor-pointer">
                  <button onClick={()=>{setTabs(false)}} className={({ isActive }) =>
                  isActive
                    ?"tabs-perfil-active"
                    :"tabs-perfil-disable"}
                    >Datos personales</button>
                  <button onClick={()=>{setTabs(true)}} className="tabs-perfil-disable">Privacidad</button>
              </div>
            </Box>
          </DialogTitle>
        <div className="m-7 mt-2 texto-perfil">
          <div className="grid grid-cols-3 gap-4">
        {tabs?(<>
          <div>
            <label className=" font-medium">Contraseña actual</label>
            <input className="text-sm w-full font-light pl-2 rounded-sm h-7 input-perfil mb-60" type="password" name="identificacion" defaultValue={JSON.parse(localStorage.getItem('userData')).identificacion}/>
          </div>
          <div>
            <label className=" font-medium">Contraseña nueva</label>
            <input className="text-sm font-light pl-2 w-full rounded-sm h-7 input-perfil" type="password" name="correo" defaultValue={JSON.parse(localStorage.getItem('userData')).correo} />
          </div>
        </>):(<>
          <div>
                <label className=" font-medium">Documento</label>
                <input className="text-sm w-full font-light pl-2 rounded-sm h-7 input-perfil" name="identificacion" defaultValue={JSON.parse(localStorage.getItem('userData')).identificacion}/>
              </div>
              <div>
                <label className=" font-medium">Email</label>
                <input className="text-sm font-light pl-2 w-full rounded-sm h-7 input-perfil" name="correo" defaultValue={JSON.parse(localStorage.getItem('userData')).correo} />
              </div>
              <div>
                <label className=" font-medium">Celular</label>
                <input className=" text-sm font-light w-full pl-2 rounded-sm h-7 input-perfil" name="celular" defaultValue={JSON.parse(localStorage.getItem('userData')).celular}/>
              </div>
              {JSON.parse(localStorage.getItem('userData')).rol==="ESTUDIANTE"?(
              <>
              <div className="col-span-2">
                <label className=" font-medium">Facultad</label>
                <select required className="text-sm pl-2 w-full font-light rounded-sm h-7 input-perfil" name="facultad" defaultValue={JSON.parse(localStorage.getItem('userData')).facultad}>
                  <option disabled type="String" value="">Facultad</option>
                  <option type="String">ARTES</option>
                  <option type="String">CIENCIAS_AGRARIAS</option>
                  <option type="String">CIENCIAS_ECONOMICAS</option>
                  <option type="String">CIENCIAS_EXACTAS_NATURALES</option>
                  <option type="String">CIENCIAS_FARMACEUTICAS_ALIMENTARIAS</option>
                  <option type="String">CIENCIAS_SOCIALES_HUMANAS</option>
                  <option type="String">COMUNICACIONES</option>
                  <option type="String">DERECHO_CIENCIAS_POLITICAS</option>
                  <option type="String">EDUCACION</option>
                  <option type="String">ENFERMERIA</option>
                  <option type="String">INGENIERIA</option>
                  <option type="String">MEDICINA</option>
                  <option type="String">ODONTOLOGIA</option>
                  <option type="String">SALUD_PUBLICA</option>
                </select>
              </div>
       
              <div>
                  <label className=" font-medium">Semestre</label>
                  <select required className="text-sm pl-2 flex font-light rounded-sm h-7 w-full input-perfil" name="semestre" defaultValue={JSON.parse(localStorage.getItem('userData')).semestre}>
                    <option disabled type="String" value="">Semestre</option>
                    <option type="String">PRIMERO</option>
                    <option type="String">SEGUNDO</option>
                    <option type="String">TERCERO</option>
                    <option type="String">CUARTO</option>
                    <option type="String">QUINTO</option>
                    <option type="String">SEXTO</option>
                    <option type="String">SEPTIMO</option>
                    <option type="String">OCTAVO</option>
                    <option type="String">NOVENO</option>
                    <option type="String">DECIMO</option>
                  </select>
                </div>
              
              
              </>):null}
       
       
          <div className="grid mt-8 col-span-3">
              <label className=" font-medium">Acerca de mi</label>
              <textarea className="pl-2 pt-3 text-sm rounded-sm bg-gray-100 input-perfil" placeholder="Escribe acerca de ti" id="w3review" name="aboutMe" rows="4" cols="67"></textarea>
          </div>
        </>)}
              <div>
            </div>
          </div>
        </div>
        </Dialog>
     
      </form>
      
    </div>
  );
}

export default ModalPerfil ;