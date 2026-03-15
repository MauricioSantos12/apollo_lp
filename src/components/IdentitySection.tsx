import { motion } from "framer-motion";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";

const IdentitySection = () => {
  return (
    <Box
      as="section"
      id="identidad"
      pb={{ base: 8, md: 16 }}
      bg="black"
      overflow="hidden"
      maxW="6xl"
      mx="auto"
      px={6}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(1, 1fr)" }}
        gap={{ base: 6, md: 8 }}
        alignItems="center"
      >
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
            textAlign={"center"}
            lineHeight={1.05}
            letterSpacing="tight"
            mb={{ base: 6, md: 8 }}
          >
            Nuestra
            <Box as="span" color="whiteAlpha.400" fontStyle="italic">
              {" "}
              enfoque
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "xl" }}
            color="whiteAlpha.500"
            textAlign={"center"}
            lineHeight="relaxed"
          >
            Convertimos sus retos de negocio en soluciones que generan
            resultados. Creamos e implementamos propuestas a la medida,
            escalables y enfocadas en impacto, adopción y crecimiento sostenible
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default IdentitySection;
