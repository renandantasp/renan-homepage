import { Title, ProjectImage, MetaData } from '../../components/project'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalImage } from '../../components/modal'




const Project = () =>{
  return (
    <Container>
      <Title>DailyHub <Badge>2023</Badge></Title>
      <P>
      A Twitter-like application with account creation, posts with images, likes, and profile pages.
      </P>
      <List my={4} ml={5}>
        <ListItem>
          <MetaData>stack</MetaData> MongoDB, Express, React, React Redux, Node
        </ListItem>
        <ListItem>
          <MetaData>platform</MetaData> Web
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/dailyhub"> Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      
      <ModalImage src="/images/dailyhub.png" alt="Dailyhub Homepage" />
    </Container>
  );
}

export default Project