import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Box, Flex, Heading, Text, Button, Link, Grid } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      as="section"
      id="home"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg="black"
      py={{ base: 12, md: 28 }}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="full"
        h="full"
        zIndex={-10}
        opacity={0.2}
        pointerEvents="none"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="800px"
          h="800px"
          bg="apollo.secondary"
          borderRadius="full"
          filter="blur(120px)"
        />
      </Box>

      <Box maxW="6xl" mx="auto" px={6} w="full">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={12}
          alignItems="center"
        >
          <Box
            as={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            zIndex={10}
          >
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
              fontFamily="heading"
              fontWeight="bold"
              color="white"
              lineHeight={1.05}
              letterSpacing="tight"
              mb={{ base: 4, md: 8 }}
            >
              Decisiones <br />
              <Box as="span" color="whiteAlpha.400" fontStyle="italic">
                científicas.
              </Box>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="whiteAlpha.500"
              maxW="lg"
              mb={{ base: 6, md: 12 }}
              lineHeight="relaxed"
            >
              Fusionamos la rigurosidad científica con la realidad industrial
              para optimizar su toma de decisiones mediante IA y Ciencia de
              Datos avanzada.
            </Text>

            <Flex flexWrap="wrap" alignItems="center" gap={6}>
              <Button
                as="a"
                href="#contact"
                bg="white"
                color="black"
                px={8}
                py={4}
                borderRadius="xl"
                fontWeight="bold"
                _hover={{ bg: "apollo.secondary", color: "white" }}
                transition="all 0.2s"
                display="flex"
                alignItems="center"
                gap={2}
                role="group"
                fontSize="sm"
              >
                Empezar ahora
                <Box
                  as={ArrowRight}
                  size={16}
                  _groupHover={{ transform: "translateX(4px)" }}
                  transition="transform 0.2s"
                />
              </Button>
              <Link
                href="#services"
                color="whiteAlpha.600"
                _hover={{ color: "white" }}
                transition="colors 0.2s"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="wide"
              >
                Nuestros servicios
              </Link>
            </Flex>
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
              position="relative"
              w="full"
              maxW={{ base: "300px", lg: "400px" }}
              m="0 auto"
              aspectRatio={1}
            >
              <Box
                position="absolute"
                inset={0}
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="none"
                borderColor={"transparent"}
              >
                <Box
                  as="img"
                  src="../../public/Apollo_White.png"
                  alt="Hero image Apollo"
                  w="full"
                  h="full"
                  objectFit="contain"
                  borderRadius="3xl"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-tr, blackAlpha.800, blackAlpha.400, transparent)"
                />
              </Box>

              <Box
                as={motion.div}
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                position="absolute"
                top="-40px"
                right="-40px"
                w={32}
                h={32}
                bg="whiteAlpha.50"
                backdropFilter="blur(60px)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="2xl"
                zIndex={-10}
              />
              <Box
                as={motion.div}
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                position="absolute"
                bottom="-40px"
                left="-40px"
                w={24}
                h={24}
                bg="apollo.secondary"
                opacity={0.4}
                backdropFilter="blur(60px)"
                border="1px solid"
                borderColor="apollo.secondary"
                borderColorOpacity={0.2}
                borderRadius="2xl"
                zIndex={-10}
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
