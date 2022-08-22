import { Container, Box, Heading, Image, Button, Link, List, ListItem, Icon, useColorModeValue, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {StatAtr, StatSec} from '../components/stats'
import { MetaData } from '../components/project'

import { ChevronRightIcon } from '@chakra-ui/icons'

import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail,
    IoLogoTwitter
} from "react-icons/io5"
import { ImLastfm } from 'react-icons/im'
const Page = () => {
    return (
        <Container>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" mt={4}>
                        Renan Dantas
                    </Heading>
                    <p>Developer</p>
                </Box>
                <Box
                flexshrink={0} 
                mt={{base:4, md:0}} 
                ml={{md: 6}} 
                align="center"
                >
                    <Image 
                    display="inline-block"
                    borderRadius="50%"
                    src="/images/pc.gif"
                    alt="Profile Image"
                    
                    /> 
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Paragraph>
                <Link href="https://github.com/renandantasp">Renan</Link> is an undergraduate computer science student based in São Carlos - SP with an interest in front-end development, currently working with Vue.js and React.js. When not coding, he really loves painting, videogames and discovering new music.
                </Paragraph>
                <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Professional Experience
                </Heading>
                <MetaData>2022-</MetaData> Junior Developer at Redação Nota 1000 <br/>

                <Heading as="h3" variant="section-title">
                    Skills
                </Heading>
                <StatAtr>
                    - React, Next <br/>
                    - Vue, Nuxt <br/>
                    - Python, Spacy, Pandas <br/>
                    - JavaScript, HTML, CSS <br/>
                    - Sass, Tailwind <br/>
                    - SQL, Mongo <br/>
                    - Flask <br/>
                    - C, C++ <br/>
                </StatAtr>
                </Section>

                <Heading as="h3" variant="section-title">
                    Meet me at
                </Heading>
                <List>
                <ListItem>
                        <Link href="mailto:renandantasp@gmail.com">
                            <Button leftIcon={<Icon as={IoMail}/>} 
                            variant="ghost"  
                            color={useColorModeValue('#b16286','#d3869b')}
                            >
                            renandantasp@gmail.com</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal={true} href="https://www.linkedin.com/in/renandnt">
                            <Button leftIcon={<Icon as={IoLogoLinkedin}/>} 
                            variant="ghost"
                            color={useColorModeValue('#b16286','#d3869b')}
                            >
                            rndnt</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal={true} href="https://github.com/renandantasp">
                            <Button leftIcon={<Icon as={IoLogoGithub}/>} 
                            variant="ghost"  
                            color={useColorModeValue('#b16286','#d3869b')}
                            >
                            renandantasp</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal={true} href="https://www.twitter.com/renan4rt">
                            <Button leftIcon={<Icon as={IoLogoTwitter}/>} 
                            variant="ghost"  
                            color={useColorModeValue('#b16286','#d3869b')}
                            >
                            renan4rt</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link isExternal={true} href="https://www.last.fm/user/enthraller_">
                            <Button leftIcon={<Icon as={ImLastfm}/>} 
                            variant="ghost"  
                            color={useColorModeValue('#b16286','#d3869b')}
                            >
                            enthraller_</Button>
                        </Link>
                    </ListItem>
                </List>



                <Box align="center">
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} 
                        color='#fbf1c7'
                        background='#b16286'> My Projects </Button>
                    </NextLink>
                </Box>

            </Section>
        </Container>
    )
}

export default Page