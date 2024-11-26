import React from 'react'
import AppsView from './AppsView'

const AppsViewContent = () => {
  return (
    <div className='flex bg-purple-400 flex-wrap place-content-around'>
        <AppsView />
        <AppsView />
        <AppsView />
        <AppsView />
        <AppsView />
        <AppsView />
        <AppsView />
        <AppsView />
    </div>
  )
}

export default AppsViewContent