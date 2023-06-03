import { Product } from "./product.model";

export interface Cart{
    products : Product[]
    name: string;
    sdt: string;
    note: string;
}