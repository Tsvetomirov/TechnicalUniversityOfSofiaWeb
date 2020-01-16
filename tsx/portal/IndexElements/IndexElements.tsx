import * as React from 'react';

export interface CoursesProps{
    degree: string,
    subjectName: string,
    img: string,
    link: string
}

export const Courses = (obj: CoursesProps) =>{
        return(
            <div className="work">
                <div id="course-header">{obj.degree}</div>
                <img className="img-responsive js-lazy-image"
                     src={obj.img} alt=""/>
                    <div className="overlay"/>
                    <div className="work-content">
                        <span>{obj.degree}</span>
                        <h3>{obj.subjectName}</h3>
                        <div className="work-link">
                            <a href="#"><i className={"fa fa-external-link"}/></a>
                            <a className="lightbox"
                               href={obj.link /* "http://www.tu-sofia.musclevale.com/courses.php?course=b&subj=eng"*/}><i
                                className={"fas fa-link"}/></a>
                        </div>
                    </div>
                    <div id="course-footer">Industrial Engineering</div>
            </div>
        )
    };