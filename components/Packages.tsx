import React from "react";
import { Check } from "lucide-react";
import { packages } from "@/lib/data";

const Packages = () => {
    return (
        <section className="py-24 bg-white" id="pacotes">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">PACOTES</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative flex flex-col p-10 rounded-3xl transition-all duration-300 ${pkg.highlight
                                ? "bg-blue-50 border-2 border-blue-600 shadow-2xl scale-105 z-10"
                                : "bg-gray-50 border border-gray-100 shadow-md hover:shadow-xl"
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                                    MAIS POPULAR
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-6 tracking-widest text-center ${pkg.highlight ? "text-blue-600" : "text-gray-500"}`}>
                                {pkg.name}
                            </h3>

                            <div className="flex items-baseline justify-center gap-1 mb-8">
                                <span className="text-2xl font-bold text-gray-400">R$</span>
                                <span className="text-6xl font-black text-gray-800 tracking-tight">{pkg.price}</span>
                            </div>

                            <ul className="flex flex-col gap-5 mb-10 min-h-[120px]">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600 font-semibold">
                                        <div className="bg-green-100 text-green-600 p-1 rounded-full">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
