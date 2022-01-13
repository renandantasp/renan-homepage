import NextLink from 'next/link'
import { Box, Heading, Image, Text, LinkBox, LinkOverlay, Button } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/projects/${id}`} >
      
      <LinkBox cursor="pointer" >
        <Image 
        src={thumbnail}
        alt={title}
        borderRadius={10}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Heading mt={2}
          fontSize="24" 
          >{title}</Heading>
        </LinkOverlay>
        <Text fontsize="14">{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

