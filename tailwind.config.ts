import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563eb", // blue-600
                    hover: "#1d4ed8",   // blue-700
                },
                whatsapp: {
                    DEFAULT: "#16a34a", // green-600
                    hover: "#15803d",   // green-700
                },
                brand: {
                    dark: "#1f2937",    // text-gray-800
                    muted: "#6b7280",   // text-gray-500
                }
            },
            maxWidth: {
                "7xl": "80rem",
            },
            borderRadius: {
                "xl": "1rem",
                "lg": "0.5rem",
            },
            boxShadow: {
                "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }
        },
    },
    plugins: [],
};
export default config;
