import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { NoFavorites } from '@/components/ui';
import { Layout } from '../../components/layouts';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritesPage: NextPage = () => {

    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setfavoritePokemons( localFavorites.pokemons );
    }, []);

    return (
        <Layout title='Pokémons Favoritos'>
            {
                favoritePokemons.length === 0
                    ? ( <NoFavorites /> )
                    : (
                        <FavoritePokemons pokemons={ favoritePokemons } />
                    )
            }
        </Layout>
    )
}

export default FavoritesPage