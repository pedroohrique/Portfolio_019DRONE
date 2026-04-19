export interface Property {
    id: string;
    title: string;
    location: string;
    city: string;
    image: string;
    videoUrl?: string;
    description: string;
    gallery?: string[];
}

export const portfolioData: Property[] = [
    {
        id: "5",
        title: "Edifício Corporativo",
        location: "Galleria Office Park",
        city: "Campinas",
        image: "https://img.youtube.com/vi/sg9oeJ3a7-Y/maxresdefault.jpg", 
        videoUrl: "https://www.youtube.com/watch?v=sg9oeJ3a7-Y",
        description: "Fachada em ângulo superior e entorno urbano para apresentação institucional de empresa.",
    },
    {
        id: "1",
        title: "Monitoramento de Obras e Construções",
        location: "São Paulo - SP",
        city: "São Paulo",
        image: "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776105191/dji_fly_20250901_173530_295_1756758953390_photo_optimized_ytf5c6.jpg",
        description: "Acompanhamento aéreo detalhado, fornecendo imagens de alta resolução para relatórios gerenciais e acompanhamento de evolução do projeto.",
        gallery: [
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776105191/dji_fly_20250901_173530_295_1756758953390_photo_optimized_ytf5c6.jpg",
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776105191/dji_fly_20250901_173810_305_1756759099860_photo_optimized_gyiiou.jpg",
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776629287/ktstsvcua3g8dv7y5how.jpg",
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776105683/DJI_20260310210017_0129_D-2_lhqamp.jpg",
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776629220/srd7pw01nce2w9d5qrrm.jpg",
            "https://res.cloudinary.com/deazur8hn/image/upload/f_auto,q_auto,w_1600/v1776629281/jc9b4lgxhrnbymkogvuw.jpg"
        ]
    },
    {
        id: "2",
        title: "Cinematográficos",
        location: "Florença - Itália",
        city: "Florença",
        image: "https://img.youtube.com/vi/4FHkZE29hHk/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=4FHkZE29hHk",
        description: "Imagens aéreas capturadas com drone DJI Air 3S destacando a beleza e arquitetura da Catedral Duomo.",
    },
    {
        id: "7",
        title: "Torre do Castelo",
        location: "Campinas - SP",
        city: "Campinas",
        image: "https://img.youtube.com/vi/BjOj6uQJkJQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/watch?v=BjOj6uQJkJQ",
        description: "Imagens aéreas da histórica Torre do Castelo em Campinas, capturadas com drone destacando sua arquitetura marcante e a visão 360º da região.",
    }
];

export const services = [
    {
        id: 1,
        title: "Fotos Aéreas",
        description: "Imagens aéreas de alta qualidade para destacar propriedades e negócios.",
        iconName: "Camera",
    },
    {
        id: 2,
        title: "Vídeos Cinematográficos",
        description: "Vídeos com imagens aéreas e edição profissional para anúncios.",
        iconName: "Video",
    },
    {
        id: 3,
        title: "Reels para Instagram",
        description: "Vídeos verticais envolventes para destacar propriedades nas redes sociais.",
        iconName: "Instagram",
    },
    {
        id: 4,
        title: "Mapeamento Aéreo",
        description: "Mapeamento de terrenos, imóveis e estruturas com drones, gerando imagens precisas para análise e planejamento.",
        iconName: "Satellite",
    }
];

export const packages = [
    {
        id: "basico",
        name: "BÁSICO",
        price: "350",
        features: ["20 a 30 Fotos Aéreas", "Entrega 48h"],
        highlight: false,
    },
    {
        id: "completo",
        name: "COMPLETO",
        price: "600",
        features: ["20 a 30 Fotos + Vídeo 40s", "Edição Profissional"],
        highlight: true,
    },
    {
        id: "premium",
        name: "PREMIUM",
        price: "900",
        features: ["Foto + Vídeo + Reels", "Entrega 72h"],
        highlight: false,
    },
    {
        id: "personalizado",
        name: "PERSONALIZADO",
        price: "Sua Escolha",
        features: ["Serviços sob medida", "Cobertura de Eventos", "Personalização total"],
        highlight: false,
    }
];
