import { DeliveryProductSatus } from "./delivery-product-status.enum";
import { Product } from "./product.model";

export interface ItemProduct{
    product: Product;
    quantity: number;
    status: DeliveryProductSatus
}