
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import { Link } from "@nextui-org/link";

export default function IndexPage() {
  return (
      <DefaultLayout>
        <section>
          <div className="flex justify-between" >
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
            <Card className="p-4 mx-4 w-full">
              <CardHeader>
                <h2 className={"uppercase font-bold"}>Mon Actualité</h2>
              </CardHeader>
            </Card>
            <Card className="py-4 w-72">
              <CardHeader><h2 className={"uppercase font-bold"}>
                Vie des Campus
              </h2>
              </CardHeader>
              <CardBody className="overflow-visible py-2 text-center">
                <Link><p>- Evenement 1</p></Link>
                <Link><p>- Evenement 2</p></Link>
                <Link><p>- Evenement 3</p></Link>
              </CardBody>
            </Card>
          </div>
        </section>
      </DefaultLayout>
  );
}
