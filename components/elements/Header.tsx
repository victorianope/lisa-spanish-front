import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import { mdiBookOpenPageVariantOutline } from "@mdi/js";
import Router from "next/router";

const Header = () => (
  <Container maxWidth={{ base: "95%", lg: "90%", xl: "85%" }}>
    <Flex justifyContent={"space-between"} py={6}>
      <Flex
        columnGap={4}
        onClick={() => Router.push("/")}
        cursor={"pointer"}
        _hover={{ textColor: "#5fa38e" }}
      >
        <Icon fontSize={52}>
          <path fill={"currentColor"} d={mdiBookOpenPageVariantOutline} />
        </Icon>
        <Text alignSelf={"center"} fontSize={26} fontWeight={700}>
          Handbook
        </Text>
      </Flex>
      {/* <Flex>
      <Text>Start</Text>
    </Flex> */}
    </Flex>
  </Container>
);

export default Header;
