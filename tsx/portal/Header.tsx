import * as React from 'react';
import Utils from '../../ts/Utils';
import SearchIcon from '../common/SearchIcon';
import NavMenuButton from "./Mobile/NavigationMenu";
import {connect} from 'react-redux';
import ViewType from "../../ts/strictTypes/WindowReducersStrictTypes/SubTypes/CompareViewTypes";
import WindowReducerObject from "../../ts/strictTypes/WindowReducersStrictTypes/WindowReducerObject";
import {bindActionCreators} from "redux";
import {userDataAction} from "../../ts/actions/ReduxActions";
import Slider from "./IndexElements/Slider";
export interface HeaderProps{
    uicontext: boolean;
    buttonSwitch: boolean;
    windowReducer?: WindowReducerObject;
    userAction: any;
    userData: any;
}
class Header <T extends HeaderProps> extends React.Component<T, {}>{
    public userData: object | boolean;
    constructor(props){
        super(props);
        props.userAction();
    }

    public render() {
        return (
            <header id={Utils.getURLPageName(window.location.href) === "index.html" ? "home" : "home-subpage"}>
                <nav id="nav" className={this.props.buttonSwitch ?
                    "navbar nav-transparent open" :
                    "navbar nav-transparent"}>
                    <div className="container nav-menu">
                        <div className="navbar-header">
                            <div className="brand">
                                <a href="../../html/portal/index.html">
                                    {this.props.windowReducer.viewType === ViewType.LANDSCAPE && <div className = "miniLogoContainer">
                                            <img className="logo-alt" src="../../images/logo-new.png" alt="logo"/>
                                            <div className={"animated-logo"}>
                                                <div
                                                    className={"miniFirstFigure " + (Utils.isNotNull(Utils.getURLPageName(window.location.href) === "index.html") ? "homePage" : "")}
                                                    id="miniFirstFigure">
                                                    <div className="miniPolygon2"/>
                                                    <div className="miniPolygon1"/>
                                                    <div className="miniPolygon3"/>
                                                    <div className="miniPolygon4"/>
                                                </div>
                                            <div className="miniHexagon"/>
                                            <div className = {"miniSecondFigure " + (Utils.isNotNull(Utils.getURLPageName(window.location.href) === "index.html") ? "homePage" : "")}
                                                 id="miniSecondFigure">
                                                <div className ="miniPolygon22"/>
                                                <div className = "miniPolygon21"/>
                                                <div className = "miniPolygon23"/>
                                                <div className = "miniPolygon24"/>
                                            </div>
                                            <div className = {"miniThirdFigure " + (Utils.isNotNull(Utils.getURLPageName(window.location.href) === "index.html") ? "homePage" : "")}
                                                 id="miniThirdFigure">
                                                <div className = "miniPolygon32"/>
                                                <div className = "miniPolygon31"/>
                                                <div className = "miniPolygon33"/>
                                                <div className = "miniPolygon34"/>
                                            </div>
                                        </div>
                                    </div>}
                                </a>
                            </div>
                            <NavMenuButton buttonSwitch={this.props.buttonSwitch}/>
                        </div>
                        <ul className="main-nav nav">
                            <li><a href="/index.php">Home</a></li>
                            <li><a href="/courses.php">Courses</a></li>
                            <li><a href="/erasmus.php">Erasmus+</a></li>
                            <li><a href="/staff.php">Staff</a></li>
                            <li className="has-dropdown"><a href="/blog">Dropdown</a>
                                <ul className="dropdown">
                                    <li><a href="/blog-single.html">Dropdown test</a></li>
                                </ul>
                            </li>
                        <SearchIcon/>
                        </ul>
                    </div>
                </nav>
                <div className="bg-img"
                     style={{backgroundImage: "url('http://www.tu-sofia.musclevale.com/images/background-official.webp')"}}>
                    <div className="overlay"/>
                </div>
                <div className="home_slider_wrapper">
                            <Slider/>
                    <div className="home-wrapper">
                        <div className="container_index">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="home-content">
                                        <h1 className="white-text">ELFE WEBSITE</h1>
                                        <p className="white-text">Paragraph
                                        </p>
                                        <button className="white-btn">Button1</button>
                                        <button className="main-btn">Button2</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect ((mapStateToProps)=>{
        return {
            windowReducer: mapStateToProps.windowReducers,
            buttonSwitch: mapStateToProps.mobileMenuNavButton,
            userData: mapStateToProps.serverReducer
        }
    },(dispatch)=>bindActionCreators({
    userAction: userDataAction
},dispatch))(Header);