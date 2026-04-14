import { motion } from "framer-motion";
import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";

const CompaniesSection = () => {
  const images = [
    {
      src: "/Companies/helathrock.png",
      alt: "HealthRock Logo",
    },
    {
      src: "Companies/pediatrics_clinic.png",
      alt: "Pediatrics clinic Logo",
    },
  ];

  return (
    <Box
      as="section"
      py={{ base: 12, md: 32 }}
      bg="black"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      id="who-we-are"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(1, 1fr)" }}
        gap={{ base: 6, md: 8 }}
        alignItems="center"
        maxW="6xl"
        mx="auto"
      >
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heading
            as="h3"
            fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
            fontFamily="heading"
            fontWeight="bold"
            color="white"
            textAlign={"center"}
            lineHeight={1.05}
            letterSpacing="tight"
            mb={2}
          >
            Nuestros
            <Box as="span" color="whiteAlpha.400" fontStyle="italic">
              {" "}
              aliados
            </Box>
          </Heading>
          <Stack
            w="100%"
            flexDir={"row"}
            alignItems="center"
            justifyContent="center"
            gap={4}
            p={4}
          >
            {images &&
              images.map((image) => {
                if (!image.src) return null;
                return (
                  <Box
                    as="img"
                    src={image.src}
                    alt={image.alt}
                    w="300px"
                    h="full"
                    objectFit="contain"
                    borderRadius="3xl"
                    filter={""}
                  />
                );
              })}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default CompaniesSection;
