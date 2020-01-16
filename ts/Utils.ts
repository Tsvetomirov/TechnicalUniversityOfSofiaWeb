export default abstract class Utils{
    static getURLPageName(url){
        let array: string[]= url.split("/");
        return array.pop();
    }
    static isPromise(obj){
        return typeof obj.then === 'function';
    }

    static isNotNull(param){
        return param != undefined || param != null;
    }
    static isNull(param){
        return param === undefined || param == null;
    }

    static isNotEmpty(param){
        return param.length >= 1 && true;
    }

    static isEmpty(param){
        return param.length === 0 && true;
    }
}