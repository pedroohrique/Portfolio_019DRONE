import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-12 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-xl font-bold tracking-tighter text-white">
                        019 <span className="text-blue-500">DRONE</span>
                    </span>
                    <p className="text-sm text-gray-500 mt-1">© 2024 019 Drone. Todos os direitos reservados.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs font-bold text-gray-400">
                    <a href="#" className="hover:text-blue-500 transition-colors tracking-widest uppercase">POLÍTICA DE PRIVACIDADE</a>
                    <a href="#" className="hover:text-blue-500 transition-colors tracking-widest uppercase">TERMOS DE USO</a>
                    <a 
                        href="/docs/certidao.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-500 transition-colors tracking-widest uppercase flex items-center gap-1"
                    >
                        DOCUMENTAÇÕES
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
