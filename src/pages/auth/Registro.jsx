import React, { useEffect } from 'react';
import backgroundImage from '../../media/Group1610.png'
import { useMutation } from '@apollo/client';
import { REGISTRO } from 'graphql/auth/mutaciones';
import { useNavigate } from 'react-router';
import useFormData from 'hooks/useFormData';


const Registro = () => {
    
    const navigate = useNavigate();
    const{form, formData, updateFormData} = useFormData();
    const[registro, {data: dataRegistro, error: errorRegistro, loading: loadingRegistro}]= useMutation(REGISTRO);
   

    const submitForm = async (e) => {
      e.preventDefault();
      await registro({variables: formData});
    }

    useEffect(() => {
        if (dataRegistro) {
          if (dataRegistro.registro.token) {
            navigate('/');
            console.log(dataRegistro.registro.token)
          }
          else{
              console.log("ok genial")
                
          }
        }
      }, [dataRegistro, navigate]);


  return (
   
  
        <>

        <div className="flex relative justify-between">
                <div className="flex flex-col absolute fondoLogin">      
                    <svg className="h-screen w-screen" viewBox="0 0 1410 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1325.03 568.458C1330.12 556.599 1340.31 547.458 1352.79 543.752V611H1118.79H916.289H712.789H585V608.811C585 564.34 620.967 528.27 665.31 528.27C693.065 528.27 717.536 542.434 731.988 563.929C741.76 552.811 756.131 545.729 772.061 545.729C781.997 545.729 791.194 548.446 799.16 553.14C809.096 540.787 824.287 532.881 841.368 532.881C858.366 532.881 873.557 540.705 883.493 553.058C916.289 521 916.289 511.469 916.289 486.5L955.5 472.5C960.345 483.535 954 511.469 979.405 536.67C984.661 534.281 990.491 532.881 996.65 532.881C1007.41 532.881 1017.18 537.164 1024.49 543.999C1035 524.646 1055.53 511.469 1079.09 511.469C1107.42 511.469 1131.24 530.493 1138.79 556.434C1158.42 560.634 1173.2 578.176 1173.2 599.176V600.494C1177.39 599.588 1181.74 599.176 1186.26 599.176C1196.52 599.176 1206.21 601.4 1214.92 605.517C1231.67 579.905 1260.57 562.94 1293.42 562.94C1304.5 562.94 1315.18 564.917 1325.03 568.458Z" fill="#666666"/>
                        <path d="M1930.73 404C1963.38 404 1986.29 422.041 1995 451.952V611H1981.26H1523.33H1300C1302.37 569.885 1326.69 534.752 1361.32 517.09V516.236C1361.32 464.961 1402.77 423.371 1453.87 423.371C1485.86 423.371 1514.06 439.703 1530.71 464.486C1541.98 451.667 1558.54 443.501 1576.9 443.501C1588.35 443.501 1598.95 446.634 1608.12 452.047C1619.58 437.804 1637.08 428.688 1656.77 428.688C1676.36 428.688 1705.31 441.507 1705.31 451.952C1722.96 429.718 1769.78 394.812 1815.84 433.056C1821.9 430.302 1828.62 428.688 1835.72 428.688C1848.11 428.688 1859.38 433.626 1867.8 441.507C1879.91 419.193 1903.57 404 1930.73 404Z" fill="#666666"/>
                        <path d="M850.243 413.796V262.132C805.101 310.329 786.07 423.524 783.415 451.823C781.291 474.462 787.841 474.52 791.381 471.72L850.243 413.796Z" fill="#CF264D"/>
                        <path d="M1025.76 413.796V262.132C1070.9 310.329 1089.93 423.524 1092.59 451.823C1094.71 474.462 1088.16 474.52 1084.62 471.72L1025.76 413.796Z" fill="#CF264D"/>
                        <path d="M871.198 181.609H1005.24V413.713H871.198V181.609Z" fill="#CF264D"/>
                        <path d="M938.22 0C885.308 59.5322 871.198 145.582 870.757 181.166L919.701 205.528L1005.24 180.723C998.188 87.1721 958.063 21.4091 938.22 0Z" fill="#CF264D"/>
                        <path d="M911.217 441.066H964.783L977.89 491.213H898.11L911.217 441.066Z" fill="#CF264D"/>
                        <ellipse cx="936.783" cy="169.353" rx="26.7831" ry="27.3529" fill="#121212"/>
                        <path d="M588.2 599.109V600.427L608 610.933H533.789H331.289H127.789H0V608.744C0 564.274 35.967 528.203 80.3099 528.203C108.065 528.203 132.536 542.368 146.988 563.862C156.76 552.744 171.131 545.662 187.061 545.662C196.997 545.662 206.194 548.379 214.16 553.074C224.096 540.72 239.287 532.815 256.368 532.815C273.366 532.815 288.557 540.638 298.493 552.991C309.932 535.563 345.129 507.885 394.405 536.603C399.661 534.215 405.491 532.815 411.65 532.815C422.407 532.815 432.179 537.097 439.487 543.932C449.998 524.579 470.527 511.403 494.095 511.403C522.425 511.403 546.238 530.426 553.793 556.368C573.419 560.568 588.2 578.109 588.2 599.109Z" fill="#666666"/>
                    </svg>

                </div>
            </div>

            <div className="flex ">
                <div className="flex flex-col h-screen items-center absolute p-10 bg-white">
                    <div className="mt-4">
                        <svg width="185" height="64" viewBox="0 0 185 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.03234 52.1462H14.9325V56.2123H2.76484V34.5878H8.03234V52.1462ZM30.9063 52.3926H22.8356L21.5419 56.2123H16.0279L23.8522 34.5878H29.9514L37.7757 56.2123H32.2001L30.9063 52.3926ZM29.5509 48.3265L26.871 40.4098L24.2218 48.3265H29.5509ZM45.332 34.5878V47.5256C45.332 48.8193 45.6504 49.8153 46.287 50.5136C46.9236 51.2118 47.858 51.5609 49.0901 51.5609C50.3223 51.5609 51.267 51.2118 51.9241 50.5136C52.5813 49.8153 52.9099 48.8193 52.9099 47.5256V34.5878H58.1774V47.4948C58.1774 49.4252 57.7666 51.0578 56.9452 52.3926C56.1238 53.7275 55.0148 54.7337 53.6184 55.4114C52.2424 56.0891 50.7022 56.428 48.9977 56.428C47.2932 56.428 45.7633 56.0994 44.4079 55.4422C43.0731 54.7645 42.0155 53.7583 41.2351 52.4234C40.4547 51.068 40.0645 49.4252 40.0645 47.4948V34.5878H45.332ZM81.2213 56.2123H75.9538L67.1438 42.8741V56.2123H61.8763V34.5878H67.1438L75.9538 47.9876V34.5878H81.2213V56.2123ZM84.1462 45.3693C84.1462 43.2335 84.6083 41.3339 85.5324 39.6705C86.4565 37.9866 87.74 36.6825 89.3829 35.7584C91.0463 34.8137 92.9254 34.3414 95.0201 34.3414C97.5871 34.3414 99.7844 35.0191 101.612 36.3745C103.44 37.7299 104.662 39.5781 105.278 41.9192H99.4867C99.0554 41.0156 98.4393 40.3277 97.6384 39.8553C96.858 39.383 95.9647 39.1468 94.9585 39.1468C93.3361 39.1468 92.0218 39.7116 91.0155 40.8411C90.0093 41.9706 89.5061 43.48 89.5061 45.3693C89.5061 47.2586 90.0093 48.768 91.0155 49.8975C92.0218 51.027 93.3361 51.5917 94.9585 51.5917C95.9647 51.5917 96.858 51.3555 97.6384 50.8832C98.4393 50.4109 99.0554 49.7229 99.4867 48.8193H105.278C104.662 51.1604 103.44 53.0087 101.612 54.3641C99.7844 55.6989 97.5871 56.3663 95.0201 56.3663C92.9254 56.3663 91.0463 55.9043 89.3829 54.9802C87.74 54.0355 86.4565 52.7315 85.5324 51.068C84.6083 49.4046 84.1462 47.505 84.1462 45.3693ZM127.233 34.5878V56.2123H121.965V47.3099H113.771V56.2123H108.504V34.5878H113.771V43.059H121.965V34.5878H127.233ZM136.303 38.808V43.1822H143.357V47.2483H136.303V51.9922H144.281V56.2123H131.035V34.5878H144.281V38.808H136.303ZM158.729 56.2123L154.231 48.0492H152.968V56.2123H147.701V34.5878H156.541C158.246 34.5878 159.694 34.8856 160.885 35.4811C162.096 36.0767 163 36.8981 163.596 37.9455C164.191 38.9723 164.489 40.1223 164.489 41.3955C164.489 42.8331 164.078 44.1166 163.257 45.2461C162.456 46.3755 161.265 47.1764 159.683 47.6488L164.674 56.2123H158.729ZM152.968 44.3219H156.233C157.199 44.3219 157.917 44.0858 158.39 43.6134C158.883 43.1411 159.129 42.4737 159.129 41.6112C159.129 40.7897 158.883 40.1428 158.39 39.6705C157.917 39.1982 157.199 38.962 156.233 38.962H152.968V44.3219Z" fill="#A5143A"/>
                            <path d="M18.1361 13.3162C18.1361 14.4046 17.8794 15.4314 17.366 16.3966C16.8526 17.3618 16.0311 18.1524 14.9017 18.7685C13.7722 19.364 12.3244 19.6618 10.5583 19.6618H6.67696V28.3486H3.16529V6.9397H10.5583C12.2012 6.9397 13.5874 7.22721 14.7168 7.80222C15.8669 8.35669 16.7191 9.11653 17.2736 10.0817C17.8486 11.0469 18.1361 12.1251 18.1361 13.3162ZM10.5583 16.797C11.8931 16.797 12.8891 16.4993 13.5463 15.9037C14.2034 15.2876 14.532 14.4251 14.532 13.3162C14.532 10.975 13.2074 9.80449 10.5583 9.80449H6.67696V16.797H10.5583ZM32.6056 28.3486L27.677 19.785H24.997V28.3486H21.4853V6.9397H28.8783C30.5212 6.9397 31.9074 7.22721 33.0369 7.80222C34.1869 8.37723 35.0391 9.14733 35.5936 10.1125C36.1686 11.0777 36.4561 12.1559 36.4561 13.347C36.4561 14.7434 36.0454 16.0167 35.224 17.1667C34.4231 18.2962 33.1806 19.0663 31.4967 19.477L36.795 28.3486H32.6056ZM24.997 16.9818H28.8783C30.1926 16.9818 31.1784 16.6533 31.8355 15.9961C32.5132 15.339 32.852 14.4559 32.852 13.347C32.852 12.238 32.5235 11.3755 31.8663 10.7594C31.2092 10.1228 30.2132 9.80449 28.8783 9.80449H24.997V16.9818ZM50.7134 28.5642C48.7214 28.5642 46.8834 28.1021 45.1994 27.178C43.536 26.2334 42.2114 24.9293 41.2257 23.2659C40.2605 21.5819 39.7779 19.6926 39.7779 17.5979C39.7779 15.5033 40.2605 13.6242 41.2257 11.9608C42.2114 10.2974 43.536 9.00358 45.1994 8.07946C46.8834 7.1348 48.7214 6.66247 50.7134 6.66247C52.7259 6.66247 54.5639 7.1348 56.2273 8.07946C57.9113 9.00358 59.2359 10.2974 60.2011 11.9608C61.1663 13.6242 61.6489 15.5033 61.6489 17.5979C61.6489 19.6926 61.1663 21.5819 60.2011 23.2659C59.2359 24.9293 57.9113 26.2334 56.2273 27.178C54.5639 28.1021 52.7259 28.5642 50.7134 28.5642ZM50.7134 25.5146C52.1304 25.5146 53.3933 25.1963 54.5023 24.5597C55.6112 23.9025 56.4738 22.9784 57.0898 21.7873C57.7265 20.5757 58.0448 19.1792 58.0448 17.5979C58.0448 16.0167 57.7265 14.6305 57.0898 13.4394C56.4738 12.2483 55.6112 11.3344 54.5023 10.6978C53.3933 10.0612 52.1304 9.74288 50.7134 9.74288C49.2964 9.74288 48.0334 10.0612 46.9245 10.6978C45.8155 11.3344 44.9427 12.2483 44.3061 13.4394C43.69 14.6305 43.382 16.0167 43.382 17.5979C43.382 19.1792 43.69 20.5757 44.3061 21.7873C44.9427 22.9784 45.8155 23.9025 46.9245 24.5597C48.0334 25.1963 49.2964 25.5146 50.7134 25.5146ZM76.7792 6.9397V22.3726C76.7792 24.2824 76.1939 25.7918 75.0234 26.9008C73.8734 28.0097 72.3537 28.5642 70.4644 28.5642C68.575 28.5642 67.0451 28.0097 65.8745 26.9008C64.7245 25.7918 64.1495 24.2824 64.1495 22.3726H67.692C67.7125 23.3172 67.9487 24.0668 68.4005 24.6213C68.8728 25.1757 69.5608 25.453 70.4644 25.453C71.368 25.453 72.0559 25.1757 72.5282 24.6213C73.0006 24.0463 73.2367 23.2967 73.2367 22.3726V6.9397H76.7792ZM86.0036 9.77368V16.0577H93.3966V18.9225H86.0036V25.4838H94.3207V28.3486H82.4919V6.9089H94.3207V9.77368H86.0036ZM97.4755 17.5979C97.4755 15.5033 97.9581 13.6242 98.9233 11.9608C99.909 10.2974 101.234 9.00358 102.897 8.07946C104.581 7.1348 106.419 6.66247 108.411 6.66247C110.69 6.66247 112.713 7.22721 114.479 8.35669C116.266 9.46564 117.56 11.0469 118.361 13.1005H114.141C113.586 11.971 112.816 11.1291 111.83 10.5746C110.844 10.0201 109.705 9.74288 108.411 9.74288C106.994 9.74288 105.731 10.0612 104.622 10.6978C103.513 11.3344 102.64 12.2483 102.004 13.4394C101.388 14.6305 101.08 16.0167 101.08 17.5979C101.08 19.1792 101.388 20.5654 102.004 21.7565C102.64 22.9476 103.513 23.8717 104.622 24.5289C105.731 25.1655 106.994 25.4838 108.411 25.4838C109.705 25.4838 110.844 25.2066 111.83 24.6521C112.816 24.0976 113.586 23.2556 114.141 22.1261H118.361C117.56 24.1797 116.266 25.761 114.479 26.87C112.713 27.9789 110.69 28.5334 108.411 28.5334C106.398 28.5334 104.56 28.0713 102.897 27.1472C101.234 26.2026 99.909 24.8985 98.9233 23.2351C97.9581 21.5717 97.4755 19.6926 97.4755 17.5979ZM136.302 6.9397V9.80449H130.603V28.3486H127.092V9.80449H121.362V6.9397H136.302Z" fill="#A5143A"/>
                            <g clip-path="url(#clip0_697_2100)">
                            <path d="M168.377 1.81717C168.778 1.81717 169.179 1.81717 169.581 1.81717C169.643 1.83612 169.705 1.86482 169.769 1.87286C171.073 2.04223 171.961 2.83281 172.285 4.11084C172.597 5.34695 172.382 6.55838 172.075 7.75201C171.632 9.46695 170.9 11.0676 170.05 12.6161C168.632 15.1962 166.894 17.5445 164.905 19.709C164.681 19.9518 164.602 20.1884 164.689 20.511C164.833 21.0432 164.951 21.5829 165.07 22.1215C165.222 22.8012 165.084 23.4305 164.596 23.9225C162.286 26.2552 159.961 28.5747 157.629 30.8874C157.491 31.0246 157.248 31.1365 157.061 31.1256C156.813 31.1113 156.765 30.8403 156.722 30.621C156.715 30.5836 156.704 30.5469 156.698 30.5096C156.451 28.9387 156.207 27.3679 155.956 25.7977C155.847 25.1213 155.987 24.5099 156.402 23.9667C156.652 23.6401 156.654 23.5356 156.356 23.2364C154.581 21.4606 152.806 19.6854 151.03 17.9108C150.747 17.6283 150.645 17.6329 150.325 17.8752C149.835 18.2449 149.284 18.4424 148.668 18.3482C147.02 18.0974 145.376 17.8292 143.73 17.5743C143.475 17.5347 143.258 17.448 143.108 17.2298C143.108 17.1724 143.108 17.115 143.108 17.0582C143.245 16.8773 143.367 16.6821 143.522 16.5185C143.863 16.1579 144.22 15.8134 144.571 15.4626C146.461 13.5732 148.351 11.6843 150.24 9.79306C150.798 9.23442 151.46 9.04381 152.226 9.22007C152.727 9.3349 153.23 9.44341 153.723 9.58407C154.168 9.71153 154.547 9.65239 154.871 9.30791C154.956 9.21777 155.056 9.14256 155.148 9.05989C157.585 6.88449 160.22 4.99386 163.147 3.52924C164.383 2.91032 165.659 2.38671 167.011 2.07668C167.463 1.97448 167.922 1.90329 168.377 1.81717ZM168.269 9.14199C168.263 7.45748 166.902 6.09448 165.225 6.11629C163.541 6.13811 162.193 7.4259 162.202 9.16495C162.212 10.9459 163.604 12.1866 165.247 12.1895C166.932 12.1918 168.275 10.8299 168.269 9.14199Z" fill="#A5143A"/>
                            <path d="M146.034 27.9249C146.089 27.6952 146.155 27.2887 146.288 26.9046C147.036 24.7395 148.027 22.7002 149.475 20.906C149.642 20.6988 149.829 20.507 150.008 20.3084C150.168 20.131 150.346 20.1051 150.537 20.2544C150.635 20.3302 150.73 20.4111 150.817 20.4984C151.837 21.5158 152.856 22.5354 153.874 23.5545C153.928 23.6085 153.982 23.6625 154.032 23.7205C154.305 24.0334 154.282 24.1689 153.996 24.4691C152.766 25.7604 151.225 26.509 149.576 27.1096C148.541 27.4862 147.549 27.98 146.541 28.4284C146.104 28.6224 146.023 28.5765 146.034 27.9249Z" fill="#A5143A"/>
                            </g>
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <form className="flex flex-col w-80 mt-4" ref={form} onSubmit= {submitForm} onChange={updateFormData}>
                                <input className=" font-light rounded-lg border bg-gray-100 mt-5 h-8 p-2" name='correo' type= 'email' placeholder="Email"></input>
                                <input className=" font-light rounded-lg border bg-gray-100 mt-5 h-8 p-2" name='nombre' type= 'text' placeholder="Nombre usuario"></input>
                                <input className=" font-light rounded-lg border bg-gray-100 mt-5 h-8 p-2" name='identificacion' type= 'text' placeholder="Identificación"></input>
                                <input className="font-light rounded-lg border bg-gray-100 mt-5 h-8 p-2"  name='contrasena' type="password" placeholder="Contraseña"></input>
                            <div className="flex space-x-2">
                                <select name='rol' className="rounded-lg border bg-gray-100 mt-5 h-8 px-2 w-80" defaultValue="">
                                    <option disabled value="">Rol</option>
                                    <option>ESTUDIANTE</option>
                                    <option>LIDER</option>
                                </select>
                                <select name='semestre' className="rounded-lg border bg-gray-100 mt-5 h-8 px-2 w-80" defaultValue="">
                                    <option disabled value="">Semestre</option>
                                    <option>ESTUDIANTE</option>
                                    <option>LIDER</option>
                                </select>
                            </div>
                                <select name='rol' className="rounded-lg border bg-gray-100 mt-5 h-8 px-2 w-80" defaultValue="">
                                    <option disabled value="">Facultad</option>
                                    <option>ESTUDIANTE</option>
                                    <option>LIDER</option>
                                </select>
                            
                        
                            <div className="flex justify-center">
                                <input className="rounded-full cursor-pointer submitButton mt-12 h-10 p-2 w-52 text-white" type="submit" value="Enviar datos"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
            
            
    )
}

export default  Registro;
