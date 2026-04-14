import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "019 DRONE | Imagens Aéreas Profissionais",
    description: "Fotos e vídeos com drone para anúncios e projetos de alto padrão. Valorize seu empreendimento com imagens cinematográficas.",
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
