import studyImage from "/public/static/home/study.png";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Icon,
} from "@chakra-ui/react";

import TestCard from "./testcard";
import { mdiHeart } from "@mdi/js";

const Home = () => {
  return (
    <Container maxWidth={{ base: "100%", lg: "90%", xl: "85%" }}>
      <Box textColor={"#1d1d1d"} my={"128px"} px={{ base: 8, lg: 0 }}>
        <Box as={"span"} lineHeight={1.2} fontSize={64} fontWeight={700}>
          Welcome again Lisa{" "}
          <Icon fontSize={52} as={"span"}>
            <path fill={"currentColor"} d={mdiHeart} />
          </Icon>
        </Box>
        <Text fontSize={42} fontWeight={500}>
          I hope this tool will help you be productive
        </Text>
        <Text fontSize={28} fontWeight={500}>
          Love you ~
        </Text>
      </Box>

      <Text fontSize={"48px"} fontWeight={600} mb={8}>
        Resources
      </Text>
      <Grid
        templateRows={{ base: "repeat(3, 1fr)", xl: "repeat(2, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(4, 1fr)" }}
        rowGap={8}
        mb={8}
      >
        <GridItem
          rowStart={1}
          rowEnd={2}
          colStart={1}
          colEnd={{ base: 2, xl: 3 }}
        >
          <Flex justifyContent={{ base: "center", lg: "start" }}>
            <TestCard title={"Study"} image={studyImage.src} link={""} />
          </Flex>
        </GridItem>
        <GridItem
          rowStart={{ base: 2, xl: 1 }}
          rowEnd={{ base: 3, xl: 2 }}
          colStart={{ base: 1, xl: 3 }}
          colEnd={{ base: 2, xl: 5 }}
        >
          <Flex justifyContent={{ base: "center", lg: "end" }}>
            <TestCard title={"Tests"} image={studyImage.src} link={""} />
          </Flex>
        </GridItem>
        <GridItem
          rowStart={{ base: 3, xl: 2 }}
          rowEnd={{ base: 4, xl: 3 }}
          colStart={{ base: 1, xl: 2 }}
          colEnd={{ base: 2, xl: 4 }}
        >
          <Flex justifyContent={"center"}>
            <TestCard
              title={"Alter database"}
              image={studyImage.src}
              link={""}
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
