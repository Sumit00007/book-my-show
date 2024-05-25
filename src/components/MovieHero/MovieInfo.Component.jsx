import React, {useContext} from 'react';
import {MovieContext} from '../../context/Movie.context';
import PaymetModel from '../PaymetModel/Payment.Component';
const MovieInfo = ({movie}) => {

    const { price, setIsOpen, isOpen, rentMovie, buyMovie } =useContext(MovieContext);
    
    const genres = movie.genres?.map(({name}) => name).join(", ");
    

    return (
    <>
        <PaymetModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className='flex flex-col gap-8 px-4 my-3'>
            <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
            <div className='text-white flex flex-col gap-2 md:px-4'>
                <h4>4k rating</h4>
                <h4>English, Hindi, Tamil, Telgu, Kannada</h4>
                <h4>{movie.runtime} min | {genres}</h4>
            </div>
            <div className='flex items-center gap-3 w-full'>
                    <button 
                    onClick={rentMovie}
                    className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>
                        Rent ₹149
                    </button>
                    <button 
                    onClick={buyMovie}
                    className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                        Buy ₹549
                    </button>
                </div>
        </div>
    </>
)
};

export default MovieInfo