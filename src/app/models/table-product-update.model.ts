export interface ProductUpdate{
    tableProductId: number|string|null | undefined;
    quantity: number;
    status: string;
    product_id: number;
}

export interface TableProductUpdate{
    nameTable: string;
    phone?: string;
    updateProductDto: ProductUpdate[]
}