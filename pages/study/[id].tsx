import { Box } from '@chakra-ui/react';
import Router, { useRouter } from 'next/router';

import Layout from '../../components/elements/Layout';
import StudySelectedCategory from '../../components/study/entry';
import { NOUN_ENTRIES } from '../../data/noun_entries';
import { TAG_ENTRIES } from '../../data/tag_entries';

const StudySelectedCategoryPage = () => {
  const router = useRouter();

  const { id } = router.query;
  const tagName = `${(id as string)[0].toLocaleUpperCase()}${(id as string).slice(1)}`;

  if (!TAG_ENTRIES.includes(tagName)) {
    Router.push('/study');
  }

  return (
    <Box bgColor={'#c7e1d9'}>
      <Layout title={`Studying ${tagName}  / Lisa's Handbook`} showFooter>
        <StudySelectedCategory
          categoryName={tagName}
          list={NOUN_ENTRIES.filter(nounEntry => nounEntry.tags.includes(tagName))}
        />
      </Layout>
    </Box>
  );
};

export default StudySelectedCategoryPage;
