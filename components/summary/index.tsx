import {
  Box,
  Container,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../elements/Layout';

export interface SummaryInterface {
  english: string;
  german: string;
}

const PrintableSummary = ({ entries }: { entries: SummaryInterface[] }) => (
  <TableContainer overflowX={'hidden'}>
    <Table size="sm">
      <Thead>
        <Tr>
          <Th textAlign={'center'}>English</Th>
          <Th textAlign={'center'}>German</Th>
        </Tr>
      </Thead>
      <Tbody>
        {entries.map((entryItem, entryKey) => {
          return (
            <Tr key={entryKey}>
              <Td>{entryItem.english}</Td>
              <Td>{entryItem.german}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  </TableContainer>
);

const Summary = () => {
  const [summaryText, setSummaryText] = useState('');
  const [separator, setSeparator] = useState(',');
  const [parsedText, setParsedText] = useState<SummaryInterface[]>([]);

  if (parsedText.length !== 0) {
    return <PrintableSummary entries={parsedText} />;
  }

  return (
    <Box bgColor={'#c7e1d9'}>
      <Layout title="Summary / Lisa's Handbook" showFooter>
        <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
          <Box textColor={'#1d1d1d'} mt={'64px'} mb={'64px'} px={{ base: 8, lg: 0 }}>
            <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
              Create Summary
            </Box>
          </Box>

          <Text fontSize={'48px'} fontWeight={600} mb={8}>
            Insert the text following the structure
          </Text>
          <Container maxWidth={{ base: '100%', lg: '80%', xl: '60%' }}>
            <Flex mb={'1rem'} alignItems={'center'} columnGap={4}>
              <Text fontSize={'18px'} fontWeight={300}>
                Separator to use:
              </Text>
              <Input
                value={separator}
                onChange={e => setSeparator(e.target.value)}
                maxW={'50px'}
                bgColor={'#F6FFF8'}
                textColor={'black'}
                fontWeight={700}
              />
            </Flex>
            <Textarea
              bgColor={'#F6FFF8'}
              placeholder={`meaning${separator}bedeutung\nanother phrase${separator}ein anderer Satz`}
              onChange={e => setSummaryText(e.target.value)}
              value={summaryText}
              minH={'30vh'}
            />
            <Flex justifyContent={'center'} my={'3rem'}>
              <Box
                onClick={() => {
                  setParsedText(
                    summaryText.split('\n').map(summaryTextItem => {
                      const separatedText = summaryTextItem.split(separator);
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
                Show
              </Box>
            </Flex>
          </Container>
        </Container>
      </Layout>
    </Box>
  );
};

export default Summary;
