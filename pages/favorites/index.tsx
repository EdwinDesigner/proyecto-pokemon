import { NoFavorites } from '@/components/ui';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';

const FavoritesPage: NextPage = () => {
    return (
        <Layout title='Pokémons Favoritos'>
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage