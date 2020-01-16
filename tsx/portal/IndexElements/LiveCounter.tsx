import * as React from 'react';
import {connect} from 'react-redux';
import {Counter, InView} from "../../../ts/actions/ReduxActions";
import {bindActionCreators} from "redux";
import Utils from "../../../ts/Utils";

interface LiveCounterProps{
    animationReducer: any;
    inViewPort: any;
    inView: any;
    counter: any;
}
class LiveCounter extends React.Component<LiveCounterProps> {
    public readonly selector;
    private listener;
    private staticReducerValues;
    constructor(props){
        super(props);
        this.selector = React.createRef();
    }
    counter(arrayNumbers: number[]) {
        let start = [1,1,1,1];
        let timer=[];
        this.staticReducerValues.map((values,key)=>{
            if(start[key] < values.integer) {
                timer[key] = setInterval(
                    ()=>{
                        start[key] >= values.integer
                            ? clearInterval(timer[key])
                            : start[key]++;
                        this.props.counter(start);
                    }, 20)
            }
        });
    }
    componentDidUpdate(prevProps: Readonly<LiveCounterProps>, prevState: Readonly<{}>, snapshot?: any): void {
        this.props.inViewPort && window.removeEventListener("scroll", this.listener);
        this.props.inViewPort && this.counter(this.props.animationReducer);
    }
    componentDidMount(): void {
        this.staticReducerValues = this.props.animationReducer;
        this.listener = () =>{return this.props.inView(this.selector.current)};
        window.addEventListener("scroll", this.listener);
    }
    render(){
        return(
            <div id="numbers" className="section sm-padding" ref={this.selector}>
                <div className="bg-img" style={{backgroundImage:"url('/images/TU-%20Sofia%20Library.webp')"}}>
                    <div className="overlay"/>
                </div>
                <div className="container">
                    <div className="row">
                        {Utils.isNotNull(this.props.animationReducer) &&
                        this.props.animationReducer.map((value:{name: string, integer:number, icon: string}, key)=>{
                            return(
                                <div key={key} className="col-sm-3 col-xs-6">
                                    <div className="number">
                                        <i className={value.icon}/>
                                        <h3 className="white-text"><span className="counter">{value.integer}</span></h3>
                                        <span className="white-text text">{value.name}</span>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((o) => {
    return({
        animationReducer: o.animationReducer,
        inViewPort: o.elementReducer
    })
},
    (dispatch) => {
    return bindActionCreators({
        counter: Counter,
        inView: InView
    }, dispatch);
    })(LiveCounter)