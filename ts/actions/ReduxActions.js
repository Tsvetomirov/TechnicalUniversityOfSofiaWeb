import {store} from "../reducers";
export const staticContent = () => {
  return(
      {
          type:"StaticContent",
          payload: true
      }
  )
};
export const activeSlide = (sliderNumber) => {
    return(
        {
            type:"activeSlide",
            payload: sliderNumber
        }
    )
};
export const loadSlideContent = () => {
    return(
        {
            type:"loadSlideContent",
            payload: true
        }
    )
};
export const SearchActions = () => {
        return({
            type: "activateSearch",
            payload: true
        });
    };

export const WindowResize = () => {
    return({
        type: "resize",
        payload: true
    })
};

export const Counter = (index) => {
    return ({
        type: "counter",
        payload: index
    })
};

export function InView(element) {
    return({
        type:"observeElement",
        payload: element
    })
}
export function mobileMenuButton(){
    return({
        type:"mobileMenuNavigation",
        payload: true
    })
}
export function errorsAction(apiResult){
    return({
        type:"error",
        payload:apiResult
    })
}

export function userDataAction(){
    return({
        type:"userData"
    })
}
window.addEventListener('resize',()=>store.dispatch(WindowResize()));
window.addEventListener('onload',()=>store.dispatch(WindowResize()));

