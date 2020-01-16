export function AnimationReducer(state={}, object) {
    let defaultObject = [
        {name: "Happy Clients", integer: 200, icon:"fa fa-users"},
        {name: "Contracts", integer: 140, icon: "fa fa-file"},
        {name: "Documents", integer: 290, icon: "fa fa-file"},
        {name: "Projects completed", integer: 500, icon: "fa fa-file-contract"}
    ];
        switch(object.type) {
            case "counter":
                return Object.assign([...defaultObject],
                    object.payload.map((value,key) => {
                        return {name:defaultObject[key].name, integer: value, icon: defaultObject[key].icon}
                    }));
            default:
                return defaultObject;
        }
}