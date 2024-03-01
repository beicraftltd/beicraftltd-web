import ContactForm from "./components/guest/ContactForm";
import MainHero from "./components/guest/MainHeroSection";
import ServiceSection from "./components/guest/ServiceSection";
import ContactCTA from "./components/guest/ContactCTA";
import MoreInformationSection from "./components/guest/MoreInformationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainHero />      
      <ServiceSection/>
      <ContactCTA/>    
      <MoreInformationSection />            
      <ContactForm />
    </main>
  );
}
