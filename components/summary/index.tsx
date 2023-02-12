import { Box, Button, Container, Flex, Icon, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import { mdiHeart } from '@mdi/js';
import { useState } from 'react';

interface SummaryInterface {
  english: string;
  german: string;
}

const Summary = () => {
  const [summaryText, setSummaryText] = useState('');
  const [parsedText, setParsedText] = useState<SummaryInterface[]>([]);

  return (
    <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
      <Box textColor={'#1d1d1d'} mt={'64px'} mb={'64px'} px={{ base: 8, lg: 0 }}>
        <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Create Summary
        </Box>
      </Box>

      {parsedText.length !== 0 && (
        <Box>
          <Box></Box>
        </Box>
      )}

      <Text fontSize={'48px'} fontWeight={600} mb={8}>
        Insert the text following the structure
      </Text>
      <Container maxWidth={{ base: '100%', lg: '80%', xl: '60%' }}>
        <Textarea
          bgColor={'#F6FFF8'}
          placeholder={`meaning;bedeutung
another phrase;ein anderer Satz`}
          onChange={e => setSummaryText(e.target.value)}
          value={summaryText}
          minH={'30vh'}
        />
        <Flex justifyContent={'center'} my={'3rem'}>
          <Box
            onClick={() => {
              setParsedText(
                summaryText.split('\n').map(summaryTextItem => {
                  const separatedText = summaryTextItem.split(',');
                  return { english: separatedText[0], german: separatedText[1] };
                })
              );
            }}
            bgColor={'#7DD181'}
            textColor={'white'}
            px={8}
            py={2}
            borderRadius={'14px'}
            fontSize={'18px'}
            fontWeight={500}
            cursor={'pointer'}
            _hover={{ bgColor: '#7DD181' }}
          >
            Send
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default Summary;
