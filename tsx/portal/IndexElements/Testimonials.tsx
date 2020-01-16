import * as React from "react";

export const Testimonials = (props) => {
    return props.testimonials.map((value, key)=>
        <div className="testimonial" key={key}>
            <div className="testimonial-meta">
                <img className="js-lazy-image" src={value.img}
                     alt=""/>
                <h3 className="white-text">{value.name}</h3>
                <span>{value.subject}</span>
            </div>
            <p className="white-text">{value.bio}</p>
        </div>)
    };