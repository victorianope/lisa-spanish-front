import { Box } from '@chakra-ui/react';

import Layout from '../components/elements/Layout';
import Summary from '../components/summary';

const SummaryPage = () => (
  <Box bgColor={'#c7e1d9'}>
    <Layout title="Summary / Lisa's Handbook" showFooter>
      <Summary />
    </Layout>
  </Box>
);

export default SummaryPage;
