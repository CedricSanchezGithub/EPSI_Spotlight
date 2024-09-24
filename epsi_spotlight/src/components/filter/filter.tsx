import {Select, SelectItem} from "@nextui-org/select";
import {Chip} from "@nextui-org/chip";
import {Avatar} from "@nextui-org/avatar";
import {users} from "./data";

export default function Filter() {


    return (
        <Select
            items={users}
            variant="bordered"
            isMultiline={true}
            selectionMode="multiple"
            placeholder="Affines tes recherches"
            labelPlacement="outside"
            classNames={{
                base: ` ${"mb-4"}`,
                trigger: "min-h-12",

            }}
            renderValue={(items) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <Chip key={item.key}>{item.data?.name || 'Nom non disponible'}
                            </Chip>
                        ))}
                    </div>
                );
            }}
        >
            {(user) => (
                <SelectItem key={user.id} textValue={user.name}>
                    <div className="flex gap-2 items-center">
                        <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                        <div className="flex flex-col">
                            <span className="text-small">{user.name}</span>
                            <span className="text-tiny text-default-400">{user.email}</span>
                        </div>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
}