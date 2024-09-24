import React from "react";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";

export default function IndexProfile() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-[340px]">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="./vite.svg" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Cédric Sanchez</h4>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
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
