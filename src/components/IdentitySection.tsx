import { motion } from "motion/react";
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
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={{ base: 6, md: 12 }}
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
            lineHeight={1.05}
            letterSpacing="tight"
            mb={{ base: 6, md: 16 }}
          >
            Nuestra <br />
            <Box as="span" color="whiteAlpha.400" fontStyle="italic">
              {" "}
              identidad
            </Box>
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "xl" }}
            color="whiteAlpha.500"
            lineHeight="relaxed"
          >
            Somos un equipo multidisciplinario de científicos y tecnólogos
            apasionados por cerrar la brecha entre la investigación académica y
            laimplementación industrial
          </Text>
        </Box>
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          position="relative"
          display="flex"
          justifyContent={{ base: "center", lg: "flex-end" }}
        >
          <Box
            as={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            display="grid"
            gap={{ base: 6, md: 12 }}
          >
            <Box>
              <Heading
                as="h3"
                fontSize="2xl"
                fontFamily="heading"
                fontWeight="bold"
                color="white"
                mb={4}
              >
                Democratizar la ciencia
              </Heading>
              <Text color="whiteAlpha.400" fontSize="sm" lineHeight="relaxed">
                Hacemos que la alta tecnología científica sea accesible para
                empresas de todos los tamaños, eliminando las barreras de
                entrada a la innovación compleja y costosa.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                fontSize="2xl"
                fontFamily="heading"
                fontWeight="bold"
                color="white"
                mb={4}
              >
                Referente en IA Ética
              </Heading>
              <Text color="whiteAlpha.400" fontSize="sm" lineHeight="relaxed">
                Liderar la transición hacia una industria más inteligente y
                humana, donde la inteligencia artificial se aplique con rigor
                científico y responsabilidad ética.
              </Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default IdentitySection;
