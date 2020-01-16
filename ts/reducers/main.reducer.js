export function mainPageStaticReducer(state=[], action) {
    switch(action.type) {
        case "StaticContent":
            return {
                courses: [
                    {
                        degree: "Bachelour Degree",
                        subjectName: "Industrial Engineering",
                        img: "../../images/testimonials/graduation-1.webp",
                        link: "../../courses.php?course=b&subj=eng"
                    },
                    {
                        degree: "Master Degree",
                        subjectName: "Industrial Engineering",
                        img: "../../images/testimonials/graduation-2.webp",
                        link: "../../courses.php?course=m&subj=eng"
                    },
                    {
                        degree: "Master Degree",
                        subjectName: "ITBM",
                        img: "../../images/testimonials/graduation-3.webp",
                        link: "../../courses.php?course=m&subj=ITBM"
                    },
                    {
                        degree: "Master Degree",
                        subjectName: "E-Management",
                        img: "../../images/testimonials/graduation-4.webp",
                        link: "../../courses.php?course=m&subj=management"
                    }
                ],
                networks: [
                    {name: "Student Networks",
                    info:[
                        {
                            website: "https://www.studsavet.org",
                            image: "https://yt3.ggpht.com/a/AGF-l7-BBIcC888A2qYc3rB44rST01IEYDG3uzbU_A=s900-c-k-c0xffffffff-no-rj-mo",
                            content: "Union of TU Sofia"
                        },
                        {
                            website: "https://www.estiem.org",
                            image: "http://tu-sofia.musclevale.com/images/logos/ESTIEM_Logo_.webp",
                            content: "Network ESTIEM"
                        },
                        {
                            website: "https://www.bestsofia.org",
                            image: "http://tu-sofia.musclevale.com/images/logos/best-logo.jpg",
                            content: "Network BEST"
                        },
                        {
                            website: "https://www.aiesec.bg",
                            image: "http://tu-sofia.musclevale.com/images/logos/AIESEC-logo.png",
                            content: "Network AIESEC"
                        },
                        {
                            website: "https://www.alumni.tu-sofia.bg",
                            image: "https://career.tu-sofia.bg//images/Logo-KC-ALUMNI-small.png",
                            content: "Alumni center"
                        }
                    ]
                    },
                    {name: "Additional Resources",
                    info: [
                        {
                            website: "https://www.studsavet.org",
                            image: "https://yt3.ggpht.com/a/AGF-l7-BBIcC888A2qYc3rB44rST01IEYDG3uzbU_A=s900-c-k-c0xffffffff-no-rj-mo",
                            content: "Union of TU Sofia"
                        },
                        {
                            website: "https://www.career.tu-sofia.bg",
                            image: "https://career.tu-sofia.bg//images/Logo-KC-ALUMNI-small.png",
                            content: "Carrier center"
                        },
                        {
                            website: "https://www.tusmail.tu-sofia.bg",
                            image: "https://tusmail.tu-sofia.bg/skins/larry/images/logo-emaill-large.png",
                            content: "e-Mail"
                        }
                    ]
                    },
                    {name: "Examination schedule",
                        info: [
                            {
                                website: "https://tu-sofia.bg/examsfiles/%D0%A4%D0%90%D0%98%D0%9E-%D0%98%D0%98--potok-18-kurs-1.html",
                                image: "http://tu-sofia.musclevale.com/images/testimonials/schedule.png",
                                content: "Indusrial Engieering - year I"
                            },
                            {
                                website: "https://tu-sofia.bg/examsfiles/%D0%A4%D0%90%D0%98%D0%9E-%D0%98%D0%98--potok-18-kurs-2.html",
                                image: "http://tu-sofia.musclevale.com/images/testimonials/schedule.png",
                                content: "Indusrial Engieering - year II"
                            },
                            {
                                website: "https://tu-sofia.bg/examsfiles/%D0%A4%D0%90%D0%98%D0%9E-%D0%98%D0%98--potok-18-kurs-3.html",
                                image: "http://tu-sofia.musclevale.com/images/testimonials/schedule.png",
                                content: "Indusrial Engieering - year III"
                            },
                            {
                                website: "https://tu-sofia.bg/examsfiles/%D0%A4%D0%90%D0%98%D0%9E-%D0%98%D0%98--potok-18-kurs-4.html",
                                image: "http://tu-sofia.musclevale.com/images/testimonials/schedule.png",
                                content: "Indusrial Engieering - year IV"
                            }
                        ]},
                ],
                testimonials: [
                    {
                        name: "John Doe",
                        subject: "Web Designer",
                        img: "../../images/testimonials/perso1.jpg",
                        bio: ".Molestie at elementum eu facilisis sed odio.\n" +
                            "Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas\n" +
                            "ultricies mi eget mauris."
                    },
                    {
                        name: "John Doe",
                        subject: "Web Designer",
                        img: "../../images/testimonials/perso2.jpg",
                        bio: "Molestie at elementum eu facilisis sed odio.\n" +
                            "Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas\n" +
                            "ultricies mi eget mauris."
                    }
                ],
                erasmus: [
                    {
                        title: "Erasmus+",
                        content: "Erasmus is the European Union's flagship educational exchange programme for" +
                            "Higher Education students, teachers and institutions. It was introduced with" +
                            "the aim of increasing student mobility within Europe. Erasmus forms part of" +
                            "the EU Lifelong Learning Programme (2007-2013)." +
                            "The Erasmus programme enables students at higher education institutions to" +
                            "spend an integrated period of study, or work placement, of between 3 months " +
                            "and 12 months in another participating country."
                    }
                ],
            };
        default:
            return state;
    }
}

export function activeSearch(state={}, object){
    switch(object.type) {
        case "activateSearch":
            return !state;
        case"test":
            return false;
        default: return false;
    }
}