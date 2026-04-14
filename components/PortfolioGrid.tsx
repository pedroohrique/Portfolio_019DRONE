"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronRight, Plus } from "lucide-react";
import { portfolioData, Property } from "@/lib/data";
import PortfolioModal from "@/components/PortfolioModal";

const PortfolioGrid = () => {
    const [selectedItem, setSelectedItem] = useState<Property | null>(null);

    return (
        <section className="py-20 bg-[#111111] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">PORTFÓLIO</h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                        Confira alguns de nossos trabalhos realizados para o setor comercial e residencial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolioData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-white/10 flex flex-col"
                        >
                            <div className="relative h-60 md:h-72 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 backdrop-blur-sm text-blue-500 p-4 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-100 md:scale-50 md:group-hover:scale-100 shadow-xl"
                                >
                                    <Plus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{item.title}</h3>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 font-semibold mb-8 text-sm md:text-base">
                                    <MapPin size={18} className="text-blue-500" />
                                    {item.city}
                                </div>

                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="mt-auto inline-flex items-center justify-between w-full bg-blue-900/20 text-blue-500 px-6 py-3.5 md:py-4 rounded-2xl font-bold transition-all hover:bg-blue-600 hover:text-white group/btn text-sm md:text-base"
                                >
                                    Ver detalhes
                                    <ChevronRight className="w-4.5 h-4.5 md:w-5 md:h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Integration */}
            {selectedItem && (
                <PortfolioModal
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </section>
    );
};

export default PortfolioGrid;
