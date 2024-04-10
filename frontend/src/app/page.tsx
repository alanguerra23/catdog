"use client"
import Menu from "@app/components/menu";
import { Heading } from "@chakra-ui/react";
import Card from "../components/card";

export default function Home() {
  return (
    <main>
      <Heading as={'h1'} textAlign={'center'} marginTop={5} marginBottom={5}>
        Todos os animais disponíveis para adoção
      </Heading>
      <Card />
    </main>
  )
}
