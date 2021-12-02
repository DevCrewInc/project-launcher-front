import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box} from '@mui/system';
import fotoman from 'fotoman.jpeg';





const ModalcrearProyecto=()=> {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');


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

  

  return (
    <div>
        <div onClick={handleClickOpen('paper')} className="wrapper">
              <div className="button-new">
                <div className="icon-new self-center"><i className="fas fa-plus"></i>
                  <span>New</span>
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
            <form>
                <DialogTitle id="scroll-dialog-title">
                
                <Box>
                  <div className="flex justify-between mt-3">
                    <div>
                      <input required className="w-full rounded-sm" placeholder="Nombre del proyecto" type="text" id="fname" name=""/>
                    </div>
                
                    <div className="flex self-center">
                      <div className="flex space-x-4">
                      <img className="rounded-full w-9 h-9" src={fotoman}/>
                          <div className = "flex flex-col ">
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
                    {/* <i className= "far fa-calendar-alt date-budget"/> */}
                    <input required className= "date-icon date-budget bg-gray-100" type="date"/>
                      {/* <input required className= "date-icon date-budget bg-gray-100" type="date" min="01/02/1900" max="2030/12/31"/> */}
                      {/* https://mui.com/components/date-range-picker/ */}
                      
                  </div>
                  <div className= "space-x-2">
                    <i className = "fas fa-calculator date-budget"/>
                      <input required type="number" className= "date-icon date-budget bg-gray-100"/>
                  </div>
                </div>
                <textarea required className="mt-4 pl-2 pt-2 text-sm bg-gray-100 rounded-md" placeholder="Describe tu proyecto" id="w3review" name="w3review" rows="7" cols="75"></textarea> 
              </DialogContent>

              <div>
                <DialogContent>
                  <span className="objetivos-dialogo">Objetivos generales y específicos</span>
                  <div className="pt-2 mt-3 flex justify-between space-x-4">
                    <input required className="w-full h-8 text-sm rounded-sm pl-2 text-m bg-gray-100 " placeholder="Objetivo general" type="text" id="fname" name=""></input>
                  </div>
                  <div className="pt-2 mt-2 flex justify-between space-x-4">
                    <input required className="w-full h-8 text-sm rounded-sm pl-2 text-m bg-gray-100" placeholder="Objetivo específico" type="text" id="fname" name=""></input>
                    <div className="self-center">
                      <button className="add-button bg-green w-6 h-6 rounded-full"><i className="p-2 fas fa-plus fa-xs"></i></button> 
                    </div>
                  </div>
                  
                </DialogContent>
              </div>
            </form>
            
          </Dialog>
      
      
    </div>
  );
}

export default ModalcrearProyecto;

