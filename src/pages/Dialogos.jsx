import Dialogo_avances from 'components/Dialogo_avances';
import Dialogo_crearProyecto from 'components/Dialogo_crearProyecto';
import ModalPerfil from 'components/ModalPerfil';
import React from 'react';
import UpperBar from 'components/UpperBar';
import ModalDetalleProyecto from 'components/ModalDetalleProyecto';


const Dialogos = () => {
    return (

        <div className = "flex flex-col p-10">
               <div>
                    <Dialogo_avances/>
                    <Dialogo_crearProyecto/>
                    <ModalDetalleProyecto/>
                    <ModalPerfil/>
                </div>
                
        </div>
    )
}


export default Dialogos;