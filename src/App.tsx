import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import IdentitySection from "./components/IdentitySection";
import ServicesTabs from "./components/ServicesTabs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompaniesSection from "./components/Companies";

export default function App() {
  return (
    <Box bg="black" minH="100vh">
      <Navbar />
      <Box as="main">
        <Hero />
        <QuoteSection />
        <IdentitySection />
        <ServicesTabs />
        <CompaniesSection />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
