"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Check, Clock } from "lucide-react";

const heroImages = [
    {
        src: "https://res.cloudinary.com/deazur8hn/image/upload/v1776109850/DJI_20260316180836_0152_D_avfruv.jpg",
        alt: "Drone de última geração realizando captação de imagens aéreas cinematográficas"
    },
    {
        src: "https://res.cloudinary.com/deazur8hn/image/upload/v1776109850/DJI_20260303220607_0166_D_aih5lc.jpg",
        alt: "Vista aérea profissional de um empreendimento de alto padrão"
    },
    {
        src: "https://res.cloudinary.com/deazur8hn/image/upload/v1776109850/hotel-2_peyvcf.jpg",
        alt: "Filmagem aérea de hotel para marketing institucional"
    },
    {
        src: "https://res.cloudinary.com/deazur8hn/image/upload/v1776109850/trecime-2-2_j7zcbd.jpg",
        alt: "Fotografia aérea de alta resolução para acompanhamento de projetos"
    }
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-12 md:py-32 overflow-hidden bg-[#0a0a0a]">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/tech-city-bg.png"
                    alt="Centro tecnológico futurista"
                    fill
                    className="object-cover opacity-30 brightness-[0.7]"
                    priority
                />
                {/* Overlays for legibility & blending */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] hidden lg:block"></div>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] md:leading-[1.1] tracking-tight">
                            Imagens aéreas profissionais para <span className="text-blue-500">valorizar</span> o seu empreendimento
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 font-medium">
                            Fotos e vídeos com drone para anúncios e projetos de alto impacto.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-center lg:justify-start">
                            <Link
                                href="https://wa.me/5519994411529?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-3 group"
                            >
                                Solicitar Orçamento
                                <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-400 justify-center lg:justify-start mt-4">
                            <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full border border-blue-800/50">
                                <Check size={16} className="text-blue-500" />
                                Autorizado pela ANAC
                            </div>
                            <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full border border-green-800/50">
                                <Clock size={16} className="text-green-500" />
                                Entrega 48h
                            </div>
                        </div>
                    </div>

                    {/* Right Image Carousel */}
                    <div className="relative group lg:ml-10">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            {heroImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            {/* Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {heroImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        aria-label={`Ver imagem ${index + 1}`}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "bg-white w-6" : "bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

