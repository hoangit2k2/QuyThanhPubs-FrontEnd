import { ItemProduct } from "./item.model";
import { TableStatus } from "./table-status.model";

export interface OrderedTableOfUser{
    id: number;
    name: string;
    phone?: string;
    user?: string;
    note: string;
    status?: TableStatus;
    tableProducts: ItemProduct[];
}