import * as React from 'react'

import AppBar from './AppBar'
import Footer from './Footer'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react'


export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Container maxW='100%' maxH='100%' p='0'>
        <AppBar />
        <Box m='4'>
          <Heading>TODO管理</Heading>
          作成したTODO一覧が表示されます
        </Box>
        <Footer />
      </Container>
    </ChakraProvider>
  )
}