import { Box, Text } from "@chakra-ui/react";

export default function Footer(){
    return(
        <Box 
            display={'flex'}
            justifyContent='center'
            alignItems={'center'}
            bg={'#F2BF01'}
            h='200'
            marginTop={30}>
            <Text textAlign={'center'}>Desenvolvedores: Igo vieira é Alan silva &copy;2023</Text>
        </Box>
    )
}