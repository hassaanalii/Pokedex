import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Grid } from '@mui/material'


export default function AppNavigator() {
  return (
    <div>
        <AppBar style={{backgroundColor:"black"}} position='fixed'>
            <Toolbar>
                <Link to="/" style={{borderWidth:2, borderColor:"white", textDecoration:"none"}}>
                    <Typography style={{color:"white"}}>Pokedex</Typography>
                </Link>
                <Link to="/ac" style={{borderWidth:2, borderColor:"white", textDecoration:"none",marginLeft:20 }}>
                    <Typography style={{color:"white"}}>Favourites</Typography>
                </Link>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}
