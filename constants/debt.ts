
interface Debt {
    id:string;
    name:string;
    deb_product:string;
    total:number;
    balance:number;
    paid:boolean;
    created_by:string;
    created_at:string;
}

const initDebt:Debt = {
    id:"",
    name:"",
    deb_product:"",
    total:0,
    balance:0,
    paid:false,
    created_by:"",
    created_at:"",
}

export  {
    Debt,
    initDebt
}