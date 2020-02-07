import Utils from "../Utils";

export function printErrors(state={}, object){
    switch(object.type){
        case "error":
                return [object.payload.toString()];
        default:
            return state;
    }
}
export function isLoggedIn(state={}, object){
    switch(object.type) {
        case "isLogged":
            return object.payload;
        default:
            return state;
    }
}