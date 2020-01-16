import * as React from "react";
import WindowReducerObject from "../../ts/strictTypes/WindowReducersStrictTypes/WindowReducerObject";
import CompareViewTypes from "../../ts/strictTypes/WindowReducersStrictTypes/SubTypes/CompareViewTypes";

interface FooterProps{
    windowsDimensions: WindowReducerObject;
}

export default class Footer extends React.Component<FooterProps>{

    render(){
        return(
            <footer id="footer" className="section">
                <div className="">
                    <div className="">
                        <div className="">
                            <ul className="footer-nav">
                                <li><a href="<?php echo $_SERVER['HTTP_HOST']; ?>">Home</a></li>
                                <li><a href="/courses.php">Courses</a></li>
                                <li><a href="/erasmus.php">Erasmus+</a></li>
                                <li><a href="/staff.php">Staff</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className={this.props.windowsDimensions.viewType === CompareViewTypes.LANDSCAPE ?
                        "bottom-footer row landscape" : "bottom-footer row portrait"}>
                        <div className={"footer-items"}>
                            <div>
                                <div className="contact-us">
                                    <h4>Contact us</h4>
                                    <li><a href="https://www.google.com/search?q=TU Sofia Elfe">Technical University of
                                        Sofia 8, Kliment Ohridski blvd, Sofia buliding 2, office 2441&nbsp</a></li>
                                    <li><i className="fas fa-phone"/><a href="#"> +359 2 965 2447</a></li>
                                    <li><i className="fas fa-envelope"/><a href="#"> natali_trapova@tu-sofia.bg</a>
                                    </li>
                                </div>
                            </div>
                            <div>
                                <div id="map"><h4>Find us</h4>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.115951890487!2d23.353569630568032!3d42.657173348803504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa842791548ce7%3A0x5c3a3691d990d279!2sTechnical+University!5e0!3m2!1sen!2sbg!4v1555614333023!5m2!1sen!2sbg"
                                        width="300" height="150" frameBorder="0" style={{border:"0"}}
                                        allowFullScreen/>
                                </div>
                            </div>
                            <div className="footer-copyright">
                            </div>
                        </div>
                        <div>
                            <ul className="footer-social">
                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"/></a></li>
                                <li><a href="#" className="twitter"><i className="fab fa-twitter"/></a></li>
                                <li><a href="#" className="google-plus"><i className="fab fa-google-plus"/></a></li>
                                <li><a href="#" className="youtube"><i className="fab fa-youtube"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}