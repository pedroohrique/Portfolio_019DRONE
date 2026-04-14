"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, X, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "@/lib/data";

interface ModalProps {
    item: Property;
    onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: ModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-[#111111] w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row modal-scale z-10 border border-white/5">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-all sm:top-6 sm:right-6"
                >
                    <X size={24} />
                </button>

                {/* Media Side */}
                <div className="relative w-full md:w-3/5 h-[300px] md:min-h-[500px] md:h-auto overflow-hidden bg-black flex items-center justify-center">
                    {item.videoUrl ? (
                        <iframe
                            className="w-full h-full min-h-[300px] md:min-h-full"
                            src={item.videoUrl.replace("watch?v=", "embed/")}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <Image
                                src={gallery[currentImageIndex]}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                            {gallery.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20" onClick={(e) => e.stopPropagation()}>
                                        {gallery.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(idx);
                                                }}
                                                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent md:hidden pointer-events-none z-10">
                        <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                        <p className="text-white/80 flex items-center gap-1.5 font-medium">
                            <MapPin size={16} />
                            {item.location}
                        </p>
                    </div>
                </div>

                {/* Info Side */}
                <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col overflow-y-auto">
                    <div className="hidden md:block mb-10">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">{item.title}</h2>
                        <p className="text-gray-400 flex items-center gap-2 font-bold text-xs md:text-sm tracking-widest uppercase">
                            <MapPin size={18} className="text-blue-500" />
                            {item.location}
                        </p>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div className="md:hidden">
                             <h2 className="text-2xl font-black text-white mb-2">{item.title}</h2>
                             <p className="text-gray-400 flex items-center gap-2 font-bold text-xs tracking-widest uppercase mb-6">
                                <MapPin size={14} className="text-blue-500" />
                                {item.location}
                            </p>
                        </div>

                        <h4 className="text-[10px] md:text-xs font-black tracking-widest text-blue-500 uppercase">Descrição do Projeto</h4>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium">
                            {item.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                            <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                                <span className="block text-[8px] md:text-[10px] font-bold text-gray-500 uppercase mb-1">Resolução</span>
                                <span className="font-bold text-gray-200 uppercase text-xs md:text-base">4K / 60FPS</span>
                            </div>
                            <div className="bg-white/5 p-3 md:p-4 rounded-2xl border border-white/5">
                                <span className="block text-[8px] md:text-[10px] font-bold text-gray-500 uppercase mb-1">Equipamento</span>
                                <span className="font-bold text-gray-200 uppercase text-xs md:text-base">DJI AIR 3S</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12">
                        <Link
                            href="https://wa.me/5519992805493?text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es."
                            target="_blank"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-green-900/20 transition-all flex items-center justify-center gap-3 group"
                        >
                            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                            Solicitar Orçamento
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
