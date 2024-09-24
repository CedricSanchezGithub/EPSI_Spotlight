import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";
import {Input} from "@nextui-org/input";
import {Kbd} from "@nextui-org/kbd";
import {SearchIcon} from "@/components/icons.tsx";

export default function IndexPage() {

  const searchInput = (
      <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
      />
  );

  return (
      <DefaultLayout>
        <section>
          <div className="flex justify-between">
            <Card className="py-4 w-72	">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h2 className={"uppercase font-bold"}>Mon profil</h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </CardBody>
            </Card>
            <div>
              <div className={"mb-4 mx-4"}>{searchInput}</div>
              <Card className="p-4 mx-4">

                <CardHeader>
                  <h2 className={"uppercase font-bold"}>Mon Actualité</h2>
                </CardHeader>
                <Divider className="my-4" />
                <CardBody className={"items-center"}>
                  <iframe
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      height="315"
                      src="https://www.youtube.com/embed/ZjrQ11eSsJY"
                      title="YouTube video player"
                      width="560"
                  />
                </CardBody>
              </Card>
            </div>
            <Card className="py-4 w-72">
              <CardHeader>
                <h2 className={"uppercase font-bold"}>Vie des Campus</h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                <Link>
                  <p>- Evenement 1</p>
                </Link>
                <Link>
                  <p>- Evenement 2</p>
                </Link>
                <Link>
                  <p>- Evenement 3</p>
                </Link>
              </CardBody>
            </Card>
          </div>
        </section>
      </DefaultLayout>
  );
}
