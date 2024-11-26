import React from 'react'
import Searchbar from '../components/Home/Searchbar'
import Highlights from '../components/Home/Highlights'
import FieldApps from '../components/Home/FieldApps'
import AppsViewContent from '../components/AppView/AppsViewContent'

const Home = () => {
  return (
    <>
        <Searchbar />
        <Highlights />
        <FieldApps />
        <div className='w-screen bg-purple-400'>
            <span className='ml-4' >Aplicaciones</span>
        </div>
        <AppsViewContent />
        <footer className='h-5 bg-purple-400'></footer>
    </>
  )
}

export default Home