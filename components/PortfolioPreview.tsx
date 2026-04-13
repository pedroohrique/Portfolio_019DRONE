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
        <section className="py-24 bg-white" id="portfolio-preview">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">PORTFÓLIO</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {previewItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-blue-600 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-xl"
                                >
                                    <Plus size={32} strokeWidth={3} />
                                </button>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-6">
                                    <MapPin size={16} className="text-blue-500" />
                                    {item.location}
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

                <div className="text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-600 px-10 py-4 rounded-xl text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
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
