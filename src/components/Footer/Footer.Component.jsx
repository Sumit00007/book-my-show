import React from 'react';
import { IoTicketOutline } from 'react-icons/io5';
import { RiCustomerService2Fill } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaLinkedin,FaFacebook,FaYoutube,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
return (
    <>
        <div className='bg-darkBackground-700 my-8 py-3 hidden lg:flex flex-col '>
            <div className=' flex  w-full h-20 border-y-2   '>
                <div className='flex flex-row w-full justify-around align-middle'>
                    <div className='py-2'>
                    <a href="#" >
                        <div className='flex'>
                            <RiCustomerService2Fill className='w-12 h-12'/>
                        </div>
                    </a>
                    </div>
                    <div className='py-2'>
                    <a href="#" >
                        <div className='flex  '>
                            <IoTicketOutline className='w-12 h-12'/>
                        </div>
                    </a>
                    </div>
                    <div className='py-2'>
                    <a href="#" >
                        <div className='flex '>
                            <SlEnvolopeLetter className='w-12 h-12'/>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            <div className='container text-grey-600 mx-auto px-4 md:px-12 my-8  h-40 gap-2' >
                <div className='flex flex-col  gap-1 '>
                    <h1 className='text-bold text-white'>Movies Now Showing in Kolkata</h1>
                    <div className='flex justify-start gap-3 text-xs '>
                    <a href="#" className='hover:text-white hover:ease-in-out '>Bhaiya ji</a>|
                    <a href="#" className='hover:text-white hover:ease-in-out '>Furosia</a>|
                    <a href="#" className='hover:text-white hover:ease-in-out '>Radhe</a>|
                    </div>
                </div>
                <div className='flex flex-col  text-green'>
                <h2 className='text-bold text-white'>Upcoming Movies in Kolkata</h2>
                    <div className='flex justify-start gap-3 text-xs'>
                    <a href="#" className='hover:text-white  '>Love me if you dare</a>|
                    <a href="#" className='hover:text-white  '>Incident</a>|
                    <a href="#" className='hover:text-white  '>The Strangers : Chapter 1</a>|
                    <a href="#" className='hover:text-white  '>The Strangers : Chapter 1</a>|
                    <a href="#" className='hover:text-white  '>The Strangers : Chapter 1</a>|
                    <a href="#" className='hover:text-white  '>The Strangers : Chapter 1</a>|
                    </div>
                </div>
                <div className='flex flex-col  text-green'>
                <h2 className='text-bold text-white'>Help</h2>
                    <div className='flex justify-start gap-3 text-xs'>
                    <a href="#" className='hover:text-white  '>Contact Us</a>|
                    <a href="#" className='hover:text-white  '>FAQ</a>|
                    <a href="#" className='hover:text-white  '>Terms & Conditions</a>|
                    <a href="#" className='hover:text-white'> Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Footer