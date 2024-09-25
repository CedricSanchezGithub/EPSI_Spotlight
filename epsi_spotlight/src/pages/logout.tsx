import {title} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Link} from "@nextui-org/link";

export default function LogoutPage() {

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Vous êtes correctement déconnecté.</h1>
                    <br/>
                    <Link href="/" className="text-primary hover:underline mt-7">
                        Retour immédiat à l'Accueil
                    </Link>
                </div>
            </section>
        </DefaultLayout>
    );
}