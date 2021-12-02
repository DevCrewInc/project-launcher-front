import React from 'react'
import UpperBar from 'components/UpperBar'
import Tabs from 'components/Tabs'
import TablaUsuarioAdmin from 'components/TablaUsuariosAdmin'
import {getSolicitudesUsuarios} from '../../../graphql/admin/queries'



const Administracion = () => {

    const tabs =[{
        title:"Usuario",
        to:""
    },{
        title:"Proyecto",
        to:"nuevosProyectos"
    }]

    return (
        <>
            <UpperBar title="Administrador de solicitudes" icon="M13.0406 26.9993C12.7286 26.9288 12.4103 26.8852 12.1124 26.7844C10.5406 26.2546 9.57183 25.2491 9.23955 23.7547C9.22941 23.7118 9.22161 23.6688 9.21069 23.6258C9.20445 23.6004 9.19353 23.5758 9.17247 23.5166H8.87528C7.02741 23.5166 5.17877 23.53 3.33012 23.5166C0.979146 23.4948 -0.647973 21.312 0.251389 19.3681C0.802862 18.1703 1.85121 17.5524 3.2685 17.4305C3.81451 17.384 3.86756 17.3326 3.86756 16.8302C3.86756 15.1434 3.82856 13.4553 3.87536 11.7692C3.9791 8.02796 5.94943 5.36115 9.6904 3.78079C10.1288 3.59549 10.2551 3.43626 10.2364 2.99801C10.1724 1.34297 11.6904 -0.00981042 13.5273 5.36038e-05C13.9636 0.00284136 14.3948 0.0840467 14.796 0.238936C15.1972 0.393825 15.5602 0.619299 15.8639 0.902213C16.1676 1.18513 16.4059 1.51982 16.5649 1.88678C16.7239 2.25374 16.8005 2.64562 16.7901 3.03958C16.7855 3.20586 16.7644 3.37144 16.7488 3.56308C16.8861 3.61733 17.0351 3.6744 17.1825 3.7364C20.6278 5.19487 22.6098 7.62847 23.0794 11.0386C23.1769 11.7495 23.1371 12.4773 23.1426 13.1967C23.1512 14.4269 23.1426 15.6578 23.1426 16.888C23.1426 17.3142 23.2206 17.3903 23.6886 17.4256C25.3696 17.5496 26.6605 18.5402 26.9444 19.924C27.0331 20.3597 27.0155 20.8077 26.8926 21.2366C26.7698 21.6656 26.5447 22.0651 26.2332 22.4073C25.9216 22.7495 25.5311 23.0262 25.0889 23.2179C24.6467 23.4096 24.1635 23.5118 23.673 23.5173C21.8345 23.5314 19.9952 23.5173 18.1567 23.5173H17.9157C17.6817 24.0521 17.5257 24.5742 17.2394 25.0335C16.5741 26.1073 15.5312 26.7351 14.1872 26.95C14.1339 26.9631 14.0817 26.9798 14.0312 27L13.0406 26.9993ZM13.5023 21.7763H21.2955C22.0755 21.7763 22.8556 21.7855 23.6301 21.7728C24.5381 21.758 25.1777 21.0851 25.0653 20.2833C24.9788 19.6605 24.3563 19.206 23.5209 19.156C22.1013 19.0707 21.2206 18.2245 21.2191 16.9401C21.2191 15.3055 21.2128 13.6709 21.2191 12.0363C21.2266 11.1119 21.0413 10.1946 20.6731 9.33212C19.2113 5.90367 15.2597 4.08799 11.3752 5.05748C8.17716 5.85576 5.83008 8.5895 5.7981 11.5797C5.77782 13.3989 5.7981 15.2181 5.78952 17.0373C5.78484 18.0766 5.03915 18.9094 3.93386 19.1165C3.67879 19.1637 3.41047 19.1546 3.15384 19.1961C2.13981 19.361 1.61174 20.3601 2.13981 21.1358C2.45182 21.5973 2.92919 21.7812 3.51967 21.7805C6.84723 21.7754 10.1748 21.7739 13.5023 21.7763ZM11.1771 23.5272C11.3152 24.5072 12.4251 25.2886 13.6038 25.2562C14.6958 25.2238 15.7699 24.3924 15.8299 23.5272H11.1771ZM14.8323 3.0889C14.871 2.85925 14.8322 2.62438 14.7209 2.41497C14.6096 2.20556 14.4309 2.03134 14.2083 1.91508C13.9739 1.78753 13.7023 1.72689 13.4291 1.7411C13.1558 1.75531 12.8938 1.8437 12.6771 1.9947C12.273 2.27653 12.0773 2.73098 12.1865 3.08961L14.8323 3.0889Z"/>
            <Tabs tabs={tabs}/>
            <TablaUsuarioAdmin propsTablasUsuarios={getSolicitudesUsuarios} nombreQuery="SolicitudesNuevosUsuarios"/>
        </>
        
    )
}

export default Administracion
