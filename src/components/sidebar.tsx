import { LucideMenu } from "lucide-react";

export function Sidebar() {
    return (
        <main className="fixed p-3 md:h-screen rounded-r-sm flex flex-col bg-blue-950 ">
            <LucideMenu className="text-gray-50 md:hidden" />
        </main>
    )
}