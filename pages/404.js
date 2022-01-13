import NextLink from 'next/link'
import {Box, Heading, Text, Container, Divider, Button, Image } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center">
      <Image src="/images/not_found.gif" boxSize="200px" />
      <Heading mt={4}> Page Not Found </Heading>
      <Text my={3}> The page you're looking for does not exist.</Text>
      <Divider my={8} />
      <Box align="center">
        <NextLink href="/">
          <Button colorScheme="teal" >Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound