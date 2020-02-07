export default abstract class Utils{
    static getURLPageName(url){
        let array: string[]= url.split("/");
        return array.pop();
    }
    static getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    static isPromise(obj){
        return typeof obj.then === 'function';
    }
    static isEmptyObject(obj){
        return Object.entries(obj).length === 0;
    }
    static isNotEmptyObject(obj){
        return Object.entries(obj).length >= 1;
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