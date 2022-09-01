import React from 'react'

import styles from '../styles/Home.module.css'

import Airplane from '../assets/airplane.png'

import Image from 'next/image'

const Navbar = () => {
  return (
    <div className = {styles.navbar}>
       <div className = {styles.logo}>
            <Image 
                src = { Airplane }
                alt = "airplane"
                height = "80px"
                width = "80px"
            /> 
            Destinations
       </div> 
    </div>
  )
}

export default Navbar