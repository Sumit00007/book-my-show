import React  from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';
import Footer from '../components/Footer/Footer.Component';


const MovieLayoutHoc = (Component) => ({...props}) => {

  
  return (
    <div>
        <div>
            <MovieNavbar/>
            <Component {...props}/>
            <Footer />
        </div>
    </div>
  )
}

export default MovieLayoutHoc