import { LucideMenu } from "lucide-react";

export function Header() {
    return (
        <main className="fixed p-3 md:h-screen rounded-r-sm flex flex-col bg-blue-950 ">
            <LucideMenu className="text-gray-50" />
        </main>
    )
}