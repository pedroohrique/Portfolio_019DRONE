"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ChevronRight, Plus } from "lucide-react";
import { portfolioData, Property } from "@/lib/data";
import PortfolioModal from "@/components/PortfolioModal";

const PortfolioPreview = () => {
    const [selectedItem, setSelectedItem] = useState<Property | null>(null);
    const previewItems = portfolioData.slice(0, 3);

    return (
        <section className="py-24 bg-[#0a0a0a]" id="portfolio-preview">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">PORTFÓLIO</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {previewItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-[#111111] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-white/10"
                        >
                            <div className="relative h-56 md:h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 backdrop-blur-sm text-blue-500 p-4 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-100 md:scale-50 md:group-hover:scale-100 shadow-xl"
                                >
                                    <Plus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                                </button>
                            </div>
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                                <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium mb-6">
                                    <MapPin size={16} className="text-blue-500" />
                                    {item.location}
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

                <div className="text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 border-2 border-white/10 text-gray-300 px-10 py-4 rounded-xl text-lg font-bold hover:border-blue-500 hover:text-blue-500 transition-all"
                    >
                        Ver portfólio completo
                        <ChevronRight size={20} />
                    </Link>
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

export default PortfolioPreview;
