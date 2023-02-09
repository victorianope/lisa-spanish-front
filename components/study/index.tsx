import studyImage from '/public/static/home/study.png';

import { Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import TestCard from '../home/testcard';

const StudyHome = () => {
  return (
    <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
      <Box textColor={'#1d1d1d'} my={'128px'} px={{ base: 8, lg: 0 }}>
        <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Study
        </Box>
      </Box>

      <Text fontSize={'48px'} fontWeight={600} mb={8}>
        Resources
      </Text>
      <Grid
        templateRows={{ base: 'repeat(2, 1fr)', xl: 'repeat(1, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}
        rowGap={8}
        mb={8}
      >
        <GridItem rowStart={1} rowEnd={2} colStart={1} colEnd={2}>
          <Flex justifyContent={{ base: 'center', lg: 'start' }}>
            <TestCard title={'Study'} image={studyImage.src} link={'/study'} />
          </Flex>
        </GridItem>
        <GridItem
          rowStart={{ base: 2, xl: 1 }}
          rowEnd={{ base: 3, xl: 2 }}
          colStart={{ base: 1, xl: 2 }}
          colEnd={{ base: 2, xl: 3 }}
        >
          <Flex justifyContent={{ base: 'center', lg: 'end' }}>
            <TestCard title={'Tests'} image={studyImage.src} link={'/tests'} />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default StudyHome;
