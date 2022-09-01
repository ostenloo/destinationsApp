import React from 'react'
import Card from '@mui/material/Card' 
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

const DestinationCard = ( { image, alt, title, description } ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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