import ContactForm from "./components/ContactForm";
import FAQSection from "./components/FAQSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <div className="max-w-[1140px] px-2 lg:px-0 mx-auto">
        <Navbar />
      </div>
      <Hero />
      <div className="max-w-[1140px] px-2 lg:px-0 mx-auto">
        <Services />
        <Features />
        <ContactForm />
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}
