export function ServerReducer(state={}, object){
    switch(object.type){
        case "userData":
            async function userData(){
                let result = await fetch('http://localhost/server/UserData.php', {
                    method: "GET",
                    headers: {"Content-type": "application/json"},
                });
                return await result.json();
            }
            return userData();
        default:
            return state;
}
}