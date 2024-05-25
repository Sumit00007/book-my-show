import React from 'react';
import DefaultLayoutHoc from '../layout/Default.layout';


import Poster from '../components/Poster/Poster.Component';
import PlaysFilter from '../components/PlayFilters/PlayFilter.Component';

const PlayPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Plays in NCR Delhi</h2>
            <div className='flex flex-wrap'>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                isPlay ={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg"
                title='Kisi Ko Batana Mat ft- Anubhav Singh Bassi'
                subtitle='Hindi'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                isPlay ={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg"
                title='Kisi Ko Batana Mat ft- Anubhav Singh Bassi'
                subtitle='Hindi'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                isPlay ={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg"
                title='Kisi Ko Batana Mat ft- Anubhav Singh Bassi'
                subtitle='Hindi'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                isPlay ={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg"
                title='Kisi Ko Batana Mat ft- Anubhav Singh Bassi'
                subtitle='Hindi'
                />
              </div>
              <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                <Poster 
                isPlay ={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-ft-anubhav-singh-bassi-0-2023-7-25-t-16-3-33.jpg"
                title='Kisi Ko Batana Mat ft- Anubhav Singh Bassi'
                subtitle='Hindi'
                />
              </div>
            </div>
          </div>
          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <div>
              <PlaysFilter title='Date' tags={['Today', 'Tomorrow', 'This Weekend']}/>
              <PlaysFilter title='Language' tags={['Tamil', 'Hindi', 'English']}/>
              <PlaysFilter title='Categories' tags={['Theatre']}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayoutHoc(PlayPage)