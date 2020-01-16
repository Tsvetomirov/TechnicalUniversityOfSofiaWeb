import * as React from "react"

interface InViewProps{
    element: JSX.Element;
}
export default class InViewPort extends React.Component<InViewProps>{
    public selector;
    constructor (props){
        super(props);
        this.selector = React.createRef();
    }
public render() {
    console.log(this.selector);
    return(
        <>
            <div ref={this.selector}>
                {this.props.element}
            </div>
            </>
    )
}
}