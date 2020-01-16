import * as React from 'react';
import Utils from "../../ts/Utils";
interface FontToFitProps{
    content: string;
    className?: string;
    fontSize?: string;
}

export default class FontToFit extends React.Component<FontToFitProps>{
    private readonly selector;
    private elementHeight;
    private elementWidth;
    private elementOverflowHeight;
    private elementOverflowWidth;

    constructor(props){
        super(props);
        this.selector = React.createRef();
        this.state = {fontSize: "20px"};
    }
    fontToFit(element){
        this.elementWidth = Math.ceil(element.getBoundingClientRect().width);
        this.elementHeight = Math.ceil(element.getBoundingClientRect().height);
        this.elementOverflowWidth = element.scrollWidth;
        this.elementOverflowHeight = element.scrollHeight;
        if(this.elementOverflowWidth > this.elementWidth || this.elementOverflowHeight > this.elementHeight){
            this.setState({fontSize:(parseInt(this.state.fontSize) - 1) + "px"});
        }
    }
    componentDidUpdate(prevProps: Readonly<FontToFitProps>, prevState: Readonly<{}>, snapshot?: any): void {
            this.fontToFit(this.selector.current)
    }

    componentDidMount(): void {
        this.fontToFit(this.selector.current);
    }

    render(){
        return<div
            className={Utils.isNotNull(this.props.className) ? this.props.className : ""}
            ref={this.selector}
            style={{fontSize: this.state.fontSize, width: "inherit", height: "inherit"}}
        >{this.props.content}</div>;
    }
}