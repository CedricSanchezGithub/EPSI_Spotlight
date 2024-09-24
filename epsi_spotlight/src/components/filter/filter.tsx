import {Select, SelectItem} from "@nextui-org/select";
import {Chip} from "@nextui-org/chip";
import {filterData} from "./filterData.ts";
import {Tooltip} from "@nextui-org/tooltip";

export default function Filter() {


    return (
        <div className={"flex justify-center align-middle pt-4"}>

            <Select
                items={filterData}
                variant="bordered"
                isMultiline={true}
                selectionMode="multiple"
                placeholder="Affines tes recherches"
                labelPlacement="outside"
                classNames={{
                    base: `mt-4`,
                    trigger: "min-h-12 px-3 py-2",

                }}
                renderValue={(items) => {
                    return (
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Chip key={item.key}>{item.data?.filter || 'Nom non disponible'}
                                </Chip>
                            ))}
                        </div>
                    );
                }}
            >
                {(user) => (
                    <SelectItem key={user.id} textValue={user.filter}>
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-tiny text-default-400">{user.filter}</span>
                            </div>
                        </div>
                    </SelectItem>
                )}
            </Select>
            <Tooltip
                content={<div className="px-1 py-2">
                    <div className="text-small font-bold">Pourquoi?</div>
                    <div className="text-tiny">Ce filtre permet d'affiner ton actualité  <br />
                        selon tes préférences </div>
                </div>}>
                <Chip color="default">?</Chip>
            </Tooltip>
        </div>
    );
}
