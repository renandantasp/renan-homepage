import { Title, MetaData } from '../../components/project'
import { ModalImage } from '../../components/modal'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'



const Project = ({children}) =>{
  return (
    <Container>
      <Title>Portfolio <Badge>2022</Badge></Title>
      <P>
        My personal homepage and portfolio.
      </P>
      <List my={4} ml={5}>
        <ListItem>
          <MetaData>stack</MetaData> React.js, Chakra UI, Next.js, Framer Motion
        </ListItem>
        <ListItem>
          <MetaData>platform</MetaData> Web
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/renan-homepage"> Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      
      <ModalImage
      src="/images/portfolio.png" 
      alt="Homepage" />
    </Container>
  );
}

export default Project