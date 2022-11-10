import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Skeletons } from '../components/Skeletons'

const Home = () => {
    const [pokemons , setPokemons] = useState([])
    const [loading , setLoading] = useState(false)

    const getPokemons = () => {
        setLoading(true)
        let endpoints = [];

        for (let i = 1; i < 152; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => {
            setPokemons(res)
            setLoading(false)
        })
        .catch((req) => console.log(req))
    }

    useEffect(() => {
        getPokemons()
    },[])

    const pokemonFilter = (name) => {
        let filteredPokemons = [];
        if(name === "") {
            getPokemons()
        }
        for (let i in pokemons) {
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }

  return (
    <div>
        <NavBar pokemonFilter = {pokemonFilter} />
        <Container maxWidth="xl"> 
            {loading ? <Skeletons/> 
            : 
            <Grid container spacing={2}>
                {pokemons.map((pokemon, key) => {
                    return (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={key}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} id={pokemon.data.id} />
                    </Grid>
                )})}
            </Grid>}
            
        </Container>
        
    </div>
  )
}

export default Home