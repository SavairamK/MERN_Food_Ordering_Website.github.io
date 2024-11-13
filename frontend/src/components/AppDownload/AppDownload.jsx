import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <>
    <div className="app-download" id='app-download'>
        <p className="">
            For Better Experience Download <br />Tomato App
        </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" className="" />
            <img src={assets.app_store} alt="" className="" />
        </div>
    </div>
    </>
  )
}

export default AppDownload
