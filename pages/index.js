import { DestinationCard, Navbar } from '../components/components.js'

import { Destinations } from '../assets/destinations.js'

import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head> 
        <title> Destinations </title> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Yellowtail&display=swap" rel="stylesheet" />
    </Head> 
    <div> 
      <Navbar /> 
      <div className = {styles.main} > 
        { Destinations.map( (destination,index) => (
          <div className = {`${styles.card}`}>
            <DestinationCard {...destination} /> 
          </div> 
        ))}
      </div> 
    </div> 
    </>
  )
}
