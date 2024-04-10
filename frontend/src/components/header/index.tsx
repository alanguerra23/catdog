import { Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import Cadastrar from "../cadastrar";
import Login from "../login";

export function HeaderPage() {
    return (
        <Flex
            maxWidth={1100}
            margin='auto'
            justifyContent={'space-between'}
            marginTop={5}>
            <Link href="/">PetShop</Link>
            <Flex alignItems='center' gap={5}>
                <Login />
                <Cadastrar/>
                <form method="GET" action="">
                    <Input type="search" name="q" placeholder="Pesquise por raça" />
                </form>
            </Flex>

        </Flex>
    )
}