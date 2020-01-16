export function inViewPort(state={}, object) {
        switch (object.type) {
            case "observeElement":
                    const startHeight = document.body.getBoundingClientRect().top * (-1);
                    const elementInViewPortTop = object.payload.getBoundingClientRect().top;
                    const elementHeight = object.payload.getBoundingClientRect().height;
                    if (startHeight >= elementInViewPortTop || elementInViewPortTop < elementHeight) {
                        return true;
                    }
                break;
            default:
                return false;
        }
        return false;
}