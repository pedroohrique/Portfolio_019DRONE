import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ChevronRight } from "lucide-react";
import { portfolioData } from "@/lib/data";

const PortfolioPreview = () => {
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
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-6">
                                    <MapPin size={16} className="text-blue-500" />
                                    {item.location}
                                </div>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-blue-700 hover:gap-3"
                                >
                                    Ver portfólio
                                    <ChevronRight size={16} />
                                </Link>
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
        </section>
    );
};

export default PortfolioPreview;
