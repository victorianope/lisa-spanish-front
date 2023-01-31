import Link from "next/link";

import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { mdiBookOpenPageVariantOutline, mdiGoogle } from "@mdi/js";
import Router from "next/router";

const Footer = () => (
  <SimpleGrid
    columns={{ base: 1, lg: 4 }}
    textAlign={{ base: "center", lg: "start" }}
    spacing={4}
    pt={8}
    pb={12}
    px={12}
    mt={4}
    borderTopWidth={"2px"}
    borderBottomWidth={"2px"}
    borderColor={"#70829B20"}
    fontSize={16}
    fontWeight={600}
    textColor={"#70829B"}
    bgColor={"#1d1d1d"}
  >
    <Box alignSelf={"center"} justifySelf={"center"} my={2}>
      <Flex
        columnGap={4}
        onClick={() => Router.push("/")}
        cursor={"pointer"}
        alignItems={"center"}
      >
        <Icon fontSize={52} textColor={"#c7e1d9"}>
          <path fill={"currentColor"} d={mdiBookOpenPageVariantOutline} />
        </Icon>
        <Text
          alignSelf={"center"}
          fontSize={26}
          fontWeight={700}
          textColor={"white"}
        >
          Handbook
        </Text>
      </Flex>
    </Box>
    <SimpleGrid columns={1} rowGap={2}>
      <Text textColor={"#c7e1d9"} fontWeight={700}>
        Tests
      </Text>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>Per category</Text>
      </Link>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>Per failed attempts</Text>
      </Link>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>At random</Text>
      </Link>
    </SimpleGrid>
    <SimpleGrid columns={1} rowGap={2}>
      <Text textColor={"#c7e1d9"} fontWeight={700}>
        Study
      </Text>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>Per category</Text>
      </Link>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>Per failed attempts</Text>
      </Link>
      <Link href={""} target={"_blank"} rel={"noreferrer"}>
        <Text>At random</Text>
      </Link>
    </SimpleGrid>
    <Flex
      direction={"column"}
      gap={2}
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      textColor={"#c7e1d9"}
      fontWeight={500}
      my={2}
    >
      <Text>Happy 23rd Birthday Lisa</Text>
      <Text>Forever yours, V.</Text>
    </Flex>
  </SimpleGrid>
);

export default Footer;
