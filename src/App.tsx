import * as React from 'react'

import AppBar from './AppBar'

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
        <Box bg='#d3d3d3' textAlign='center' p='6' color='white'>
          ©︎素振React
        </Box>
      </Container>
    </ChakraProvider>
  )
}