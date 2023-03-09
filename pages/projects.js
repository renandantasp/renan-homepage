import { Box, Container, Heading, SimpleGrid, Grid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'



const Project = () => {
  return (
    <Container>
      <Heading as="h3" mb={4} mt={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem id="dailyhub" title="Dailyhub" thumbnail="/images/thumb-dailyhub.png">
          A Twitter-like platform made with the MERN Stack.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="kodama" title="Kodama" thumbnail="/images/thumb-kodama.png">
          A Social platform for sharing, discussing and discover new games.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pokedex" title="DEX" thumbnail="/images/thumb-pokedex.png">
          A Pokédex application built with Vue.js with data fetched from the PokéApi.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="portfolio" title="Portfolio" thumbnail="/images/thumb-portfolio.png">
          My personal portfolio built with React.js, Chakra UI, Next.js and Framer Motion.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="dnd" title="DnD Language" thumbnail="/images/thumb-dnd.png">
          A DnD Markup Language that creates web pages for DnD spells built with antlr4.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="topic_classification" title="Topic Classification" thumbnail="/images/thumb-topic.png">
          A Machine Learning application for topic classification and sentiment analysis for refrigerators reviews.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Project