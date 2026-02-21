export interface Property {
    id: string;
    title: string;
    location: string;
    city: string;
    image: string;
    videoUrl?: string;
    description: string;
}

export const portfolioData: Property[] = [
    {
        id: "1",
        title: "Casa Alto Padrão",
        location: "São Paulo - SP",
        city: "São Paulo",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop",
        description: "Cobertura completa com fotos em 4k e vídeo cinematográfico de 60 segundos destacando a área de lazer e arquitetura moderna.",
    },
    {
        id: "2",
        title: "Condomínio Residencial",
        location: "Campinas - SP",
        city: "Campinas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop",
        description: "Imagens aéreas para acompanhamento de obra e marketing de lançamento de condomínio de luxo com foco nas áreas comuns.",
    },
    {
        id: "3",
        title: "Terreno à Venda",
        location: "Sorocaba - SP",
        city: "Sorocaba",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop",
        description: "Mapeamento aéreo completo de terreno para loteamento, destacando a topografia e localização privilegiada.",
    },
    {
        id: "4",
        title: "Mansão Moderna",
        location: "Barueri - SP",
        city: "Alphaville",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop",
        description: "Vídeo Reels dinâmico e fotos HDR para anúncio de venda rápida em portais de venda.",
    },
    {
        id: "5",
        title: "Edifício Corporativo",
        location: "Santo André - SP",
        city: "Santo André",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
        description: "Fachada em ângulo superior e entorno urbano para apresentação institucional de empresa.",
    },
    {
        id: "6",
        title: "Residência de Campo",
        location: "Atibaia - SP",
        city: "Atibaia",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1365&auto=format&fit=crop",
        description: "Destaque para a integração com a natureza e vista panorâmica da serra.",
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
    }
];

export const packages = [
    {
        id: "basico",
        name: "BÁSICO",
        price: "350",
        features: ["10 Fotos Aéreas", "Entrega 48h"],
        highlight: false,
    },
    {
        id: "completo",
        name: "COMPLETO",
        price: "600",
        features: ["10 Fotos + Vídeo 40s", "Edição Profissional"],
        highlight: true,
    },
    {
        id: "premium",
        name: "PREMIUM",
        price: "900",
        features: ["Foto + Vídeo + Reels", "Entrega 72h"],
        highlight: false,
    }
];
