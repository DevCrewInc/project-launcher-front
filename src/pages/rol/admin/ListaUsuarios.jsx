import React from 'react'
import UpperBar from 'components/UpperBar'
import TablaUsuarioAdmin from 'components/TablaUsuariosAdmin'
import {getUsuarios} from '../../../graphql/admin/queries'



const ListaUsuarios = () => {
    return (
        <>
            <UpperBar title="Usuarios" icon="M18.1884 25.375C17.8031 25.375 17.4183 25.375 17.033 25.375C16.9978 25.3598 16.964 25.3354 16.9274 25.3307C15.9673 25.2072 15.1214 24.8267 14.3774 24.2201C14.225 24.0957 14.0818 23.9603 13.9265 23.8229C13.6883 24.5263 13.2359 25.0055 12.5478 25.2611C12.4388 25.3016 12.3279 25.3374 12.218 25.375C11.9614 25.375 11.7044 25.375 11.4479 25.375C11.4064 25.3574 11.3668 25.335 11.3239 25.323C10.616 25.1314 10.1135 24.7051 9.82035 24.0389C9.79093 23.9717 9.76634 23.9026 9.73355 23.8196C9.67231 23.8759 9.63084 23.9121 9.59129 23.9502C8.96199 24.5601 8.21985 24.9778 7.37113 25.2072C7.12809 25.273 6.87927 25.3197 6.63333 25.375C6.24803 25.375 5.86322 25.375 5.47792 25.375C5.44272 25.3598 5.40897 25.3354 5.37232 25.3307C2.8064 24.9807 0.931514 22.7977 1.00192 20.2419C1.03567 19.0193 2.29862 18.037 3.52299 18.2559C4.56507 18.4419 5.33711 19.3493 5.33615 20.353C5.33567 20.6749 5.49769 20.9166 5.80391 21.0363C6.28902 21.2256 6.77366 20.869 6.77607 20.3173C6.78137 19.1671 6.77752 18.017 6.77655 16.8669C6.77655 16.8373 6.76787 16.8078 6.75919 16.7539C5.32072 16.7539 3.88996 16.7539 2.46402 16.7539C2.46402 16.2647 2.46402 15.8021 2.46402 15.3248C2.9448 15.3248 3.40677 15.3248 3.91021 15.3248C3.04703 13.9759 2.56577 12.5296 2.45968 10.9732C2.35311 9.4059 2.62316 7.89673 3.2867 6.46337C3.94686 5.03764 4.90601 3.84556 6.1675 2.89523C9.51993 0.369449 14.1763 0.367542 17.4969 2.8938C19.2059 4.19412 20.3632 5.87305 20.9062 7.93583C21.5919 10.5403 21.1878 13.0017 19.7619 15.3329C20.2639 15.3329 20.7316 15.3329 21.2052 15.3329C21.2052 15.8193 21.2052 16.2818 21.2052 16.7706C19.759 16.7706 18.3282 16.7706 16.8878 16.7706C16.8878 17.9622 16.8864 19.128 16.8888 20.2934C16.8898 20.7517 17.1931 21.085 17.6034 21.0902C18.01 21.0954 18.3118 20.7621 18.335 20.3068C18.3813 19.3941 18.8461 18.7509 19.6833 18.3923C20.49 18.0471 21.4188 18.2507 22.0356 18.8653C22.6461 19.4742 22.7377 20.2157 22.6253 21.0239C22.3432 23.0457 20.8932 24.6912 18.9059 25.2153C18.6696 25.2773 18.4281 25.3221 18.1884 25.375ZM16.5614 15.3196C16.5657 15.321 16.5802 15.3296 16.5951 15.3296C16.9563 15.331 17.3185 15.3153 17.6777 15.3382C17.8913 15.3515 18.0153 15.269 18.1339 15.1112C19.5521 13.2206 20.0739 11.1101 19.6167 8.80462C18.7955 4.65999 14.863 1.93108 10.7467 2.51996C8.54149 2.83563 6.7698 3.88895 5.45285 5.65323C4.13975 7.41274 3.66765 9.40161 3.9946 11.5617C4.19617 12.8944 4.73626 14.0946 5.57678 15.1584C5.63175 15.228 5.71566 15.321 5.78944 15.3239C6.23309 15.3391 6.67721 15.3315 7.14208 15.3315C7.11749 15.2681 7.10832 15.239 7.0953 15.2113C6.43321 13.8128 6.81658 12.3966 8.09109 11.5025C8.15957 11.4544 8.21551 11.3409 8.21744 11.2565C8.22949 10.773 8.20972 10.2885 8.22949 9.80501C8.23866 9.58328 8.16343 9.47886 7.96379 9.38158C6.95305 8.88854 6.5094 7.70456 6.93135 6.67317C7.34751 5.65514 8.49231 5.10916 9.5585 5.42054C10.4019 5.66658 11.0438 6.43047 11.1079 7.26445C11.1793 8.19475 10.7009 9.02682 9.87388 9.42259C9.7972 9.45931 9.67906 9.52749 9.67713 9.58424C9.66122 10.0649 9.66797 10.5465 9.66797 11.0324C11.1243 11.0324 12.555 11.0324 14.0008 11.0324C14.0008 10.6132 13.9858 10.2089 14.0065 9.80644C14.0181 9.58519 13.9438 9.47933 13.7428 9.38206C12.7865 8.91858 12.3332 7.83569 12.6534 6.83196C12.9688 5.84444 13.9824 5.20453 15.0062 5.34567C15.9745 5.47966 16.734 6.22877 16.8782 7.19149C17.0142 8.10176 16.502 9.02825 15.6263 9.42259C15.4711 9.49221 15.4387 9.57518 15.4412 9.72538C15.4494 10.217 15.4503 10.7091 15.4407 11.2007C15.4378 11.36 15.4903 11.4487 15.6239 11.545C16.6154 12.2574 17.0392 13.2172 16.8353 14.4193C16.7837 14.7259 16.6549 15.0192 16.5614 15.3196ZM8.22226 16.7687C8.22226 16.8788 8.22226 16.9651 8.22226 17.0514C8.22226 18.162 8.23046 19.272 8.21937 20.3826C8.21069 21.2538 7.79887 21.9042 7.01718 22.2923C6.24177 22.6776 5.47358 22.6008 4.77243 22.0992C4.19955 21.6896 3.9078 21.1179 3.88851 20.4126C3.87646 19.9811 3.5442 19.6506 3.14974 19.664C2.74612 19.6778 2.43943 20.0164 2.44811 20.4474C2.45052 20.5738 2.47174 20.6997 2.48572 20.8256C2.70996 22.8435 4.74832 24.2969 6.75437 23.8692C8.4952 23.4977 9.66025 22.0782 9.66604 20.3139C9.6699 19.2034 9.667 18.0933 9.66604 16.9828C9.66604 16.9141 9.65832 16.845 9.65398 16.7682C9.17706 16.7687 8.71461 16.7687 8.22226 16.7687ZM13.9998 16.7644C13.9998 16.8621 13.9998 16.9399 13.9998 17.0176C13.9998 18.1043 13.9969 19.1905 14.0022 20.2772C14.0032 20.5061 14.0186 20.7378 14.0538 20.9638C14.3267 22.7129 16.0126 24.0571 17.7819 23.9426C19.691 23.8196 21.183 22.3085 21.2196 20.4617C21.2283 20.0178 20.9178 19.6707 20.5064 19.6645C20.1086 19.6588 19.7923 19.9873 19.7764 20.4231C19.7315 21.6514 18.7724 22.5388 17.5123 22.5183C16.3747 22.4997 15.446 21.5265 15.444 20.3492C15.4426 19.2387 15.4436 18.1286 15.4436 17.0181C15.4436 16.9351 15.4436 16.8516 15.4436 16.7644C14.9507 16.7644 14.4941 16.7644 13.9998 16.7644ZM11.8317 12.4757C11.1416 12.4757 10.4521 12.4705 9.762 12.4796C9.58069 12.4819 9.39214 12.5067 9.2195 12.5606C8.57573 12.7618 8.14125 13.4275 8.23239 14.0479C8.34378 14.8075 8.92052 15.3253 9.69304 15.3296C11.1209 15.3377 12.5488 15.3344 13.9766 15.3282C14.1338 15.3277 14.2964 15.2953 14.4468 15.2476C15.0896 15.044 15.5246 14.3793 15.4334 13.7599C15.322 13.0074 14.7554 12.492 13.9974 12.4791C13.2755 12.4672 12.5536 12.4762 11.8317 12.4757ZM11.1108 16.7706C11.1108 18.4714 11.1108 20.1446 11.1108 21.8179C11.1108 22.278 11.104 22.7381 11.1127 23.1978C11.1233 23.7299 11.6075 24.0718 12.0849 23.8945C12.3814 23.7843 12.5546 23.5106 12.5546 23.1377C12.5555 21.0759 12.555 19.0141 12.5546 16.9518C12.5546 16.8917 12.544 16.8311 12.5382 16.7706C12.0598 16.7706 11.5978 16.7706 11.1108 16.7706ZM8.94704 8.19046C9.32896 8.18807 9.67183 7.8438 9.66507 7.46901C9.65832 7.09946 9.32703 6.77188 8.95331 6.7652C8.5738 6.75853 8.22564 7.0966 8.22371 7.47473C8.22178 7.85143 8.56657 8.19284 8.94704 8.19046ZM15.4426 7.48617C15.4489 7.11091 15.106 6.76711 14.7241 6.7652C14.3523 6.76377 14.0162 7.08563 14.0012 7.45756C13.9863 7.82949 14.3234 8.17949 14.7072 8.19046C15.0853 8.20142 15.4363 7.86478 15.4426 7.48617Z"/>
            <TablaUsuarioAdmin propsTablasUsuarios={getUsuarios} nombreQuery="Usuarios"/>
        </>
        
    )
}

export default ListaUsuarios