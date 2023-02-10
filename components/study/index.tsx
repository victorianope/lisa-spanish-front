import { Box, Container, Text, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { NOUN_ENTRIES } from '../../data/noun_entries';
import { TAG_ENTRIES } from '../../data/tag_entries';
import { VERB_ENTRIES } from '../../data/verb_entries';

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
      <Box textColor={'#1d1d1d'} my={'128px'} px={{ base: 8, lg: 0 }}>
        <Box as={'span'} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Study
        </Box>
      </Box>

      <Container maxWidth={{ base: '100%', lg: '80%', xl: '60%' }}>
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
                  cursor={'pointer'}
                  onClick={() => Router.push(`/study/${tagItem.title.toLocaleLowerCase()}`)}
                >
                  <Box
                    key={tagIndex}
                    borderRadius={'14px'}
                    bgColor={'#38A169'}
                    textColor={'white'}
                    fontSize={'24px'}
                    px={4}
                    py={1}
                  >
                    {tagItem.title}
                  </Box>
                </WrapItem>
              );
            })}
        </Wrap>
      </Container>
    </Container>
  );
};

export default StudyHome;
