import React from "react";
import { Camera, Video, Instagram } from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
    Camera: Camera,
    Video: Video,
    Instagram: Instagram,
};

const Services = () => {
    return (
        <section className="py-24 bg-gray-50" id="servicos">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">NOSSOS SERVIÇOS</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.iconName as keyof typeof iconMap];
                        return (
                            <div
                                key={service.id}
                                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Icon size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {service.description.replace('imóveis', 'projetos e propriedades')}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
