import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Cpu, Briefcase } from "lucide-react";
import { Box, Grid, Heading, Text, Button, Flex } from "@chakra-ui/react";
import CodeBlock from "./CodeBlock";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "ciencia-datos",
      title: "Ciencia de Datos",
      icon: <BarChart3 size={20} />,
      objective:
        "Identificamos patrones y generamos insights accionables mediante análisis estadístico avanzado y procesamiento masivo de información.",
      code: `data_pipeline_config:
  engine: "apollo-analytics-v4"
  stages:
    - ingestion:
        sources: ["iot_sensors", "erp_database"]
        frequency: "real-time"
    - processing:
        methods: ["statistical_filtering", "z_score_normalization"]
    - output:
        formats: ["interactive_dashboard", "automated_report"]`,
      language: "yaml",
      items: [
        {
          title: "Preprocesamiento",
          items: [
            "Estructuración de bases de datos",
            "Procesamiento masivo",
            "Preparación en tiempo real",
          ],
        },
        {
          title: "Análisis Descriptivo",
          items: [
            "Exploración estadística",
            "Identificación de tendencias",
            "Segmentación avanzada",
          ],
        },
        {
          title: "Visualización",
          items: [
            "Dashboards interactivos",
            "Reportes automatizados",
            "Detección de anomalías",
          ],
        },
      ],
    },
    {
      id: "inteligencia-artificial",
      title: "Inteligencia Artificial",
      icon: <Cpu size={20} />,
      objective:
        "Implementamos modelos de IA responsables para automatizar procesos complejos y aumentar la escalabilidad de su negocio.",
      code: `ai_model_deployment:
  architecture: "neural-reasoning-v2"
  parameters:
    temperature: 0.1
    max_tokens: 2048
  capabilities:
    - predictive_maintenance
    - demand_forecasting
    - autonomous_agents
  safety_protocols: "enabled"`,
      language: "yaml",
      items: [
        {
          title: "Modelos Predictivos",
          items: [
            "Machine Learning avanzado",
            "Predicción de demanda",
            "Simulación de escenarios",
          ],
        },
        {
          title: "Agentes Autónomos",
          items: [
            "Chatbots inteligentes",
            "Asistentes virtuales",
            "Gestión de solicitudes",
          ],
        },
        {
          title: "Automatización RPA",
          items: [
            "Optimización de flujos",
            "Robotic Process Automation",
            "Reportes automáticos",
          ],
        },
      ],
    },
    {
      id: "gestion-proyectos",
      title: "Gestión de Proyectos",
      icon: <Briefcase size={20} />,
      objective:
        "Aseguramos el éxito de sus iniciativas de innovación mediante metodologías ágiles y rigurosidad técnica en cada etapa.",
      code: `project_roadmap:
  version: 1.2
  phases:
    - discovery:
        duration: 2 "weeks"
        deliverables: ["technical_audit", "feasibility_report"]
    - development:
        sprints: 6
        methodology: "agile_scientific"
    - deployment:
        strategy: "phased_rollout"
        monitoring: "real_time_telemetry"`,
      language: "yaml",
      items: [
        {
          title: "Planificación",
          items: [
            "Definición de roadmap",
            "Asignación de recursos",
            "Análisis de factibilidad",
          ],
        },
        {
          title: "Ejecución",
          items: [
            "Metodologías ágiles",
            "Control de calidad",
            "Iteración continua",
          ],
        },
        {
          title: "Transición y cierre",
          items: [
            "Documentación técnica",
            "Capacitación de equipos",
            "Soporte post-implementación",
          ],
        },
      ],
    },
  ];

  return (
    <Box
      id={"services"}
      as="section"
      py={{ base: 8, md: 16 }}
      bg="black"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Box maxW="6xl" mx="auto" px={6}>
        <Box textAlign="center" mb={4}>
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontFamily="heading"
            fontWeight="bold"
            mb={6}
            letterSpacing="tight"
          >
            Nuestros servicios
          </Heading>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={4}
          mb={8}
        >
          {services.map((service, idx) => (
            <Button
              key={service.id}
              onClick={() => setActiveTab(idx)}
              position="relative"
              display="flex"
              alignItems="center"
              gap={4}
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor={
                activeTab === idx ? "whiteAlpha.200" : "whiteAlpha.50"
              }
              bg={activeTab === idx ? "apollo.secondary" : "transparent"}
              bgOpacity={activeTab === idx ? 0.4 : 1}
              _hover={{
                borderColor: "apollo.secondary",
                bg: "apollo.secondary",
              }}
              transition="all 0.3s"
              textAlign="left"
              height="auto"
              justifyContent="flex-start"
            >
              <Flex
                align="center"
                justify="center"
                w={10}
                h={10}
                borderRadius="lg"
                border="1px solid"
                borderColor={
                  activeTab === idx ? "apollo.secondary" : "whiteAlpha.100"
                }
                bg={activeTab === idx ? "apollo.secondary" : "whiteAlpha.50"}
                bgOpacity={activeTab === idx ? 0.4 : 1}
                color={activeTab === idx ? "white" : "whiteAlpha.800"}
                _groupHover={{ color: "whiteAlpha.600" }}
                transition="colors 0.2s"
              >
                {service.icon}
              </Flex>
              <Text
                fontFamily="heading"
                fontWeight="medium"
                fontSize={{ base: "md", md: "lg" }}
                color={activeTab === idx ? "white" : "whiteAlpha.400"}
                _groupHover={{ color: "whiteAlpha.600" }}
                transition="colors 0.2s"
              >
                {service.title}
              </Text>

              {activeTab === idx && (
                <Box
                  as={motion.div}
                  layoutId="active-glow"
                  position="absolute"
                  bottom={0}
                  left={6}
                  right={6}
                  h="1px"
                  bg="apollo.secondary"
                  boxShadow="0 0 15px rgba(20,33,52,0.8)"
                />
              )}
            </Button>
          ))}
        </Grid>

        <AnimatePresence mode="wait">
          <Box
            as={motion.div}
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Grid
              templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
              gap={6}
              display={{ base: "flex", lg: "grid" }}
              alignItems={{ base: "", lg: "stretch" }}
              flexDirection={{ base: "column", lg: "row" }}
            >
              <Box
                w="full"
                h="full"
                minH={{ base: "auto", lg: "400px" }}
                maxW={{
                  base: "270px",
                  xs: "full",
                  sm: "full",
                  md: "full",
                  lg: "full",
                }}
              >
                {/* <CodeBlock
                  code={services[activeTab].code}
                  language={services[activeTab].language}
                /> */}
                <Box>
                  <Heading
                    as="h3"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontFamily="heading"
                    fontWeight="bold"
                    mb={6}
                    color="white"
                  >
                    {services[activeTab].title}
                  </Heading>
                  <Text
                    fontSize="2xl"
                    color="whiteAlpha.500"
                    lineHeight="relaxed"
                    mb={8}
                    maxW={{ base: "100%", md: "80%" }}
                  >
                    {services[activeTab].objective}
                  </Text>
                </Box>
              </Box>

              <Flex direction="column" justify="space-between" gap={8}>
                <Box>
                  <Grid
                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
                    gap={4}
                  >
                    {services[activeTab].items.map((item, idx) => (
                      <Box
                        key={idx}
                        p={5}
                        border="1px solid"
                        borderColor="whiteAlpha.600"
                        borderRadius="2xl"
                      >
                        <Heading
                          as="h4"
                          fontSize="xs"
                          fontFamily="heading"
                          fontWeight="bold"
                          mb={3}
                          color="whiteAlpha.800"
                          textTransform="uppercase"
                          letterSpacing="widest"
                        >
                          {item.title}
                        </Heading>
                        <Box
                          as="ul"
                          display="flex"
                          flexDirection="column"
                          gap={2}
                        >
                          {item.items.map((li, i) => (
                            <Flex
                              key={i}
                              as="li"
                              color="whiteAlpha.500"
                              fontSize="11px"
                              align="start"
                              gap={2}
                            >
                              <Box
                                w={1}
                                h={1}
                                bg="apollo.secondary"
                                borderRadius="full"
                                mt="1.5"
                                flexShrink={0}
                              />
                              {li}
                            </Flex>
                          ))}
                        </Box>
                      </Box>
                    ))}
                    <Box
                      position="relative"
                      w="full"
                      maxW={"100px"}
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
                          src="/Apollo_White.png"
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
                  </Grid>
                </Box>
              </Flex>
            </Grid>
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default ServicesTabs;
