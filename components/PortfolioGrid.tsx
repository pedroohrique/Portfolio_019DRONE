"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, ChevronRight, Plus } from "lucide-react";
import { portfolioData, Property } from "@/lib/data";
import PortfolioModal from "@/components/PortfolioModal";

const PortfolioGrid = () => {
    const [selectedItem, setSelectedItem] = useState<Property | null>(null);

    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">PORTFÓLIO</h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Confira alguns de nossos trabalhos realizados para o setor comercial e residencial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {portfolioData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-blue-600 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-xl"
                                >
                                    <Plus size={32} strokeWidth={3} />
                                </button>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 font-semibold mb-8">
                                    <MapPin size={18} className="text-blue-500" />
                                    {item.city}
                                </div>

                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="mt-auto inline-flex items-center justify-between w-full bg-blue-50 text-blue-600 px-6 py-4 rounded-2xl font-bold transition-all hover:bg-blue-600 hover:text-white group/btn"
                                >
                                    Ver detalhes
                                    <ChevronRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform" />
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
