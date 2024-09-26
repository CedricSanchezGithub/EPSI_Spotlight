import DefaultLayout from "@/layouts/default";
import {Button, Card, CardFooter, CardHeader, Image} from "@nextui-org/react";

export default function InfosUtiles() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Première Card Section */}
        <div className="mt-6">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none shadow-xl"
          >
            <Image
              alt="Woman listening to music"
              className="object-cover rounded-lg"
              height={300}
              src="https://sarcdprodstrapi.blob.core.windows.net/strapi-media/assets/MTP_6_99179ebd86.JPG"
              width={500}
            />
            <CardFooter className="justify-between before:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white/80 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-lg font-semibold text-white/90">CAMPUS EPSI MONTPELLIER</p>
              <Button
                as="a"
                href="https://visite-campus.epsi.fr/montpellier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-lg hover:bg-opacity-90 shadow-lg transition duration-300 ease-in-out"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Visite 360
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Deuxième Section : Cards NextUI */}
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-10">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Suivez le BDE pour plus d'évenements !</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://www.shutterstock.com/image-vector/bde-logo-design-simple-modern-600nw-2515959109.jpg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Planter un arbre pour Contribuer à la planète</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Créer la beauté comme une bête</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          
          {/* Card Aides de l'État */}
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-black/60 uppercase font-bold">Profitez des aides de l'état pour les étudiants/alternant</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-100 scale-50 -translate-y-6 object-cover"
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Republique-francaise-logo.svg/1200px-Republique-francaise-logo.svg.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny"></p>
              </div>
              <Button
                as="a"
                href="https://www.alternance-professionnelle.fr/aides-apprenti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tiny" 
                color="primary" 
                radius="full" 
                size="sm"
              >
                Savoir plus
              </Button>
            </CardFooter>
          </Card>

          {/* Card MYDIL */}
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60"></p>
            </CardHeader>
            <Image
              removeWrapper
              alt="MYDIL"
              className="z-0 w-full h-full object-cover"
              src="https://media.licdn.com/dms/image/D5622AQGVmE0y6xw4cg/feedshare-shrink_800/0/1702412885331?e=2147483647&v=beta&t=ZX7MD-u4YpF4NvHh3X0P8uiyqIlgtrgHft5lAsmuNL8"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="MYDIL"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">MY DIL</p>
                  <p className="text-tiny text-white/60">DIGITAL INNOVATION LAB.</p>
                </div>
              </div>
              <Button
                as="a"
                href="https://www.epsi.fr/innovation-lab/my-dil/"
                target="_blank"
                rel="noopener noreferrer"
                radius="full" 
                size="sm"
              >
                Savoir plus
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
