import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async ( param: string ) => {

    const { data: { id, name: namePokemon, sprites } } = await pokeApi.get<Pokemon>(`/pokemon/${ param }`);

    return {
        id,
        name: namePokemon,
        sprites
    }
}