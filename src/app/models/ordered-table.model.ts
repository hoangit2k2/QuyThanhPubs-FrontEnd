import { ItemProduct } from "./item.model";

export interface OrderedTable{
    name: string;
    phone: string;
    user?: string;
    orderedProducts : ItemProduct[] ;
    note: string;
    isSaved ?: boolean;
}