import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card' 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

import HeartUnselected from '../assets/heartUnselected.png'
import HeartSelected from '../assets/heartSelected.png'

import styles from '../styles/Home.module.css'

const DestinationCard = ( { image, alt, title, description } ) => {
  const [isFavorite, setIsFavorite] = useState(typeof window !== 'undefined' ? localStorage.getItem(alt) === 'true' : false) 
  const [count, setCount] = useState(0) 

  useEffect(() => {
    if(count !== 0)
    {
        localStorage.setItem(alt, isFavorite)
    }
    setCount(count + 1) 
  }, [isFavorite])

  return (
    <Card sx={{ maxWidth: 345 }}>
        <div className = { styles.heart }> 
            <Image src = { isFavorite === true ? HeartSelected : HeartUnselected}
                alt = "heart"
                height = "30px"
                width = "30px"
                onClick = {() => setIsFavorite(!isFavorite)}
            />
        </div> 
        <Image 
            src = { image }
            alt = { alt }
            height = "300px"
            width = "345px"
        /> 
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                { title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                { description }
            </Typography>
        </CardContent>
    </Card> 
  )
}

export default DestinationCard