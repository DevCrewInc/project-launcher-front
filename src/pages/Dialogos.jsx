import Dialogo_avances from 'components/Dialogo_avances';
import ModalcrearProyecto from 'components/ModalcrearProyecto';
import ModalPerfil from 'components/ModalPerfil';
import React from 'react';



const Dialogos = () => {
    return (

        <div className = "flex flex-col p-10">
               <div>
                    <Dialogo_avances/>
                    <ModalcrearProyecto/>
                    <ModalPerfil/>
                </div>
                
        </div>
    )
}


export default Dialogos;