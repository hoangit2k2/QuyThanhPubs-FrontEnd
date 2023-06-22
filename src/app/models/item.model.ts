import { DeliveryProductSatus } from "./delivery-product-status.enum";
import { Product } from "./product.model";

export interface ItemProduct{
    id?: number|string | null;
    product: Product;
    quantity: number;
    status: DeliveryProductSatus
}