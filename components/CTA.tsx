import React from "react";
import Link from "next/link";
import { MessageSquare, Instagram } from "lucide-react";

const CTA = () => {
    return (
        <section className="py-24 bg-blue-50/50" id="contato">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 leading-tight">
                    Pronto para <span className="text-blue-600 underline underline-offset-8 decoration-4">valorizar</span> o seu empreendimento?
                </h2>

                <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
                    Entre em contato agora mesmo e agende sua sessão de fotos e vídeos aéreos. Resposta imediata.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="https://wa.me/5519992805493"
                        target="_blank"
                        className="inline-flex flex-1 sm:flex-none justify-center items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-10 py-6 rounded-2xl text-xl font-black shadow-2xl shadow-green-200 transition-all hover:scale-105 active:scale-95 group"
                    >
                        <MessageSquare size={28} className="fill-white" />
                        Falar no WhatsApp
                    </Link>

                    <Link
                        href="https://www.instagram.com/pedro_h_henrique/"
                        target="_blank"
                        className="inline-flex flex-1 sm:flex-none justify-center items-center gap-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-10 py-6 rounded-2xl text-xl font-black shadow-2xl shadow-pink-200 transition-all hover:scale-105 active:scale-95 group"
                    >
                        <Instagram size={28} />
                        Seguir no Instagram
                    </Link>
                </div>

                <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 font-bold text-xs tracking-widest uppercase">
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
