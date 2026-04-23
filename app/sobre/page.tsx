import React from "react";
import Image from "next/image";
import { Target, Shield, Zap, Camera, Award } from "lucide-react";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
    title: "Sobre | 019 DRONE",
    description: "Conheça a 019 Drone, especialistas em captação de imagens e vídeos aéreos de alta performance.",
};

const SobrePage = () => {
    return (
        <div className="fade-in bg-[#0a0a0a] text-gray-200">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/about-drone.png" 
                        alt="Drone Background" 
                        fill 
                        quality={100}
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        SOBRE A <span className="text-blue-500">019 DRONE</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                        Acelerando a percepção visual de projetos com tecnologia de ponta e olhar cinematográfico.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                                <Target size={14} />
                                Nossa Missão
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic">
                                    "Acreditamos que uma boa imagem não apenas registra — ela valoriza, comunica e transforma a forma como cada projeto é percebido."
                                </p>
                                
                                <p className="text-gray-400 leading-relaxed">
                                    A 019 Drone é especializada na captação de imagens e vídeos aéreos com alta qualidade, 
                                    utilizando tecnologia de ponta para entregar resultados precisos, seguros e visualmente impactantes.
                                </p>
                                
                                <p className="text-gray-400 leading-relaxed">
                                    Trabalhamos com drones DJI, referência mundial no segmento, garantindo estabilidade, 
                                    definição e excelência em cada projeto realizado.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <Zap className="text-blue-500" />,
                                    title: "Qualidade de Ponta",
                                    desc: "Equipamentos de última geração para resultados profissionais."
                                },
                                {
                                    icon: <Shield className="text-blue-500" />,
                                    title: "Segurança Total",
                                    desc: "Operações seguras e seguindo todas as normas vigentes."
                                },
                                {
                                    icon: <Camera className="text-blue-500" />,
                                    title: "Olhar Técnico",
                                    desc: "Foco nos detalhes que fazem a diferença no seu projeto."
                                },
                                {
                                    icon: <Award className="text-blue-500" />,
                                    title: "Excelência",
                                    desc: "Compromisso com a satisfação e o valor agregado."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-blue-500/30 transition-all group">
                                    <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-20 bg-[#050505]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
                        Nosso Atendimento e <span className="text-blue-500 tracking-tighter">Objetivos</span>
                    </h2>
                    
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-6">
                                <p className="text-gray-400 leading-relaxed bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 shadow-2xl">
                                    Atendemos diferentes necessidades, como acompanhamento de obras, mapeamento de áreas, 
                                    inspeções técnicas e produção de conteúdo visual, sempre com foco em agregar valor aos projetos dos nossos clientes.
                                </p>
                                <p className="text-gray-400 leading-relaxed bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 shadow-2xl">
                                    Nosso compromisso é oferecer um serviço confiável, com atenção aos detalhes e evolução constante, 
                                    acompanhando as melhores práticas e inovações do mercado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default SobrePage;
