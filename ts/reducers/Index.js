import {combineReducers, createStore} from "redux"
import {mainPageStaticReducer,activeSearch} from "./main.reducer"
import {WindowReducer} from "./WindowReducer"
import {AnimationReducer} from "./AnimationReducer"
import {inViewPort} from "./ElementReducers";
import {mobileMenuReducer} from "./MobileMenuReducer";
import {printErrors} from "./ErrorsReducer";
import {ServerReducer} from "./ServerReducer";
import {SliderReducer} from "./SliderReducer";
import {SliderContentReducer} from "./SliderContentReducer";

export const combinedReducers = combineReducers({
    mainPageStaticReducer: mainPageStaticReducer,
    active: activeSearch,
    windowReducers: WindowReducer,
    animationReducer: AnimationReducer,
    elementReducer: inViewPort,
    mobileMenuNavButton: mobileMenuReducer,
    printErrors: printErrors,
    serverReducer: ServerReducer,
    sliderReducer: SliderReducer,
    sliderContentReducer: SliderContentReducer
});

export const store = createStore(combinedReducers);