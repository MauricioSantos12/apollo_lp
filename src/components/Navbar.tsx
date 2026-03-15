import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Quiénes Somos", target: "#who-we-are" },
    { label: "Ciencia de Datos", target: "#services" },
    { label: "Inteligencia Artificial", target: "#services" },
    { label: "Gestión de Proyectos", target: "#services" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSpecificSection = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      transition="all 0.5s"
      bg={isScrolled ? "blackAlpha.600" : "transparent"}
      backdropFilter={isScrolled ? "blur(40px)" : "none"}
      borderBottom={isScrolled ? "1px solid" : "none"}
      borderColor="whiteAlpha.200"
      py={isScrolled ? 4 : 8}
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={6}
        gap={2}
        justify="space-between"
        align="center"
      >
        <Flex
          align="center"
          gap={2}
          cursor="pointer"
          _hover={{ "& > div": { transform: "scale(1.1)" } }}
        >
          <Box
            w={"auto"}
            h={"auto"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="transform 0.3s"
            as="a"
            href="#home"
          >
            <Image
              src="/Apollo.png"
              alt="Apollo"
              width={"2.5rem"}
              height={"auto"}
              objectFit="contain"
            />
          </Box>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} align="center" gap={4}>
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.target}
              fontSize="13px"
              fontWeight="medium"
              color="whiteAlpha.800"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              {item.label}
            </Link>
          ))}
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} align="center" gap={4}>
          <Button
            as="a"
            href="#contact"
            bg="white"
            color="black"
            px={5}
            py={2}
            borderRadius="full"
            fontSize="13px"
            fontWeight="bold"
            _hover={{ bg: "apollo.secondary", color: "white" }}
            transition="all 0.2s"
          >
            Contáctanos
          </Button>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Menu"
          icon={isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          bg="transparent"
          color="white"
          _hover={{ bg: "white.100" }}
        />
      </Flex>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Box
              position="absolute"
              top="100%"
              left={0}
              right={0}
              bg="black"
              borderBottom="1px solid"
              borderColor="white.50"
              overflow="hidden"
              display={{ base: "block", md: "none" }}
            >
              <Flex direction="column" p={6} gap={4}>
                {menuItems.map((item) => (
                  <Text
                    key={item.label}
                    as="a"
                    href={item.target}
                    fontSize="lg"
                    color="whiteAlpha.500"
                    cursor="pointer"
                    _hover={{ color: "white" }}
                    onClick={(e) => goToSpecificSection(e, item.target)}
                  >
                    {item.label}
                  </Text>
                ))}
                <Button
                  as="a"
                  href="#contact"
                  bg="white"
                  color="black"
                  px={6}
                  py={3}
                  borderRadius="lg"
                  fontWeight="bold"
                  onClick={(e) => goToSpecificSection(e, "#contact")}
                >
                  Hablemos
                </Button>
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
