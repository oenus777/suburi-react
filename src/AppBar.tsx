import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box, Heading, Container } from '@chakra-ui/react'

export default function AppBar() {
    return (
        <Box bg='#008080' w='100%' p={4} color='white'>
          素振React
        </Box>
    )
}