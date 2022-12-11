import { Title, ProjectImage, MetaData } from '../../components/project'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalImage } from '../../components/modal'




const Project = () =>{
  return (
    <Container>
      <Title>DnD Language <Badge>2021</Badge></Title>
      <P>
        The DnD Language registers the player's spells with attributes referring to the
        rules of the tabletop RPG Dungeons and Dragons 5e, and also contains a simples system of creating 
        new attributes to create a broader flexibility in terms of customization to the original rules of the game.
      </P>
      <List my={4} ml={5}>
        <ListItem>
          <MetaData>stack</MetaData> Python, Antlr4
        </ListItem>
        <ListItem>
          <MetaData>platform</MetaData> Linux
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/compiladores/tree/main/trabalho-4"> Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      
      <ModalImage src="/images/dnd.png" alt="Spell Screenshot" />
    </Container>
  );
}

export default Project