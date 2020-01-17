import StaticReducerNetworkTemplate from "./StaticReducerNetworkTemplate";
import StaticReducerCoursesTemplate from "./StaticReducerCoursesTemplate";

export default interface StaticReducerTemplate{
    courses: [
        StaticReducerCoursesTemplate
    ],
    networks: [
        StaticReducerNetworkTemplate
    ],
    testimonials: [
        {
            name: string
            subject: string
            img: string
            bio: string
        },
{
    name: string
    subject: string
    img: string
    bio: string
}
],
erasmus: [
    {
        title: string
        content: string
    }
],
}