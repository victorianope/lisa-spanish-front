import { Box } from '@chakra-ui/react';

import Layout from '../../components/elements/Layout';
import Home from '../../components/home';

const RandomTestPage = () => (
  <Box bgColor={'#c7e1d9'}>
    <Layout title="Tests / Lisa's Handbook" showFooter>
      <Home />
    </Layout>
  </Box>
);

export default RandomTestPage;
