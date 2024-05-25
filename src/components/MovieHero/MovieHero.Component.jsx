import React, {useContext} from 'react';
import { MovieContext } from '../../context/Movie.context';
import MovieInfo from './MovieInfo.Component';
import PaymetModel from '../PaymetModel/Payment.Component';

const MovieHero = () => {

    const {movie} = useContext(MovieContext);
    const { price, setIsOpen, isOpen, rentMovie, buyMovie } =useContext(MovieContext);

    const genres = movie.genres?.map(({name}) => name).join(", ");
    // console.log(genres);
    return (
    <><PaymetModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div>
            {/* mobile and tab sizes */}
            <div className='lg:hidden w-full'>
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="cover poster"
                    className='m-4 rounded'
                    style={{width: "calc(100% - 2rem)"}
                    }
                />
            </div>
            <div className='flex flex-col gap-3 lg:hidden'>
                <div className='flex flex-col-reverse gap-3 px-4 my-3'>
                    <div className='text-black flex flex-col gap-2 md:px-4'>
                        <h4>4k rating</h4>
                        <h4>English, Hindi, Kannada, Tamil, Telgu</h4>
                        <h4>
                            {movie.runtime} min • {genres} • {movie.release_date}
                        </h4>
                    </div>
                </div>
                <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
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
            {/* lg sizes */}
            <div className='relative hidden w-full lg:block' style={{height:"30rem"}}>
                <div className='absolute z-10 w-full h-full ' style={{
                    backgroundImage:  "linear-gradient(90deg, rgb(34, 34, 34) 14.95%, rgba(34, 34, 34) 30.3%, rgba(34, 34, 34, 0.90) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)",
                }}/>
                <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
                    <div className='w-64 h-96'>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" className='w-full h-full rounded-lg'/>
                    </div>
                    <div>
                        <MovieInfo movie={movie} />
                    </div>
                </div>
                <img 
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="Backdrop Poster"
                    className='w-full h-full object-cover object-center'/>
            </div>
        </div>
    </> 
)
}

export default MovieHero