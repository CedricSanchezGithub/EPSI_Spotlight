import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image";
import {links} from "./campusLifeData.ts"

const CampusLifeCard = () => {


    return (
        <Card className="w-72">
            <CardHeader className={"p-0 "}>

                    <Image
                        alt="Vie au campus"
                        className="object-cover"
                        src="./campus.png"
                        width={"100%"}
                        height={"100%"}
                    />
            </CardHeader>
            <CardBody className="overflow-hidden">
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">
                    Articles
                </h3>
                <div className="space-y-2">
                    {links.map((link, index) => (
                        <div key={index} className="relative overflow-hidden whitespace-nowrap">
                            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent z-10"></div>
                            <Link
                                isExternal
                                href={link.href}
                                className="block truncate pr-8 text-left"
                            >
                                {link.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default CampusLifeCard;