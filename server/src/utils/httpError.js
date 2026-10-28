export function httpError(status, mnessage){
    const err = new Error(message);
    err.status = status;
    return err;
    
}