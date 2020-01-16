import Utils from "../Utils"
import Logger from "../Logger"
export function WindowReducer(state={}, object) {
    if(Utils.isNotNull(object)) {
        switch (object.type) {
            case "resize":
                let objectToReturn = {
                    height: window.outerHeight,
                    width: window.outerWidth,
                    viewType: (window.outerHeight / window.outerWidth) > 1 ? "PORTRAIT" : "LANDSCAPE"
                };
                Logger.log("Resolution "+objectToReturn.height+" x "+ objectToReturn.width+" " + objectToReturn.viewType);
                return objectToReturn;
            default:
                return state;
        }
    }
}