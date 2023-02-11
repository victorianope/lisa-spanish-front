import { useState } from 'react';

import {
  Icon,
  Table,
  Text,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  Flex,
  Box,
} from '@chakra-ui/react';

import { NounEntry } from '../../interfaces';
import { mdiCommentCheck, mdiCommentRemove } from '@mdi/js';

export const StudyTable = ({ entryList }: { entryList: NounEntry[] }) => {
  const [currPage, setCurrPage] = useState<number>(0);

  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>German</Th>
              <Th>English</Th>
              <Th>Spanish</Th>
              <Th>Type</Th>
              <Th>Tags</Th>
              <Th>Tip</Th>
            </Tr>
          </Thead>
          <Tbody>
            {entryList.slice(0 + 10 * currPage, 10 * (currPage + 1)).map(item => {
              return (
                <Tr>
                  <Td>{item.german}</Td>
                  <Td>{item.english}</Td>
                  <Td>{item.spanish}</Td>
                  <Td>{item.type}</Td>
                  <Td>{item.tags.join(', ')}</Td>
                  <Td>
                    {item.tip ? (
                      <Tooltip label={item.tip} fontWeight={300}>
                        <Icon path={mdiCommentCheck} />
                      </Tooltip>
                    ) : (
                      <Icon path={mdiCommentRemove} cursor={'not-allowed'} />
                    )}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent={'center'}>
        <Text mt={4} fontSize={'16px'} fontWeight={300} textColor={'black'}>
          {entryList.length === 0 ? 'No results were found' : `Found ${entryList.length} result(s)`}
        </Text>
      </Flex>
    </Box>
  );
};
