import React from 'react'

import styles from '../styles/Home.module.css'

import Airplane from '../assets/airplane.png'
import HeartSelected from '../assets/heartSelected.png'
import HeartUnselected from '../assets/heartUnselected.png'

import Image from 'next/image'

const Navbar = ({displayFavorites, setDisplayFavorites}) => {
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
      <div className = {styles.favorite}>
        <Image 
            src = { displayFavorites === true ? HeartSelected : HeartUnselected }
            alt = "heart"
            height = "50px"
            width = "50px"
            onClick = {() => setDisplayFavorites(!displayFavorites)}
        /> 
      </div>
    </div>
  )
}

export default Navbar