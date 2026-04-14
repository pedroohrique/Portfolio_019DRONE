import React from "react";
import Link from "next/link";
import { MessageSquare, Instagram } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-24 bg-[#0a0a0a]" id="contato">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                    Pronto para <span className="text-blue-500 underline underline-offset-8 decoration-4">valorizar</span> o seu empreendimento?
                </h2>

                <p className="text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
                    Entre em contato agora mesmo e agende sua sessão de fotos e vídeos aéreos. Resposta imediata.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="https://wa.me/5519992805493?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
                        target="_blank"
                        className="inline-flex flex-1 sm:flex-none justify-center items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-2xl text-xl font-black shadow-2xl shadow-green-900/20 transition-all hover:scale-105 active:scale-95 group"
                    >
                        <MessageSquare size={28} className="fill-white" />
                        Falar no WhatsApp
                    </Link>

                    <Link
                        href="https://www.instagram.com/pedro_h_henrique/"
                        target="_blank"
                        className="inline-flex flex-1 sm:flex-none justify-center items-center gap-4 bg-white/10 hover:bg-white/20 text-white px-10 py-6 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95 group"
                    >
                        <Instagram size={28} />
                        Seguir no Instagram
                    </Link>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 font-bold text-xs tracking-widest uppercase">
                    <span>ATENDIMENTO RÁPIDO</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>QUALIDADE 4K</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>EQUIPAMENTO PRO</span>
                </div>
            </div>
        </section>
    );
};

export default CTA;
