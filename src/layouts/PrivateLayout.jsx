import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import { useEffect ,useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from 'context/userContext';
import { useNavigate } from 'react-router';
import jwt_decode from 'jwt-decode';




const PrivateLayout = () => {


  const{userData,setUserData}=useUser();
  const navigate = useNavigate();
  const [authData, setAuthData] = useState();

  useEffect(() => {
      if (authData) {
        const decoded = jwt_decode(authData);
        setUserData({
          _id: decoded._id,
          nombre: decoded.nombre,
          identificacion: decoded.identificacion,
          correo: decoded.correo,
          rol: decoded.rol,
          estado:decoded.estado,
          semestre:decoded.semestre,
          facultad:decoded.facultad,
          celular:decoded.celular,
          aboutMe:decoded.aboutMe
        });
      }else if (localStorage.getItem('token')){
        const decoded = jwt_decode(JSON.parse(localStorage.getItem('token')));
        setUserData({
          _id: decoded._id,
          nombre: decoded.nombre,
          identificacion: decoded.identificacion,
          correo: decoded.correo,
          rol: decoded.rol,
          estado:decoded.estado,
          semestre:decoded.semestre,
          facultad:decoded.facultad,
          celular:decoded.celular,
          aboutMe:decoded.aboutMe
        })
        }
    }, [authData]);
  

  

  useEffect(() =>{
    console.log(userData)

    if(userData){
      if(userData.estado==="PENDIENTE"){
        localStorage.clear();
        setUserData()
        navigate('/');
      }
    }

 
  },[userData])

  

  
  return (
  
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll '>
          <div className = "flex flex-col p-10">
            <Outlet />
          </div> 
        </div>
      </div> 
      <ToastContainer />
    </div>
  
  );
};

export default PrivateLayout;
