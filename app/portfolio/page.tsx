import PortfolioGrid from "@/components/PortfolioGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Portfólio | 019 DRONE",
    description: "Veja nossos trabalhos realizados com drone para empresas, comércios e propriedades residenciais.",
};

export default function PortfolioPage() {
    return (
        <div className="fade-in">
            <PortfolioGrid />
            <CTA />

            <Footer />
        </div>
    );
}
