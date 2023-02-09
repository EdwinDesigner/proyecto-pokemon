import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
    children: JSX.Element,
    title?: string
}

export const Layout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{ title || "Pokémon App" }</title>
                <meta name="author" content="Edwin Hernández" />
                <meta name="description" content={`Información sobre el pokémon ${ title }`} />
                <meta name="keywords" content={`${ title }, pokémon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}