
interface Logs {
    id:string;
    log_type:string;
    log_name:string;
    created_at:string;
}

const initLogs:Logs = {
    id:"",
    log_type:"",
    log_name:"",
    created_at:"",
}

export {
    Logs,
    initLogs
}