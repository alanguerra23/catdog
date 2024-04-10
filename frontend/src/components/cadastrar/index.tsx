import { Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Link } from "@chakra-ui/react"

export default function Cadastrar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Text onClick={onOpen} cursor={'pointer'}>Cadastrar</Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        <Text>Nome</Text>
                        <Input type={'text'} placeholder="Digite seu nome" />
                        <Text>E-mail</Text>
                        <Input type={'text'} placeholder="Digite seu email" />
                        <Text>Senha</Text>
                        <Input type={'password'} placeholder="Digite sua senha" />
                        <Text>WhtasApp</Text>
                        <Input type={'number'} placeholder="Digite seu whatsApp" />
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={'#F2BF01'}>Cadastrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}