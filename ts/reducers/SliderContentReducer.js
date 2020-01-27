export function SliderContentReducer(state={}, object) {
    switch(object.type){
        case "loadSlideContent":
           return [
            {
                imageID:0,
                buttonText:"Read More",
                slideText: "test1",
                slideImage:"http://www.tu-sofia.musclevale.com/images/background.jpg",
                activeState:"",
                alt:""
            },
            {
                imageID:1,
                buttonText:"Read More",
                slideText: "test2",
                slideImage:"http://www.tu-sofia.musclevale.com/images/background2.webp",
                activeState:"",
                alt:""
            },
            {
                imageID:2,
                buttonText:"Read More",
                slideText: "test3",
                slideImage:"http://www.tu-sofia.musclevale.com/images/background.jpg",
                activeState:"",
                alt:""
            },
            {
                imageID:3,
                buttonText:"Read More",
                slideText: "test4",
                slideImage:"http://www.tu-sofia.musclevale.com/images/background.jpg",
                activeState:"",
                alt:""
            }
        ];
        default:
            return state;
    }
}