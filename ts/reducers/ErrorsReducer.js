export function printErrors(state={}, object){
    switch(object.type){
        case "error":
            return object.payload;
        default:
            return state;
    }
}