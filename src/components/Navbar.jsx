import React, { useState } from 'react'
import '../assets/css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobile,setMobile]=useState(false)
  const navigate = useNavigate()

  const redirect=(link)=>{
    navigate(link)
    setMobile(false)
  }
  return (
    <>
    <div className='navbar-wrapper'>
        <div className="navbar-container">
            <div className="navbar-section navbar-title">Trippy</div>
            <div className="navbar-section hide">
                <ul>
                    <Link to="/" style={{"all":"unset"}}><li className='navbar-link'> <i className='bi bi-house'></i> Home</li></Link>
                    <Link to="/about" style={{"all":"unset"}}><li className='navbar-link'> <i className='bi bi-info-circle'></i> About</li></Link>
                    <li className='navbar-link'> <i className='bi bi-briefcase'></i> Services</li>
                    <Link to="/contact" style={{"all":"unset"}}><li className='navbar-link'> <i className='bi bi-chat'></i> Contact</li></Link>
                    <li className='navbar-link'> <i className='bi bi-person'></i> Signup</li>
                </ul>
            </div>
            <i className='bi bi-list mobile-navbar-button' onClick={()=>setMobile(true)}></i>
        </div>
    </div>

    {
      mobile?
      <div className="responsive-navbar">
        <div className="responsive-title-container">
          <div className="responsive-title-item main-title">Trippy</div>
          <div className="responsive-title-item"> <i className='bi bi-x-lg close'  onClick={()=>setMobile(false)}></i> </div>
        </div>
        <div className='responsive-links-container'>
            <div onClick={()=>redirect('/')} className='responsive-links animate__animated animate__fadeInUp'> <i className='bi bi-house'></i> Home</div>
            <div onClick={()=>redirect('/about')} className='responsive-links animate__animated animate__fadeInUp'> <i className='bi bi-info-circle'></i> About</div>
            <div className='responsive-links animate__animated animate__fadeInUp'> <i className='bi bi-briefcase'></i> Services</div>
            <div onClick={()=>redirect('/contact')} className='responsive-links animate__animated animate__fadeInUp'> <i className='bi bi-chat'></i> Contact</div>
            <div className='responsive-links animate__animated animate__fadeInUp'> <i className='bi bi-person'></i> Signup</div>
        </div>
    </div>
    :""
    }
    </>
  )
}

export default Navbar
