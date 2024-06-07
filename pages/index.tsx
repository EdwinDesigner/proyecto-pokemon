import type { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from '../api';
import { PokemonsListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

    return (
        <Layout title="Listado de Pokémons">
            <Grid.Container gap={ 2 } justify='flex-start'>
                {
                    pokemons && pokemons.map( pokemon => (
                        <PokemonCard
                            key={ pokemon.id }
                            pokemon={ pokemon }
                        />
                    ))
                }
            </Grid.Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=1001');

    const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
    }))

    return {
        props: {
            pokemons
        }
    }
}

export default HomePage
