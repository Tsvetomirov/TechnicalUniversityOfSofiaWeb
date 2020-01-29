import * as React from 'react';
import ViewType from "../../ts/strictTypes/WindowReducersStrictTypes/SubTypes/CompareViewTypes";
import SubHeader from "../common/HeaderSubPages";
import {connect} from 'react-redux';
import {WindowResize, errorsAction, getUserData} from "../../ts/actions/ReduxActions";
import WindowReducerObject from "../../ts/strictTypes/WindowReducersStrictTypes/WindowReducerObject";
import {bindActionCreators} from "redux";
import {RefObject} from "react";
import Utils from "../../ts/Utils";
import Footer from "../portal/Footer";
interface props{
    windowReducers: WindowReducerObject;
    resize: ()=>{type:string, payload: number};
    printErrors: (errors: [])=>{};
    showErrors: any;
    getUserData: (userData)=>{};
    userData: any;
}

class Login extends React.Component<props>{
    private readonly username: RefObject<HTMLInputElement>;
    private readonly password: RefObject<HTMLInputElement>;
    public requestIsSent: number;
    constructor(props){
        super(props);
        this.props.resize();
        this.username = React.createRef();
        this.password = React.createRef();
        sessionStorage.clear();
    }
    countRequests(): number{
        Utils.isNotNull(sessionStorage.getItem("requestCount")) && this.requestIsSent === 1
            ? sessionStorage.setItem("requestCount",(parseInt(sessionStorage.getItem("requestCount"))+1).toString())
            : sessionStorage.setItem("requestCount", "1");
        this.requestIsSent = 0;
        return parseInt(sessionStorage.getItem("requestCount"));
    }
    async loginRequest(){
            await(fetch('/server/loginAPI.php',{
                method:"post",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {"credentials":
        {
                                "username":Utils.isNotNull(this.username) &&
                                    this.username.current.value,
                                "password":Utils.isNotNull(this.password) &&
                                    this.password.current.value
                            }
                    })
            })
                .then(res=>res.json())
                .then((result)=>{
                    if(result[0] === true){
                        this.props.getUserData(result.userData);
                        //window.location.href = "/portal/index.html";
                    }else{
                        this.props.printErrors(result);
                    }
                })
                .catch((error)=>this.props.printErrors(error)));
            this.requestIsSent = 1;
    }
    public render(){
        return(
            <div className={this.props.windowReducers.viewType === ViewType.LANDSCAPE
                ? "body landscape"
                : "body portrait"}>
                <SubHeader windowReducer={this.props.windowReducers}/>
                <div id="primary" className="content-area">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-login">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <a href="#" className="active" id="login-form-link">Вход</a>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form onSubmit={e=>e.preventDefault()}
                                                  id="login-form"
                                                  method="post"
                                                  role="form"
                                                  style={{display: "block"}}>
                                                <div className="form-group">
                                                    <input ref={this.username}
                                                        type="text" name="login_username" id="username" tabIndex={1}
                                                           className="form-control" placeholder="Име"
                                                           defaultValue=""/>
                                                </div>
                                                <div className="form-group">
                                                    <input ref={this.password}
                                                        type="password" name="login_password" id="password"
                                                           tabIndex={2} className="form-control" placeholder="Парола"/>
                                                </div>
                                                {Utils.isNotEmptyObject(this.props.showErrors) &&
                                                <div className={"errors text-center"}>
                                                    {this.props.showErrors.map(result=>result)}
                                                </div>}
                                                <div className="form-group text-center">
                                                    <input type="checkbox" tabIndex={3} className="" name="remember"
                                                           id="remember"/>
                                                        <label htmlFor="remember">Remember me</label>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-sm-offset-3">
                                                            <input type="submit"
                                                                   onClick={this.countRequests() < 10
                                                                   && this.loginRequest.bind(this)/*capcha*/}
                                                                   name="submit"
                                                                   id="login-submit"
                                                                   tabIndex={4}
                                                                   className="form-control btn btn-login"
                                                                   value="Вход"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    id="login_check">
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="text-center">
                                                                <a href='/user_panel/login_panel/recover?mode=password'
                                                                   tabIndex={5} className="forgot-password">Forgot
                                                                    your password?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer windowsDimensions={this.props.windowReducers}/>
            </div>
        )
    }
}

export default connect((mapStateToProps)=>{
    return{
        windowReducers: mapStateToProps.windowReducers,
        showErrors: mapStateToProps.printErrors,
        userData: mapStateToProps.userData
    }
},
    (dispatch)=>{
    return bindActionCreators({
        resize: WindowResize,
        printErrors: errorsAction,
        getUserData: getUserData
    }, dispatch)
})(Login)
