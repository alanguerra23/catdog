'use client'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import { theme } from '../styles/theme'
import { HeaderPage } from '../components/header'
import Menu from '../components/menu'
import Footer from '@app/components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <HeaderPage/>
          <Menu/>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}
