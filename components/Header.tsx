"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CheckCircle } from "lucide-react";

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "INÍCIO", href: "/" },
        { name: "PORTFÓLIO", href: "/portfolio" },
        { name: "SERVIÇOS", href: "/#servicos" },
        { name: "SOBRE", href: "/sobre" },
        { name: "CONTATO", href: "/#contato" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/95 shadow-md py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col">
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white leading-none">
                        019 <span className="text-blue-500">DRONE</span>
                    </span>
                    <span className="text-[8px] md:text-[10px] tracking-widest text-gray-500 font-medium uppercase mt-0.5">
                        IMAGENS AÉREAS
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors hover:text-blue-500 ${isActive(link.href) ? "text-blue-500" : "text-gray-300"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link 
                        href="https://wa.me/5519994411529" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all flex items-center gap-2"
                    >
                        ORÇAMENTO
                        <div className="bg-white/20 rounded px-1.5 py-0.5">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 shadow-2xl py-8 px-6 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-xl font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 ${isActive(link.href) ? "bg-blue-600/10 text-blue-500" : "text-gray-300 active:bg-white/5"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/5519994411529"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-5 rounded-2xl text-xl font-black shadow-xl shadow-green-900/20 active:scale-95 transition-all"
                    >
                        SOLICITAR ORÇAMENTO
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
