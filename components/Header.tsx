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
        { name: "CONTATO", href: "/#contato" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5 shadow-sm"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tighter text-gray-800 leading-none">
                        019 <span className="text-blue-600">DRONE</span>
                    </span>
                    <span className="text-[10px] tracking-widest text-gray-400 font-medium uppercase mt-0.5">
                        IMAGENS AÉREAS
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors hover:text-blue-600 ${isActive(link.href) ? "text-blue-600" : "text-gray-600"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="https://wa.me/5519992805493" target="_blank" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all flex items-center gap-2">
                        ORÇAMENTO
                        <div className="bg-white/20 rounded px-1.5 py-0.5">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl py-6 px-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-lg font-semibold py-2 px-4 rounded-lg ${isActive(link.href) ? "bg-blue-50 text-blue-600" : "text-gray-700"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/5519992805493"
                        target="_blank"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-4 bg-green-600 text-white text-center py-4 rounded-xl text-lg font-bold shadow-lg"
                    >
                        SOLICITAR ORÇAMENTO
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
