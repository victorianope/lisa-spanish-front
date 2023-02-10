import { Box } from '@chakra-ui/react';

import Layout from '../../components/elements/Layout';
import StudyHome from '../../components/study';

const StudyRandomPage = () => (
  <Box bgColor={'#c7e1d9'}>
    <Layout title="Study / Lisa's Handbook" showFooter>
      <StudyHome />
    </Layout>
  </Box>
);

export default StudyRandomPage;
