import {useState} from 'react';
import {Select, SelectItem} from "@nextui-org/select";
import {Chip} from "@nextui-org/chip";
import {filterData} from "./filterData.ts";

// @ts-ignore
export default function Filter( { onFilterChange } ) {

    const [selectedKeys, setSelectedKeys] = useState(new Set([]));

    console.log(selectedKeys);

    // @ts-ignore
    const handleSelectionChange = (keys) => {
        setSelectedKeys(keys);
        onFilterChange(Array.from(keys));
    };

    return (
        <div className={"flex justify-center align-middle pt-4"}>
            <Select
                items={filterData}
                variant="bordered"
                isMultiline={true}
                selectionMode="multiple"
                placeholder="Affines tes recherches"
                labelPlacement="outside"
                selectedKeys={selectedKeys}
                onSelectionChange={handleSelectionChange}
                classNames={{
                    base: `mt-4`,
                    trigger: "min-h-12 px-3 py-2",
                }}
                renderValue={(items) => {
                    return (
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Chip key={item.key}>{item.data?.filter || 'Nom non disponible'}</Chip>
                            ))}
                        </div>
                    );
                }}
            >
                {(user) => (
                    <SelectItem key={user.filter} textValue={user.filter}>
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-tiny text-default-400">{user.filter}</span>
                            </div>
                        </div>
                    </SelectItem>
                )}
            </Select>
        </div>
    );
}