import { Box } from "@chakra-ui/react";

import Layout from "../components/elements/Layout";
import Home from "../components/home";

const HomePage = () => (
  <Box bgColor={"#c7e1d9"}>
    <Layout title="Home / Lisa's Handbook" showFooter>
      <Home />
    </Layout>
  </Box>
);

export default HomePage;
