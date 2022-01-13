import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) =>{
  return(
  <Box my={4}>
    <NextLink href="/projects">
      <Link>Projects</Link>
    </NextLink>
  <span>
    &nbsp;
    <ChevronRightIcon/>
    &nbsp;
  </span>
  <Heading display="inline" fontSize={20}>
    {children}
  </Heading>
  </Box>
  )
}

export const ProjectImage = ({src, alt}) =>{
  return(
    <Box bg={useColorModeValue("#1d2021","#fbf1c7")} borderRadius={5}>

      <Image 
      my={8} 
      src={src} 
      alt={alt}
      borderStyle="solid"
      borderColor={useColorModeValue("#1d2021","#fbf1c7")}
      borderWidth={2}
      borderRadius={10}
      w="full" />
    </Box>
  )
}

export const MetaData = ({children}) => {
  return (
    <Badge colorScheme="teal" mr={2}>
      {children}
    </Badge>
    )
}