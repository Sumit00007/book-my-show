import React , {useState} from 'react';
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
                subject = "Brand New release every Friday"
                posters ={premierMovies}
                isDark ={true}/>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <PosterSlider title="Online Streaming Events"
                subject = "Best of events streaming online"
                posters ={onlineStreamEvents}
                isDark ={true}/>
            </div>
        </div>
    </>
    )

}

export default DefaultLayoutHoc(HomePage)