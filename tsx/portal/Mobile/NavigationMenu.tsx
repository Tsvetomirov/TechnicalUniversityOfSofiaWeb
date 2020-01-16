import * as React from "react";
import {mobileMenuButton} from "../../../ts/actions/ReduxActions";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
interface NavMenuButtonProps{
    buttonSwitcher: ()=>{};
    dispatchAction: any;
}
class NavMenuButton extends React.Component<NavMenuButtonProps>{
    constructor(props){
        super(props);
    }
    onClickHandler(){
        this.props.buttonSwitcher();
    }
    render(){
        return<div className="nav-collapse" id="navigation-collapse" onClick={this.onClickHandler.bind(this)}><span/></div>
    }
}

export default connect (null,(dispatch) =>{
    return bindActionCreators({buttonSwitcher: mobileMenuButton},dispatch)
    }
    )(NavMenuButton);