import React , {useEffect, useState} from 'react';
import axios from 'axios';
//components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import HeroCarsouel from '../components/HeroCarousel/HeroCarousel.Component';
//layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout';


const HomePage = () => {
    const[recommandedMovies, setRecommandedMovies] = useState([]);
    const[premierMovies, setPremierMovies] = useState([]);
    const[onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    
    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommandedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    } , []); 

    useEffect(() => {
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    } , []);

    useEffect(() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    } , []);

    return (
    <>
        <HeroCarsouel/>
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
                The best of Entertainment
            </h1>
            <EntertainmentCardSlider/>
        </div>
        <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider title="Recommanded Movies" 
            subject ="List of recommanded movies"
            posters ={recommandedMovies}
            isDark ={false}/>  
        </div>
        <div className="bg-premier-800 py-12">
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <div className="hidden md:flex">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-full"/>
                </div>
                <PosterSlider title="Premiers"
                subtitle = "Brand New release every Friday"
                posters ={premierMovies}
                isDark ={true}/>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <PosterSlider title="Online Streaming Events"
                subtitle = "Best of events streaming online"
                posters ={onlineStreamEvents}
                isDark ={true}/>
            </div>
        </div>
    </>
    )

}

export default DefaultLayoutHoc(HomePage)