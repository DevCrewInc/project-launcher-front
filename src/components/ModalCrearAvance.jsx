
import {useState,useEffect,useRef} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { mutacionCrearAvance } from 'graphql/estudiante/mutations';




const ModalCrearAvance=({proyectoId})=> {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const[crearAvance, {data: dataAvance, error: errorAvance, loading: loadingAvance}]= useMutation(mutacionCrearAvance);

  const{form, formData, updateFormData} = useFormData();


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
    await crearAvance({variables: formData});
    handleClose()

  }

  

  return (
    <div>
      <button onClick={handleClickOpen('paper')} className=" filled-button rounded-full px-7 py-2 text-sm text-white font-medium "><i className="self-center fas fa-plus mr-2"></i>Agregar Avance</button>
      
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
          
            <div className="flex justify-between">
            <input required name="tituloAvance"  className="w-full rounded-sm " placeholder="Titulo de tu avance" type="text" />
              <i className="far fa-check-circle self-center text-gray-400 pl-3"></i>
            </div>
            
            <div className="flex justify-between">
                <h3 className="text-sm font-normal">{JSON.parse(localStorage.getItem('userData')).nombre}</h3>
                <input name="creadoPor" className="hidden" value={JSON.parse(localStorage.getItem('userData'))._id}/>
                <input name="proyecto" className="hidden" value={proyectoId}/>
            </div>
          </Box>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <textarea className="pl-2 pt-2 text-sm bg-gray-100 rounded-md" placeholder="Descripción de tu avance" id="w3review" name="descripcion" rows="4" cols="75"></textarea>
          <div className="text-right">
            <button type="submit" className="w-1/6 h-7 filled-button mt-2">GUARDAR</button>
          </div>
        </DialogContent>
      </form>
      </Dialog>
    </div>
  );
}

export default ModalCrearAvance;