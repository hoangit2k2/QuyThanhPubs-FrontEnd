export const tableOrderedOfUser = {
    id: 4,
    name: "Ban cua Hieu",
    phone: "0776274144",
    note: "No",
    status: "serving",
    user : "admin",
    productsOrdered: [
        {
            product:  {
                id: 17,
                name: "Mi xao",
                description: "Giá rẻ",
                price: 30000,
                image: "https://res.cloudinary.com/dnhdgo0s3/image/upload/v1685520012/mixao_pydubd.jpg",
            },
            quantity: 10,
            status: "not-yet-delivered"
        },
        {
            product:  {
                id: 18,
                name: "Ca Kho",
                description: "Giá rẻ",
                price: 20000,
                image: "https://res.cloudinary.com/dnhdgo0s3/image/upload/v1685519544/cabachi_etprxl.jpg",
            },
            quantity: 10,
            status: "not-yet-delivered"
        },
        
    ]
}