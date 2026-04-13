import React, { useState } from "react";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
  useToast,
} from "@chakra-ui/react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const to = import.meta.env.VITE_CONTACT_EMAIL;
      const subject = `New message | Apollo Landing Page`;
      const boyHtml = `
        <div style="background-color:#f4f4f4;padding:40px 0;font-family:Arial,sans-serif;">
        <div style="max-width:500px;margin:0 auto;background:#ffffff;border-radius:8px;padding:32px;">
        <h2 style="margin:0 0 24px;text-align:center;">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${formData?.name}</p>
        <p><strong>Email:</strong> ${formData?.email}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;" />
        <p style="white-space:pre-wrap;">${formData?.message}</p>
        </div>
        </div>`;

      const res = await fetch(import.meta.env.VITE_CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to,
          subject,
          body: boyHtml,
        }),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Error al enviar el mensaje.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error al enviar el mensaje. Intenta de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error(error);
    }
  };

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
                de tu próximo proyecto.
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
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
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
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        value={formData.email}
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
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      value={formData.message}
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
                    onClick={handleSubmit}
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
