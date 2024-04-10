import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Menu(){
    return(
        <Flex
            bg={'#F2BF01'}
            justifyContent='space-around'
            alignItems='center'
            fontWeight={'bold'}
            color='#1b1b1bcc'
            marginTop={3}
            h={10}>
            <Link href='/'>Todos</Link>
            <Link href='/cats'> <Flex alignItems={'center'}><img width={'35px'} src="/images/cat.png" alt="cat" /> Gatos</Flex></Link>
            <Link href='/dogs'> <Flex alignItems={'center'}><img width={'35px'} src="/images/dog.png" alt="cat" /> Cachorros</Flex></Link>
        </Flex>
    )
}