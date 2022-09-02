import { DestinationCard, Navbar } from '../components/components.js'

import { Destinations } from '../assets/destinations.js'

import styles from '../styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head> 
        <title> Destinations </title> 
    </Head> 
    <div> 
      <Navbar /> 
      <div className = {styles.main} > 
        { Destinations.map( (destination,index) => (
          <div className = {`${styles.card}`} key = {index}>
            <DestinationCard {...destination} /> 
          </div> 
        ))}
      </div> 
    </div> 
    </>
  )
}
