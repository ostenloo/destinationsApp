import { DestinationCard, Navbar } from '../components/components.js'

import { Destinations } from '../assets/destinations.js'

import styles from '../styles/Home.module.css'

import Head from 'next/head'

import {useState, useEffect} from 'react' 

export default function Home() {
  const [displayFavorites, setDisplayFavorites] = useState(typeof window !== 'undefined' ? localStorage.getItem('favorites') === 'true' : false)
  const [count, setCount] = useState(0) 

  // hasMounted is needed for hydration https://www.joshwcomeau.com/react/the-perils-of-rehydration/
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => { 
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if(count !== 0)
    {
        localStorage.setItem('favorites', displayFavorites)
    }
    setCount(count + 1) 
  }, [displayFavorites])

  if(!hasMounted)
  {
    return null; 
  }

  return (
    <>
    <Head> 
        <title> Destinations </title> 
    </Head> 
    <div> 
      <Navbar displayFavorites = {displayFavorites}
              setDisplayFavorites = {setDisplayFavorites} /> 
      <div className = {styles.main} > 
        { 
          Destinations.map((destination,index) => (
          <div className = {displayFavorites && localStorage.getItem(destination.alt) !== 'true' ? `${styles.hidden}` : `${styles.card}`} key = {index}>
            <DestinationCard {...destination} /> 
          </div> 
        ))}
      </div> 
    </div> 
    </>
  )
}
