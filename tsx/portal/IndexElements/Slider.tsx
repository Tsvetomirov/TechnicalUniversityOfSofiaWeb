import * as React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {loadSlideContent, activeSlide} from "../../../ts/actions/ReduxActions";
import Utils from "../../../ts/Utils";
interface SliderProps{
    sliderContentReducer: any
    getSliderContents: ()=>{}
    currentSlide: any
    currentSlideAction: (sliderNumber: number)=>{}
}
class Slider extends React.Component<SliderProps>{
    constructor(props){
        super(props);
        this.props.getSliderContents();
        this.props.currentSlideAction(Utils.isEmptyObject(this.props.currentSlide) && 0);
    }

    handleRightClick (){
        this.props.currentSlideAction(this.props.currentSlide >=(Object.keys(this.props.sliderContentReducer).length - 1) ? 0 : (this.props.currentSlide+1));
    }
    handleLeftClick(){
        this.props.currentSlideAction(this.props.currentSlide <=0 ? 0 : (this.props.currentSlide-1))
    }
    render(){
        return(
            <div id="slider_container">
                <div className="slider_inner_container">
                    {Utils.isNotEmpty(this.props.sliderContentReducer) && this.props.sliderContentReducer.map((value,key: number)=>{
                        return <div className={
                            key === (Utils.isNull(this.props.currentSlide)
                            ? 0 : this.props.currentSlide)
                            ? "slider active"
                            :"slider"}
                                    data-image_id={value.imageID} key={key}>
                                <div className="slider_title">
                                    <div className="slider_overlay"/>
                                    <div className="slider_overlay_button">{value.buttonText}</div>
                                    <p className="fontToFit">{value.slideText}</p>
                                </div>
                                <img src={value.slideImage} alt={""}/>
                            </div>
                    })}
                    <div className="slider_nav_menu">
                        <div id="button_left"
                             onClick={this.handleLeftClick.bind(this)}>
                            <i className="fas fa-chevron-left"/>
                        </div>
                        {Utils.isNotEmpty(this.props.sliderContentReducer) && this.props.sliderContentReducer.map((value,key: number)=>{
                            return <div className={
                                key === (Utils.isNull(this.props.currentSlide)
                                    ? 0 : this.props.currentSlide)
                                    ? "slider_pictures active"
                                    :"slider_pictures"}
                                        data-image_id={value.imageID} key={key}>
                                <img src={value.slideImage} alt={""}/>
                            </div>

                        })}
                        <div id="button_right" onClick={this.handleRightClick.bind(this)}><i className="fas fa-chevron-right"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((mapStateToPops)=>{return{
    sliderContentReducer: mapStateToPops.sliderContentReducer,
    currentSlide: mapStateToPops.sliderReducer
}},(mapDispatchToProps)=>{return bindActionCreators({
    getSliderContents: loadSlideContent,
    currentSlideAction: activeSlide
},mapDispatchToProps)})(Slider)