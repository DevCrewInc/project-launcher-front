import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import { useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from 'context/userContext';
import { useNavigate } from 'react-router';




const PrivateLayout = () => {
  const navigate = useNavigate();

  const{userData}=useUser();

  useEffect(() =>{

    if(userData.estado==="PENDIENTE"){
      navigate('/');

    }
  },[])

  
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
