import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Check, Clock } from "lucide-react";

const Hero = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-[1.1] tracking-tight">
                            Imagens aéreas profissionais para <span className="text-blue-600">valorizar</span> o seu empreendimento
                        </h1>

                        <p className="text-xl text-gray-500 font-medium">
                            Fotos e vídeos com drone para anúncios e projetos de alto impacto.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-center lg:justify-start">
                            <Link
                                href="https://wa.me/5519992805493"
                                target="_blank"
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 group"
                            >
                                Solicitar Orçamento
                                <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500 justify-center lg:justify-start mt-4">
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                                <Check size={16} className="text-blue-600" />
                                Autorizado pela ANAC
                            </div>
                            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                                <Clock size={16} className="text-green-600" />
                                Entrega 48h
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative group lg:ml-10">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop"
                                alt="High-end house with drone"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
