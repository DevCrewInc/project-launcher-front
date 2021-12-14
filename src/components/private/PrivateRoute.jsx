import React from 'react';

const PrivateRoute = ({ roleList, children }) => {


if (roleList.includes(JSON.parse(localStorage.getItem('userData')).rol)) {
return children;
}

return(

    <>
        <div className="text-center mt-40 p-10">
            <i class="fas fa-exclamation-triangle fa-4x"></i>
            <h1 className="text-2xl mt-6 font-bold">No tienes permiso para ver esta página</h1>
            <p className="mt-4 text-sm leading-4">Contacta al administrador para resolver<br/>
                problemas de accesibilidad </p>
        </div>
    </>
);
};

export default PrivateRoute;