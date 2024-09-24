import {Card, CardBody, CardHeader} from "@nextui-org/card";

import DefaultLayout from "@/layouts/default";
import Filter from "@/components/filter/filter.tsx";
import LinkCards from "@/components/index/linkCards.tsx";
import CampusLifeCard from "@/components/campuslife/campuslife.tsx";
import IndexProfile from "@/components/profile/indexProfile.tsx";

export default function IndexPage() {

  return (
     <DefaultLayout>
        <section>
          <div className="flex justify-between">
            <Card className="py-4 w-72	">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <IndexProfile />
                </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Filter/>
              </CardBody>
            </Card>
            <div>
              <LinkCards/>
            </div>
            <CampusLifeCard />
          </div>
        </section>
      </DefaultLayout>

  );
}
