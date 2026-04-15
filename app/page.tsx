import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="fade-in">
            <Hero />
            <PortfolioPreview />
            <Services />
            <Packages />
            <CTA />

            <Footer />
        </div>
    );
}
