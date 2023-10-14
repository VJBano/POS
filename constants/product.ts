interface Product {
    id:string;
    product_code:number;
    product_name:string;
    price:number;
    category:number;
    stock:number;
    sold:number;
    created_by:string;
    created_at:string;
    updated_at:string;

}

const initProduct:Product = {
    id:"",
    product_code:0,
    product_name:"",
    price:0,
    category:0,
    stock:0,
    sold:0,
    created_by:"",
    created_at:"",
    updated_at:"",
}

export {
    Product,
    initProduct
}