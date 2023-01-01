import { Title, ProjectImage, MetaData } from '../../components/project'
import { ModalImage } from '../../components/modal'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Project = () =>{
  return (
    <Container>
      <Title>DEX <Badge>2021-</Badge></Title>
      <P>
        A Pokédex application for visualizing pokémon's stats, types and weaknesses with 
        data fetched from the <Link isExternal={true} href="https://pokeapi.co/">PokéAPI</Link>. 
        A WIP study project.
      </P>
      <List my={4} ml={5}>
        <ListItem>
          <MetaData>website</MetaData> <Link isExternal={true} href="https://pokedexdex.vercel.app/"> Pokedexdex <ExternalLinkIcon/></Link>
        </ListItem>
        <ListItem>
          <MetaData>stack</MetaData> Vue.js, Nuxt.js, Sass, TailwindCSS
        </ListItem>
        <ListItem>
          <MetaData>platform</MetaData> Web
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/pokedex">Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      <ModalImage src="/images/pokedex1.png" alt="DEX Home" />
      <ModalImage src="/images/pokedex2.png" alt="DEX Pokémon Page" />
    </Container>
  );
}

export default Project