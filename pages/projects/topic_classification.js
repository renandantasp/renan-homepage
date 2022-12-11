import { Title, ProjectImage, MetaData } from '../../components/project'
import { Box, Link, Container, Badge, List, ListItem } from '@chakra-ui/react'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalImage } from '../../components/modal'




const Project = () =>{
  return (
    <Container>
      <Title>Topic Classification<Badge>2020</Badge></Title>
      <P>
        A topic classification and sentiment analysis application for refrigerators reviews
        utilizing data filtering and machine learning libraries.
      </P>
      <List my={4} ml={5}>
        <ListItem>
          <MetaData>stack</MetaData> Python, Spacy, Pandas, Plotly
        </ListItem>
        <ListItem>
          <MetaData>repo</MetaData> <Link isExternal={true} href="https://github.com/renandantasp/levantamento_de_aspectos_em_reviews"> Github <ExternalLinkIcon/></Link>
        </ListItem>
      </List>
      
      <ModalImage src="/images/topic_classification.png" alt="Review Chart Screenshot" />
    </Container>
  );
}

export default Project