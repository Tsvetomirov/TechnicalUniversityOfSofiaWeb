import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {SearchActions} from "../../ts/actions/ReduxActions"

 function SearchIcon(props){
    return(
        <>
        <li id="search-trigger" onClick={()=>props.searchActions()}>
            <a id="website-search">
                <i className="fas fa-search"/>
            </a>
        </li>
    <div className={props.activateSearch ? "search-box--open" : "search-box"}>
        <form id="search-dropdown" method="get" action="../../search.php">
            <input id='search-field' type = 'text' name='search' /*onsubmit='checkForEmptySubmit(this.search.value)'*//>
        </form>
    </div>
            </>
    )
}

export default connect((o: any, ownProps) => {
    return ({
        activateSearch: o.active
    })
},(dispatchToProps) => {
    return bindActionCreators({searchActions: SearchActions },dispatchToProps)
})(SearchIcon);