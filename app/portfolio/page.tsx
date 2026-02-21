import PortfolioGrid from "@/components/PortfolioGrid";
import CTA from "@/components/CTA";

export const metadata = {
    title: "Portfólio | 019 DRONE",
    description: "Veja nossos trabalhos realizados com drone para empresas, comércios e propriedades residenciais.",
};

export default function PortfolioPage() {
    return (
        <div className="fade-in">
            <PortfolioGrid />
            <CTA />

            {/* Footer simple */}
            <footer className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-bold tracking-tighter text-gray-800">
                            019 <span className="text-blue-600">DRONE</span>
                        </span>
                        <p className="text-sm text-gray-400 mt-1">© 2024 019 Drone. Todos os direitos reservados.</p>
                    </div>

                    <div className="flex gap-8 text-sm font-bold text-gray-500">
                        <a href="#" className="hover:text-blue-600 transition-colors">POLÍTICA DE PRIVACIDADE</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">TERMOS DE USO</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
