import {Navbar} from "@/components/navbar";
import React from "react";
import {Image} from "@nextui-org/image";
import Footer from "@/components/footer.tsx";

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <div className={"flex justify-center w-full"}>
                <Image
                    src={"./banniere.svg"}/>
            </div>
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
                {children}
            <Footer />
            </main>
        </div>
    );
}
