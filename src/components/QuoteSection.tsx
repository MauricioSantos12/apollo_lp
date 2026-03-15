import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const QuoteSection = () => {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 32 }}
      bg="black"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      id="who-we-are"
    >
      <Box maxW="6xl" mx="auto" px={6} textAlign="center">
        <Text
          as={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          fontSize={{ base: "md", md: "3xl" }}
          fontFamily="heading"
          fontWeight="light"
          color="white"
          lineHeight="tight"
          fontStyle="italic"
          borderLeft={"4px solid"}
          borderColor={"apollo.secondary"}
        >
          El futuro de la industria reside en la capacidad de transformar datos
          en conocimiento accionable mediante el rigor científico
        </Text>
      </Box>
    </Box>
  );
};

export default QuoteSection;
