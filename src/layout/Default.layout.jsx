import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component.jsx'
import Footer from '../components/Footer/Footer.Component.jsx'

const DefaultLayoutHoc = (Component) =>({...props}) => {
  return (
    <div>
        <Navbar/>
        <Component {...props}/>
        <Footer/>
    </div>
    
  )
}

export default DefaultLayoutHoc