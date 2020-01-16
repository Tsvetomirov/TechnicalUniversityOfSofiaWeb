export function mobileMenuReducer(state={}, action){
    switch(action.type){
        case "mobileMenuNavigation":
            return !state;
        default: return false;
    }
}