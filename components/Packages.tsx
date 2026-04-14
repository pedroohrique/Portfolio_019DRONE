import React from "react";
import { Check } from "lucide-react";
import { packages } from "@/lib/data";

const Packages = () => {
    return (
        <section className="py-24 bg-[#0a0a0a]" id="pacotes">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">PACOTES</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative flex flex-col p-6 md:p-8 rounded-3xl transition-all duration-300 h-full ${pkg.highlight
                                ? "bg-blue-900/10 border-2 border-blue-600 shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] md:scale-105 z-10"
                                : "bg-[#111111] border border-white/5 shadow-md hover:shadow-xl hover:border-white/10"
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                                    MAIS POPULAR
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-6 tracking-widest text-center ${pkg.highlight ? "text-blue-500" : "text-gray-400"}`}>
                                {pkg.name}
                            </h3>

                            <div className="flex items-baseline justify-center gap-1 mb-8 min-h-[60px]">
                                {isNaN(Number(pkg.price)) ? (
                                    <span className="text-3xl font-black text-white tracking-tight text-center">{pkg.price}</span>
                                ) : (
                                    <>
                                        <span className="text-2xl font-bold text-gray-500">R$</span>
                                        <span className="text-6xl font-black text-white tracking-tight">{pkg.price}</span>
                                    </>
                                )}
                            </div>

                            <ul className="flex flex-col gap-4 mb-10 flex-grow">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium text-sm">
                                        <div className="bg-green-900/40 text-green-500 p-1 rounded-full shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={`https://wa.me/5519994411529?text=${encodeURIComponent(`Olá! Vim através do site e gostaria de saber mais sobre o pacote ${pkg.name}.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full py-4 rounded-xl font-bold transition-all text-center flex justify-center items-center gap-2 text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/30"
                            >
                                Quero este
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
