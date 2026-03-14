import { Linkedin, Github } from "lucide-react";
import { Box, Flex, Text, Link, Image, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      borderTop="1px solid"
      borderColor="whiteAlpha.600"
      bg="black"
    >
      <Box maxW="6xl" mx="auto" px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={8}
        >
          <Flex align="center" gap={3} as="a" href="#home">
            <Image
              src="/Apollo.png"
              alt="Apollo"
              width={"2.5rem"}
              height={"auto"}
              objectFit="contain"
            />
          </Flex>
          <Stack gap={2}>
            <Text
              color="whiteAlpha.600"
              fontSize="11px"
              fontFamily="mono"
              letterSpacing="0.2em"
              textAlign={"center"}
            >
              Innovación impulsada por la ciencia <br />
              <Text
                color="whiteAlpha.600"
                fontSize="11px"
                fontFamily="mono"
                letterSpacing="0.2em"
                textAlign={"center"}
              >
                © 2026 Apollo Innovation.
              </Text>
            </Text>
          </Stack>
          <Flex gap={8}>
            <Link
              href="#"
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              fontSize="xs"
            >
              <Linkedin width={16} />
            </Link>
            <Link
              href="#"
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              fontSize="xs"
            >
              <Github width={16} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
