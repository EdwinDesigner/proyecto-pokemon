import Image from "next/image";
import { Spacer, Text, useTheme } from "@nextui-org/react"
import Link from "next/link";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: "flex",
            width: '100%',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0px 20px",
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Link
                href='/'
                style={{
                    display: "flex",
                }}
            >
                <Image
                    width={ 70 }
                    height={ 70 }
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="Icon App"
                />

                <Text color="white" h2>P</Text>
                <Text color="white" h3>okemón</Text>
            </Link>

            <Spacer css={{ flex: 1}} />

            <Link href="/favorites">
                <Text color="white">Favoritos</Text>
            </Link>
        </div>
    )
}
