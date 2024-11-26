import React from 'react'
import wallpaper from '../../assets/img-awp.avif'
import icono from '../../assets/iconoapp.png'

const Card = () => {
  return (
    <>
        <div id='contentCard' className='flex flex-col w-52 justify-center items-center'>
            <img className='w-5/6 rounded' src={wallpaper} alt="imagen pwa" />
            <div className='flex items-center space-x-2 w-full'>
                <img className='ml-4 w-10 h-10' src={icono} alt="icono pwa" />
                <div className='flex flex-col'>
                    <p className='text-sm truncate w-28'>Red social a tu alcance</p>
                    <p className='text-xs'>Redes sociales</p>
                    <p className='text-xs'>4</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card