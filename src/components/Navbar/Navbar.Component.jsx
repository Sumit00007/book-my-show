import React from "react";
import { BiChevronDown,BiMenu,BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom";


function NavSm() {
  return(
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown/></span>
        </div>
        <div className="w-8 h-8 text-white">
          <BiSearch className="w-full h-full"/>
        </div>
      </div>
    </>
  )
}
function NavMd(){
  return (
  <>
    <div className="flex items-center w-full gap-3">
    <div className="w-10 h-10">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI_jRQb4lSx9UNElKop6LskWkn467TZsorAKkl9Wj09bMC1uin5nzY2Ms7RKXdTgkIVg&usqp=CAU" alt="logo" className="w-full h-full" />
          </div>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch/>
      <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports and activities"/>
    </div>
    </div>
  </>);
};

function NavLg() {
  return(
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI_jRQb4lSx9UNElKop6LskWkn467TZsorAKkl9Wj09bMC1uin5nzY2Ms7RKXdTgkIVg&usqp=CAU" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md"> 
          <BiSearch/>
          <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports and activities"/>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
              Delhi NCR <BiChevronDown/>
            </span>
            <Link to="/plays" className="text-gray-200 text-base flex items-center cursor-pointer">
              Play
            </Link>
            <button className="bg-red-600 text-white text-xs rounded px-2 py-1">Sign in</button>
            <div className="w-8 h-8 text-white">
              <BiMenu className="w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//Main component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 justify-between px-4 py-3">
      <div className="md:hidden">
        <NavSm/>
      </div>
      <div className="hidden md:flex lg:hidden">
        <NavMd/>
      </div>
      <div className="hidden md:hidden lg:flex">
        <NavLg/>
      </div>
    </nav>
  )
}

export default Navbar