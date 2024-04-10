'use client'
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BsSuitHeartFill } from 'react-icons/bs';


export default function Card() {
    return (
        <Flex
            maxWidth={1100}
            margin='auto'
            justifyContent={'center'}
            gap={5}>
          
                <Box w={200}>
                    <Image borderRadius={10} src="images/zwergspitz.jpg" alt="" />
                    <Text fontWeight={'bold'}>Zwergspitz</Text>
                    <Text>Cor: Amarelo</Text>
                    <Text>Genero: Feminino</Text>
                    <Text>Idade: 1 Ano</Text>
                    <Button gap={5} w={'100%'} h={30} bg={'#5dfc72'}>
                        <Image w={6} src="images/whatsApp.png" />
                        Me adota! <BsSuitHeartFill color="red"/>
                    </Button>
                </Box>
                {/* <Box w={200}>
                    <Image borderRadius={10} src="images/pastor-alemao.jpg" />
                    <Text>Pastor-alemão</Text>
                    <Text>Cor: Amarelo e Preto</Text>
                    <Text>Gênero: Masculino</Text>
                    <Text>Idade: 2 Anos</Text>
                </Box> */}
        
        </Flex>
    )
}