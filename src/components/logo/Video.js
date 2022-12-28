import React from 'react'
import videoLogo from '../videoSrc/AnimLogoAE.mp4'
import './Video.scss'

function Video() {
  return (
    <>
      <video className='video' src={videoLogo} autoPlay  muted/>
    </>
  )
}

export default Video