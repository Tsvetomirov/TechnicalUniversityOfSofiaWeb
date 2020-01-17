import * as React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Courses} from "./IndexElements/IndexElements";
import {staticContent, WindowResize} from "../../ts/actions/ReduxActions";
import Utils from "../../ts/Utils";
import LiveCounter from "./IndexElements/LiveCounter";
import {Testimonials} from "./IndexElements/Testimonials";
import WindowReducerObject from "../../ts/strictTypes/WindowReducersStrictTypes/WindowReducerObject";
import ViewType from "../../ts/strictTypes/WindowReducersStrictTypes/SubTypes/CompareViewTypes";
import StaticReducerTemplate from "../../ts/strictTypes/StaticReducerST/StaticReducerTemplate";
import StaticReducerNetworkTemplate from "../../ts/strictTypes/StaticReducerST/StaticReducerNetworkTemplate";
import StaticReducerNetworkInfoTemplate from "../../ts/strictTypes/StaticReducerST/StaticReducerNetworkInfoTemplate";
import StaticReducerCoursesTemplate from "../../ts/strictTypes/StaticReducerST/StaticReducerCoursesTemplate";
interface IndexProps{
    mainPageStaticReducer: StaticReducerTemplate;
    windowReducers: WindowReducerObject;
    contentActionCreator: ()=>{type:string, payload: boolean};
    windowActionCreator: ()=>{type:string, payload: boolean};
}
class Root extends React.Component<IndexProps>{

    constructor(props){
        super(props);
        this.props.contentActionCreator();
        this.props.windowActionCreator();
    }
    public render (){
        const StudentNetworks = (props): JSX.Element => {
            return(
                Utils.isNotNull(props) &&
                props.map((value :StaticReducerNetworkTemplate, key: number) =>
                        <div className="submenu" key={key}>
                            <h1>{value.name}</h1>
                            {value.info.map((value: StaticReducerNetworkInfoTemplate, key)=>
                                    <a key={key}
                                       href={value.website}
                                       target={"_blank"}
                                       className={"item"}>
                                            <img src={value.image}/>
                                            <h6>{value.content}</h6>
                                    </a>
                            )}
                        </div>
                    )
            );
        };
        return(
            <div className={this.props.windowReducers.viewType === ViewType.LANDSCAPE
                ? "body landscape"
                :"body portrait"}>
                <Header uicontext={true} windowReducer={this.props.windowReducers}/>
                <div id="portfolio" className="section md-padding bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="section-header text-center">
                                <h2 className="title">Courses</h2>
                            </div>
                                <div className={"courses-content"}>
                                    {Utils.isNotNull(this.props.mainPageStaticReducer.courses)
                                    && this.props.mainPageStaticReducer.courses.map(
                                        (value: StaticReducerCoursesTemplate, key:number) =>
                                            <Courses
                                                key={key}
                                                degree={value.degree}
                                                subjectName={value.subjectName}
                                                img={value.img}
                                                link={value.link}
                                            />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                <LiveCounter/>
                <div className="section md-padding bg-grey">
                    <div className="container">
                        <div className="row student-menu" id="student-menu">
                            <StudentNetworks props={this.props.mainPageStaticReducer.networks}/>
                        </div>
                    </div>
                </div>
                <div id="testimonial" className="section md-padding">
                    <div className="bg-img"
                         style={{backgroundImage: "url('../../images/testimonials/background3.webp')"}}>
                        <div className="overlay"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div id="testimonial-slider" className="owl-carousel owl-theme owl-loaded owl-drag">
                                    {Utils.isNotNull(this.props.mainPageStaticReducer.testimonials)&&
                                    <Testimonials testimonials={this.props.mainPageStaticReducer.testimonials}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {Utils.isNotNull(this.props.mainPageStaticReducer.erasmus) &&
                <section className="bg-secondary">
                    <div className="container">
                        <div className="row erasmus">
                            <div className="erasmus-message">
                                    <h3 className="title">{this.props.mainPageStaticReducer.erasmus[0].title}</h3>
                                    <div className="mb32">
                                        <p>{this.props.mainPageStaticReducer.erasmus[0].content}</p>
                                    </div>
                                    <a href="../../erasmus.php" className="btn btn-lg btn-filled">Erasmus +</a>
                            </div>
                            <div className="erasmus-image">
                                <img className="img-responsive js-lazy-image" id="erasmus-background"
                                     alt="Portfolio Section"
                                     src="../../images/erasmus.webp"/>
                            </div>
                        </div>
                    </div>
                </section>
                }
                <Footer windowsDimensions={this.props.windowReducers}/>
            </div>
        )
    }
}
export default connect((o: any, ownProps) =>{
    return({
        mainPageStaticReducer: o.mainPageStaticReducer,
        windowReducers: o.windowReducers,
    })
},
    (obj) => {
    return bindActionCreators({
        contentActionCreator: staticContent,
        windowActionCreator: WindowResize
    }, obj)}
    )(Root);