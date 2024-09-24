import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";
import React from "react";
import {Image} from "@nextui-org/image";

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
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">NextUI</p>
                </Link>
            </footer>
        </div>
    );
}
