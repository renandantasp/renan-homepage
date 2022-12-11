import { Title, ProjectImage, MetaData } from '../../components/project'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalImage } from '../../components/modal'




const Project = () =>{
  return (
    <Container>
      <Title>Kodama <Badge>2022-</Badge></Title>
      <P>
        Track games you've played, save those you want to play, tell your friends what's good
      </P>
      <P>
        The primary idea of Kodama is building a frontend application that emulates a social media platform with features similar to 
        Letterboxd and a UI/UX similar to RAWG, utilizing the RAWG and HLTB APIs. 
      </P>
      <P>
        There's a future idea about evolving Kodama to a fullstack application to persist data and to be actually useful and not just a 
        frontend side project without any real application, but this is a future topic. 

      </P>
      <List my={4} ml={5}>
      <ListItem>
          {/* <MetaData>website</MetaData> Not hosted yet */}
          <MetaData>website</MetaData> <Link isExternal={true} href="https://kodama.vercel.app"> Kodama <ExternalLinkIcon/></Link>
        </ListItem>
        <ListItem>
          <MetaData>stack</MetaData> Vite, React, TypeScript, Tailwind, Cypress
        </ListItem>
        <ListItem>
          <MetaData>platform</MetaData> Web
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/Kodama"> Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      
      <ModalImage src="/images/kodama-scsht.png" alt="Kodama Screenshot" />
    </Container>
  );
}

export default Project