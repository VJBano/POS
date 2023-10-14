interface User {
    id:string;
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    store_name:string;
    address:string;
    permit_no:string;
    contact_no:string;
}

const initUser:User = {
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    store_name:"",
    address:"",
    permit_no:"",
    contact_no:"",
}

export {
    User,
    initUser
}