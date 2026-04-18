import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "019 DRONE | Imagens Aéreas Profissionais",
    description: "Fotos e vídeos com drone para anúncios e projetos de alto padrão. Valorize seu empreendimento com imagens cinematográficas.",
    keywords: ["drone", "imagens aéreas", "fotografia", "vídeo", "imobiliário", "019 drone"],
    authors: [{ name: "019 DRONE" }],
    openGraph: {
        title: "019 DRONE | Imagens Aéreas Profissionais",
        description: "Fotos e vídeos com drone para anúncios e projetos de alto padrão.",
        url: "https://019drone.com.br",
        siteName: "019 DRONE",
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "019 DRONE | Imagens Aéreas Profissionais",
        description: "Fotos e vídeos com drone para anúncios e projetos de alto padrão.",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className="antialiased bg-[#0a0a0a] text-gray-200">
                <Header />
                <main className="pt-20">
                    {children}
                </main>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
