
interface DebtProduct {
    id:string;
    product_name:string;
    price:number;
    created_by:string;
    created_at:string;
}

const initDebtProduct:DebtProduct = {
    id:"",
    product_name:"",
    price:0,
    created_by:"",
    created_at:"",
}

export {
    DebtProduct,
    initDebtProduct
}