import studyImage from '/public/static/home/study.png';

import { Box, Container, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { mdiHeart } from '@mdi/js';

import TestCard from './testcard';

const Home = () => (
  <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
    <Box textColor={'#1d1d1d'} my={'128px'} px={{ base: 8, lg: 0 }}>
      <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
        Welcome again Lisa{' '}
        <Icon fontSize={52} as={'span'}>
          <path fill={'currentColor'} d={mdiHeart} />
        </Icon>
      </Box>
      <Text fontSize={42} fontWeight={500}>
        I hope this tool will help you be productive
      </Text>
      <Text fontSize={28} fontWeight={500}>
        Love you ~
      </Text>
    </Box>

    <Text fontSize={'48px'} fontWeight={600} mb={8}>
      Resources
    </Text>
    <SimpleGrid columns={{ base: 1, xl: 2 }} rowGap={8} mb={8}>
      <Flex justifyContent={{ base: 'center', lg: 'start' }}>
        <TestCard title={'Study'} image={studyImage.src} link={'/study'} />
      </Flex>
      <Flex justifyContent={{ base: 'center', lg: 'end' }}>
        <TestCard title={'Tests'} image={studyImage.src} link={'/tests'} />
      </Flex>
      <Flex justifyContent={{ base: 'center', lg: 'end' }}>
        <TestCard title={'Create Summary'} image={studyImage.src} link={'/summary'} />
      </Flex>
    </SimpleGrid>
  </Container>
);

export default Home;
