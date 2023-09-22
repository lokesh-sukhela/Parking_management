import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import './MenuBar.css'; // You can create a CSS file for styling
import { useNavigate as navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

function Dashboardd() {
 
 
 
  const cookies=new Cookies()
  useEffect(() => {

   
    const token = cookies.get("token");

    if (!token) {

      navigate("/")

      toast.error("Authentication failed! Please Login.", { autoClose: 1000 })

    }

 

  },[])

  const handleLogout = () => {

    

    cookies.remove('role')

    cookies.remove('Email')

    cookies.remove('token')

    navigate('/')

  }
  return (
    <div className="menu-bar">
      <button className="menu-button"><Link to='/parking' >Home</Link></button>
      <button className="menu-button"><Link to='/parking' >New vehichle</Link></button>
      <button className="menu-button"><Link to='/table'>Details</Link></button>
      <button className="menu-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboardd;
