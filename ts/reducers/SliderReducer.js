export function SliderReducer(state={}, object){
    switch(object.type){
        case "activeSlide":
            return object.payload;
        default:
            return state;
    }
}