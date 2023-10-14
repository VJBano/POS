interface Sales {
    id:string;
    product_code:number;
    price:number;
    sold:number;
    total:number;
    created_at:string;
    created_by:string;
}

const initSales:Sales = {
    id:"",
    product_code:0,
    price:0,
    sold:0,
    total:0,
    created_at:"",
    created_by:"",
}

export {
    Sales,
    initSales
}