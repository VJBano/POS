
interface ProductCategory {
    id:number;
    category_name:string;
}

const initProductCategory:ProductCategory = {
    id:0,
    category_name:"",
}

export {
    ProductCategory,
    initProductCategory
}