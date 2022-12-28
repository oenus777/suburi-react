import * as React from 'react'

import AppBar from './AppBar'
import MainContent from './MainContent'
import Footer from './Footer'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react'


export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Container maxW='100%' maxH='100%' p='0'>
        <AppBar />
        <MainContent />
        <Footer />
      </Container>
    </ChakraProvider>
  )
}