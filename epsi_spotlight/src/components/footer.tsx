import {Card} from "@nextui-org/card";

const Footer = () => {
    return (
        <footer>
            <Card className={"py-6 mt-8"}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">Groupe 25</h3>
                            <p className="text-sm">Cédric • Julien • Noé • Amine</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-sm">Workshop Bachelor 2024</p>
                            <p className="text-sm">EPSI Montpellier</p>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-xs text-gray-400">
                        © {new Date().getFullYear()} Tous droits réservés
                    </div>
                </div>
            </Card>
        </footer>
    );
};

export default Footer;