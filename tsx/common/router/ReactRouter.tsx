import * as React from 'react';
import {Route} from 'react-router';
import {BrowserRouter, Switch } from 'react-router-dom';
import * as ReactDOM from "react-dom";
import Root from "../../portal";
import {Provider} from 'react-redux';
import {store} from "../../../ts/reducers/Index";
import Erasmus from "../../erasmus/Erasmus";
import Login from "../../login/Login";


export default class App extends React.Component{
    private readonly store: any;
    public constructor(props){
        super(props);
        this.store = store;
    }
    public render() {
        return(
            <Provider store={this.store}>
                <BrowserRouter>
                    <>
                        <Switch>
                        <Route path="/html/portal/index.html" component={Root}/>
                        <Route path="/html/erasmus/erasmus.html" component={Erasmus}/>
                        <Route path="/html/login/login.html" component={Login}/>
                        </Switch>
                    </>
                </BrowserRouter>
            </Provider>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));