import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import NextTopLoader from "nextjs-toploader";

const roboto = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Speed Automac",
    description: "Bem-vindo",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`bg-gradient-to-b from-gray-50 to-gray-300 ${roboto.className}`}
            >
                <NextTopLoader />
                <Sidebar />
                {children}
            </body>
        </html>
    );
}
