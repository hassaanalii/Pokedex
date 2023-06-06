import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { Box } from '@mui/system'

export default function Pokemons() {
  const [pokemonData,setPokemonData] = useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((response)=>{
      if(response.status >=200 && response.status <300){
        const {results} = response.data
        
        let myPokemonData = []

        results.forEach((element,index) => {
          index++
          let myObjPok ={
            id: index,
            name:element.name,
            url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+index+'.png'
          }
          myPokemonData.push(myObjPok)  
        });
        setPokemonData(myPokemonData);
        
      }
    })
  },[])
  return (
    <Box >
      {pokemonData ? (
        <Grid style={{marginTop:100}} container spacing={2}>
          {pokemonData.map((ele)=>{
               return (
                <PokemonCard pokemon={ele}/>
              )
          })}

        </Grid>

      ) : (
        <h1>Error</h1>
      )}
    </Box>
    // <div style={{marginTop:"10%"}}>
    //     {pokemonData ? pokemonData.map((ele)=>{
    //       return (
    //         <PokemonCard pokemon={ele}/>
    //       )
    //     }) : <h1>Error Loading Data</h1>}
    // </div>
  )
}
