import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {useAuth0} from "@auth0/auth0-react";

export default function IndexProfile() {

    const { user } = useAuth0();

    return (
        <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src={user?.picture} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{user?.name}</h4>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    Développeur multiplateforme & IA
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">Promo : </p>
                    <p className=" text-default-400 text-small">DevIA</p>
                    <p className="text-default-400 text-small">Bachelor2024</p>
                </div>
            </CardFooter>
        </Card>
    );
}
