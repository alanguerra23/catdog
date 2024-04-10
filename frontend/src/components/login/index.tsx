import { Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Link } from "@chakra-ui/react"

export default function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text onClick={onOpen} cursor={'pointer'}>Login</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        <Text>E-mail</Text>
                        <Input type={'text'} placeholder="Digite seu email" />
                        <Text marginTop={5}>Senha</Text>
                        <Input type={'password'} placeholder="Digite sua senha" />
                        <Text
                            textAlign={'end'}
                            fontSize={14} cursor={'pointer'}>
                            Ainda não tem conta? <Link color={'blue.600'}>Cadastre-se</Link>
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={'#F2BF01'}>Entrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}