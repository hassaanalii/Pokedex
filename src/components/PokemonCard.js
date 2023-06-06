import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard(props) {
    const {pokemon} = props
    const {id,name,url} = pokemon
  return (
    
    <Grid item xs={12} sm={4} key={id}>
      <Link to={"/pokemon/" + id}>
              <Card style={{marginTop:0, cursor:"pointer", backgroundColor:"#9AC1BA",}} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#B3D0CB")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#9AC1BA")}>
                <CardMedia style={{margin:"auto", width:150, height:150}} image={url}></CardMedia>
                <CardContent style={{textAlign:"center",}}>
                  <Typography style={{fontSize:20}}>
                    {name}
                  </Typography>
                  
                </CardContent>
              </Card>
      </Link>

    </Grid>
    
  )
}
