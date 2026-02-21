"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, X, MessageSquare } from "lucide-react";
import { Property } from "@/lib/data";

interface ModalProps {
    item: Property;
    onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: ModalProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row modal-scale z-10 border border-white/20">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-all sm:top-6 sm:right-6"
                >
                    <X size={24} />
                </button>

                {/* Media Side */}
                <div className="relative w-full md:w-3/5 h-[300px] md:h-auto overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                        <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                        <p className="text-white/80 flex items-center gap-1.5 font-medium">
                            <MapPin size={16} />
                            {item.location}
                        </p>
                    </div>
                </div>

                {/* Info Side */}
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                    <div className="hidden md:block mb-10">
                        <h2 className="text-3xl font-black text-gray-800 mb-4">{item.title}</h2>
                        <p className="text-gray-500 flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
                            <MapPin size={18} className="text-blue-600" />
                            {item.location}
                        </p>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <h4 className="text-xs font-black tracking-widest text-blue-600 uppercase">Descrição do Projeto</h4>
                        <p className="text-gray-600 leading-relaxed text-lg font-medium">
                            {item.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Resolução</span>
                                <span className="font-bold text-gray-700 uppercase">4K / 60FPS</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Equipamento</span>
                                <span className="font-bold text-gray-700 uppercase">DJI Mavic 3</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="https://wa.me/5519992805493"
                            target="_blank"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-100 transition-all flex items-center justify-center gap-3 group"
                        >
                            <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
                            Solicitar Orçamento
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
