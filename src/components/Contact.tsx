import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, CheckCircle2 } from "lucide-react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 12, md: 36 }}
      position="relative"
      overflow="hidden"
      bg="black"
    >
      <Box maxW="6xl" mx="auto" px={6}>
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={{ base: 6, md: 20 }}
          alignItems="center"
        >
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", lg: "6xl" }}
              fontFamily="heading"
              fontWeight="bold"
              mb={8}
            >
              Hablemos{" "}
              <Box as="span" color="whiteAlpha.400">
                de tu próximo proyecto
              </Box>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color="whiteAlpha.500"
              mb={{ base: 6, md: 12 }}
            >
              Transformamos tus datos e ideas en una ventaja competitiva real,
              mediante soluciones basadas en ciencia y enfocadas en resultados
            </Text>
          </Box>

          <Box
            bg="zinc.900"
            border="1px solid"
            borderColor="whiteAlpha.900"
            p={{ base: 6, md: 10 }}
            borderRadius="3xl"
          >
            {status === "success" ? (
              <Box
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                textAlign="center"
                py={12}
              >
                <Flex
                  w={20}
                  h={20}
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mx="auto"
                  mb={6}
                >
                  <CheckCircle2 size={40} color="white" />
                </Flex>
                <Heading
                  as="h3"
                  fontSize="2xl"
                  fontFamily="heading"
                  fontWeight="bold"
                  mb={2}
                >
                  ¡Solicitud recibida!
                </Heading>
                <Text color="whiteAlpha.500">
                  Gracias por tu solicitud. Nos pondremos en contacto en menos
                  de 24 horas.
                </Text>
                <Button
                  onClick={() => setStatus("idle")}
                  mt={8}
                  bg="white"
                  color="black"
                  py={4}
                  borderRadius="xl"
                  fontWeight="bold"
                  _hover={{ bg: "apollo.secondary", color: "white" }}
                  transition="all 0.2s"
                >
                  Otra solicitud
                </Button>
              </Box>
            ) : (
              <Box
                as="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("success");
                }}
              >
                <Flex direction="column" gap={6}>
                  <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                    gap={6}
                  >
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="10px"
                        fontFamily="mono"
                        color="whiteAlpha.600"
                        textTransform="uppercase"
                        letterSpacing="widest"
                      >
                        Nombre
                      </FormLabel>
                      <Input
                        bg="whiteAlpha.200"
                        bgOpacity={0.2}
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        borderRadius="md"
                        fontSize="xs"
                        px={4}
                        py={3}
                        color="white"
                        _focus={{
                          borderColor: "apollo.secondary",
                          outline: "none",
                        }}
                        transition="border-color 0.2s"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel
                        fontSize="10px"
                        fontFamily="mono"
                        color="whiteAlpha.600"
                        textTransform="uppercase"
                        letterSpacing="widest"
                      >
                        Email
                      </FormLabel>
                      <Input
                        type="email"
                        bg="whiteAlpha.200"
                        bgOpacity={0.2}
                        border="1px solid"
                        borderColor="whiteAlpha.100"
                        borderRadius="md"
                        fontSize="xs"
                        px={4}
                        py={3}
                        color="white"
                        _focus={{
                          borderColor: "apollo.secondary",
                          outline: "none",
                        }}
                        transition="border-color 0.2s"
                      />
                    </FormControl>
                  </Grid>
                  <FormControl isRequired>
                    <FormLabel
                      fontSize="10px"
                      fontFamily="mono"
                      color="whiteAlpha.600"
                      textTransform="uppercase"
                      letterSpacing="widest"
                    >
                      Mensaje
                    </FormLabel>
                    <Textarea
                      rows={4}
                      bg="whiteAlpha.200"
                      bgOpacity={0.2}
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      borderRadius="md"
                      fontSize="xs"
                      px={4}
                      py={3}
                      color="white"
                      _focus={{
                        borderColor: "apollo.secondary",
                        outline: "none",
                      }}
                      transition="border-color 0.2s"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    w="full"
                    bg="white"
                    color="black"
                    py={4}
                    borderRadius="xl"
                    fontWeight="bold"
                    _hover={{ bg: "apollo.secondary", color: "white" }}
                    transition="all 0.2s"
                  >
                    Enviar mensaje
                  </Button>
                </Flex>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
