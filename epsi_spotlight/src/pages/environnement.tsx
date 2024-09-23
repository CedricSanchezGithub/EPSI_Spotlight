import DefaultLayout from "@/layouts/default.tsx";
import {title} from "@/components/primitives.ts";

export default function Environnement() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Environnement</h1>
                </div>
            </section>
        </DefaultLayout>
    );
}