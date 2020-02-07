import * as React from 'react';
import Utils from "../../ts/Utils";
import SubHeader from "../common/HeaderSubPages";
import ViewType from "../../ts/strictTypes/WindowReducersStrictTypes/SubTypes/CompareViewTypes";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {WindowResize, isLoggedIn} from "../../ts/actions/ReduxActions";

interface ErasmusProps {
    windowReducers: {height:number, width:number, viewType: string}
    windowActionCreator: ()=>{type: "string", payload: any}
    isLoggedIn: any
    loggedInAction: (boolean: boolean)=>{}
}
class Erasmus extends React.Component<ErasmusProps>{
    constructor(props){
        super(props);
        this.state={apiCall: []};
        this.props.windowActionCreator();
}
    async componentDidMount() {
        await fetch('http://localhost/server/API.php?querySearch=erasmus')
            .then(result => result.json())
            .then(result => this.setState({apiCall:result.erasmus}));

            fetch("../../server/isLoggedIn.php",{
            method:"POST",
                headers:{
                "Authorization":`Bearer ${Utils.getCookie("ACCESS_TOKEN")}`
            },
            body:JSON.stringify({
                ACCESS_TOKEN: Utils.getCookie("ACCESS_TOKEN")
            })
        })
                .then(resultToJson=>resultToJson.json())
                .then((result)=>{return result[0] ? this.props.loggedInAction(true) : this.props.loggedInAction(false)})
    }

    render(){
        return(
            <div className={this.props.windowReducers.viewType === ViewType.LANDSCAPE
                ? "body landscape"
                :"body portrait"}>
                <SubHeader windowReducer={this.props.windowReducers}/>
                <section className="course-sectionx1" id="course-sectionx1">
                    <div id="erasum-inner-header">
                        <h1>Erasmus +</h1>
                        <p>Erasmus schemes can last between three months and a year. You may be required to do Erasmus as part
                            of your degree, or you might simply decide to spread your wings and spend a few months in another
                            country.</p>
                        <p>Either way, it will look good on your CV, help you to become more motivated, make you more
                            independent, improve your language skills and allow you to gain some great work experience.</p>
                        <form method="POST" className="default-search-form">
                            <input type="text" className="animated-search" id="animated-search-input"
                                // onkeyup
                                   placeholder="Search ..."/>
                            <button type="submit" className="animated-search-button" id="animated-search-button"><i
                                className="fas fa-search"/></button>
                        </form>
                    </div>


                    <div id='universal-side-menu'>
                        <div id="mobile-menu-arrow"/>
                        <li className="univ-menu-header">Erasmus+ documents</li>
                        <ul id="univ-menu-ul">
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiST.html">Outgoing students</a></li>
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiST.html">Incoming students</a></li>
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiPrepodavateli.html">Outgoing
                                lecturers</a></li>
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiPrepodavateli.html">Incoming
                                lecturers</a></li>
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/zaminavashtiPrepodavateliALL.html">Outgoing
                                staff</a></li>
                            <li><a href="http://oldweb.tu-sofia.bg/Erasmus/dir/pristigashtiPrepodavateliALL.html">Incoming
                                staff</a></li>
                        </ul>
                    </div>

                    <div className="row" id='tableRow'>
                        {Utils.isNotNull(this.state.apiCall) && this.state.apiCall.map((result, key)=>{return(
                            <div className="work" key={key}>
                                <img className="img-responsive" id="img-erasum" src={result.logo} alt=""/>
                                <div className="overlay"/>
                                <div className="work-content">
                                    <span/>
                                    <h3>{result.uni}</h3>
                                    <div className="work-link">
                                        <a href={'https://elfe.tu-sofia.bg/ELFE/Docs/'+ result.pdf + ".pdf"}
                                           target="_blank"><i className="fas fa-file-pdf"/></a>
                                        <a className="lightbox" href={result.www} target="_blank"><i
                                            className="fas fa-globe"/></a>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </section>
            </div>
        )
    }
}
export default connect((mapStateToProps)=>{
    return({
        windowReducers: mapStateToProps.windowReducers,
        isLoggedIn: mapStateToProps.isLogged
})
},
    (actionsToProps)=>{
    return(bindActionCreators({
        windowActionCreator: WindowResize,
        loggedInAction: isLoggedIn
    },actionsToProps));
    })(Erasmus);