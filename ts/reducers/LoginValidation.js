export function printErrors(state={}, object){
    switch(object.type){
        case "error":
                return [object.payload.toString()];
        default:
            return state;
    }
}
export function UserData(state={}, object){
    switch(object.type) {
        case "getData":
            return object.payload;
        default:
            return state;
    }
}