import Utils from "./Utils"
export default class Logger {
    public static log(parameters) {
        console.log(parameters);
        return Utils.isNotNull(parameters) && true;
    }
}