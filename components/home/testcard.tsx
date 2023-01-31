import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const TestCard = ({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) => (
  <Box
    w={"80%"}
    textColor={"#1d1d1d"}
    _hover={{ textColor: "#00b085", opacity: 0.8 }}
  >
    <Link href={link}>
      <Box
        borderRadius={"16px"}
        borderWidth={"2px"}
        borderColor={"#00b085"}
        overflow={"hidden"}
        mb={4}
      >
        <Image src={image} alt={`Logo for ${title}`} />
      </Box>
      <Text fontSize={"42px"} fontWeight={600}>
        {title}
      </Text>
    </Link>
  </Box>
);

export default TestCard;
