import ModalAvances from 'components/ModalAvances';
import ModalcrearProyecto from 'components/ModalcrearProyecto';
import ModalPerfil from 'components/ModalPerfil';
import React from 'react';



const Dialogos = () => {
    return (

        <div className = "flex flex-col p-10">
               <div>
                    {/* <ModalAvances/> */}
                    <ModalcrearProyecto/>
                    <ModalPerfil/>
                </div>
                
        </div>
    )
}


export default Dialogos;