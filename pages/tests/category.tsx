import { Box } from '@chakra-ui/react';

import Layout from '../../components/elements/Layout';
import Home from '../../components/home';

const TestCategoryPage = () => (
  <Box bgColor={'#c7e1d9'}>
    <Layout title="Tests / Lisa's Handbook" showFooter>
      <Home />
    </Layout>
  </Box>
);

export default TestCategoryPage;
