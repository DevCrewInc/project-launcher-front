import Dialogo_avances from 'components/Dialogo_avances';
import ModalcrearProyecto from 'components/ModalcrearProyecto';
import ModalPerfil from 'components/ModalPerfil';
import React from 'react';
import ModalDetalleProyecto from 'components/ModalDetalleProyecto';


const Dialogos = () => {
    return (

        <div className = "flex flex-col p-10">
               <div>
                    <Dialogo_avances/>
                    <ModalcrearProyecto/>
                    <ModalDetalleProyecto/>
                    <ModalPerfil/>
                </div>
                
        </div>
    )
}


export default Dialogos;