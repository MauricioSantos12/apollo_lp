import { Box, Text, Flex } from "@chakra-ui/react";

const CodeBlock = ({
  code,
  language = "javascript",
}: {
  code: string;
  language?: string;
}) => {
  const highlight = (text: string) => {
    const keywords =
      /\b(import|from|def|return|const|async|function|await|new|if|else|while|for|class|export|default|async|await)\b/g;
    const strings = /(['"`].*?['"`])/g;
    const comments = /(\/\/.*|\#.*)/g;
    const methods = /\b([a-zA-Z_]\w*)(?=\()/g;
    const numbers = /\b(\d+)\b/g;
    let highlighted = text
      .replace(comments, '<span style="color: #71717a">$1</span>')
      .replace(keywords, '<span style="color: #f472b6">$1</span>')
      .replace(strings, '<span style="color: #fef08a">$1</span>')
      .replace(methods, '<span style="color: #4ade80">$1</span>')
      .replace(numbers, '<span style="color: #c084fc">$1</span>');

    return <code dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  return (
    <Box
      bg="zinc.950"
      border="1px solid"
      borderColor="whiteAlpha.300"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="2xl"
      h="full"
      display="flex"
      flexDirection="column"
    >
      <Flex
        bg="whiteAlpha.200"
        px={6}
        py={3}
        borderBottom="1px solid"
        borderColor="whiteAlpha.300"
        align="center"
        justify="space-between"
      >
        <Flex gap={2}>
          <Box w="2.5" h="2.5" borderRadius="full" bg="red.500" opacity={0.4} />
          <Box
            w="2.5"
            h="2.5"
            borderRadius="full"
            bg="yellow.500"
            opacity={0.4}
          />
          <Box
            w="2.5"
            h="2.5"
            borderRadius="full"
            bg="green.500"
            opacity={0.4}
          />
        </Flex>
        <Text
          fontSize="10px"
          fontFamily="mono"
          color="whiteAlpha.200"
          textTransform="uppercase"
          letterSpacing="widest"
        >
          apollo_module.{language === "python" ? "py" : "ts"}
        </Text>
      </Flex>
      <Box
        p={8}
        fontFamily="mono"
        fontSize={{ base: "xs", md: "sm" }}
        lineHeight="relaxed"
        overflowX="auto"
        flex={1}
      >
        <Box as="pre" color="whiteAlpha.800">
          {highlight(code)}
        </Box>
      </Box>
    </Box>
  );
};

export default CodeBlock;
