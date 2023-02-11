import { Box, Container, Text, Flex, Wrap, WrapItem, Tooltip, Input } from '@chakra-ui/react';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { NOUN_ENTRIES } from '../../data/noun_entries';
import { TAG_ENTRIES } from '../../data/tag_entries';
import { VERB_ENTRIES } from '../../data/verb_entries';
import { StudyTable } from './table';

const StudyHomeFilterButton = ({
  title,
  active,
  onClick,
}: {
  title: string;
  active: boolean;
  onClick: () => void;
}) => (
  <Box
    onClick={onClick}
    bgColor={active ? '#7DD181' : '#4B7F52'}
    textColor={'white'}
    px={8}
    py={2}
    borderRadius={'14px'}
    fontSize={'18px'}
    fontWeight={500}
    cursor={'pointer'}
    textDecor={active ? 'underline' : 'unset'}
    textUnderlineOffset={'4px'}
    _hover={{ bgColor: '#7DD181' }}
  >
    {title}
  </Box>
);

const StudyHome = () => {
  const [tagList, setTagList] = useState<{ title: string; amount: number }[]>([]);
  const [useAlphabeticalOrder, setUseAlphabeticalOrder] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const tempList = TAG_ENTRIES.map(item => {
      return {
        title: item,
        amount: NOUN_ENTRIES.filter(nounItem => nounItem.tags.includes(item)).length,
      };
    });
    if (VERB_ENTRIES.length !== 0) {
      tempList.push({ title: 'Verbs', amount: VERB_ENTRIES.length });
    }
    setTagList(tempList);
  }, []);

  return (
    <Container maxWidth={{ base: '100%', lg: '90%', xl: '85%' }}>
      <Box textColor={'#1d1d1d'} mt={'64px'} mb={'48px'} px={{ base: 8, lg: 0 }}>
        <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Study
        </Box>
      </Box>

      <Container maxWidth={{ base: '100%', lg: '80%', xl: '70%' }}>
        <Box mb={'3rem'}>
          <Input
            fontSize={'18px'}
            fontWeight={300}
            textColor={'black'}
            _placeholder={{ textColor: 'black', fontWeight: 300 }}
            bgColor={'#95D5B2'}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={'Try searching for any word...'}
            mb={'1.5rem'}
          />
          {searchQuery.length >= 2 && (
            <StudyTable
              entryList={NOUN_ENTRIES.filter(
                nounEntry =>
                  nounEntry.english.includes(searchQuery) ||
                  nounEntry.spanish.includes(searchQuery) ||
                  nounEntry.german.includes(searchQuery)
              )}
            />
          )}
        </Box>
        {searchQuery.length < 2 && (
          <Box>
            <Flex
              marginBottom={'3rem'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              fontWeight={700}
            >
              <Text textColor={'black'} fontSize={'24px'}>
                Order by
              </Text>
              <Flex columnGap={4}>
                <StudyHomeFilterButton
                  title="Name"
                  active={useAlphabeticalOrder}
                  onClick={() => {
                    setUseAlphabeticalOrder(true);
                  }}
                />
                <StudyHomeFilterButton
                  title="Amount"
                  active={!useAlphabeticalOrder}
                  onClick={() => {
                    setUseAlphabeticalOrder(false);
                  }}
                />
              </Flex>
            </Flex>
            <Wrap gap={4} mb={8} justify={'center'}>
              {tagList
                .sort((a, b) => {
                  return useAlphabeticalOrder ? (b.title > a.title ? -1 : 1) : b.amount - a.amount;
                })
                .map((tagItem, tagIndex) => {
                  return (
                    <WrapItem
                      cursor={tagItem.amount !== 0 ? 'pointer' : 'not-allowed'}
                      onClick={() => {
                        if (tagItem.amount === 0) return;
                        Router.push(`/study/${tagItem.title.toLocaleLowerCase()}`);
                      }}
                    >
                      <Tooltip label={`${tagItem.amount} word${tagItem.amount !== 1 ? 's' : ''}`}>
                        <Box
                          key={tagIndex}
                          borderRadius={'14px'}
                          bgColor={'#38A169'}
                          textColor={'white'}
                          fontSize={'20px'}
                          fontWeight={300}
                          px={4}
                          py={1}
                        >
                          {tagItem.title}
                        </Box>
                      </Tooltip>
                    </WrapItem>
                  );
                })}
            </Wrap>
          </Box>
        )}
      </Container>
    </Container>
  );
};

export default StudyHome;
