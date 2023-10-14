interface Expenses {
    id:string;
    description:string;
    amount:number;
    created_at:string;
    created_by:string;
}

const initExpenses:Expenses = {
    id:"",
    description:"",
    amount:0,
    created_at:"",
    created_by:"",
}

export {
    Expenses,
    initExpenses
}