import NavBar from "./Components/NavBar";
import MainsSection from "./Components/MainsSection";
import { CompanyLogos } from "./Components/CompanyLogos";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

export default function App() {
  return (
    <>
      <NavBar />
      <MainsSection />
      <CompanyLogos />
      <HowItWorks />
      <Faq />
      <Footer />
    </>
  );
}
