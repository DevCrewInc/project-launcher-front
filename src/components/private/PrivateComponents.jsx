


const PrivateComponent = ({ roleList, children }) => {

  
  if (roleList.includes(JSON.parse(localStorage.getItem('userData')).rol)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;