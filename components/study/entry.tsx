import { Box, Container } from '@chakra-ui/react';
import { NounEntry } from '../../interfaces';
import { StudyTable } from './table';

const StudySelectedCategory = ({
  categoryName,
  list,
}: {
  categoryName: string;
  list: NounEntry[];
}) => {
  return (
    <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
      <Box textColor={'#1d1d1d'} mt={'64px'} mb={'48px'} px={{ base: 8, lg: 0 }}>
        <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Currently Studying {categoryName}
        </Box>
      </Box>

      <Container maxWidth={{ base: '100%', lg: '80%', xl: '70%' }} mb={'3rem'}>
        <StudyTable entryList={list} />
      </Container>
    </Container>
  );
};

export default StudySelectedCategory;
