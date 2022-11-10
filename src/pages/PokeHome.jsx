import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Skeletons } from '../components/Skeletons'
import { useParams } from "react-router-dom";
import PokemonCard2 from '../components/PokemonCard/index2'
import NavBar2 from '../components/NavBar/index2'


export const PokeHome = () => {

    const [pokemons , setPokemons] = useState([])
    const [loading , setLoading] = useState(false)
    const params = useParams();

    const getPokemons = () => {
        setLoading(true)
        let endpoints = [];
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)   

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
        <NavBar2 pokemonFilter = {pokemonFilter} />
        <Container > 
            {loading ? <Skeletons/> 
            : 
            <Box display="flex" justifyContent="center" alignContent="center" marginTop="8em">
                    {pokemons.map((pokemon, key) => {
                        return (
                        <Box width="25em" key={key}>
                            <PokemonCard2 name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} stats={pokemon.data.stats}/>
                        </Box>
                    )})}
            </Box>}
        </Container>
    </div>
    )

}
