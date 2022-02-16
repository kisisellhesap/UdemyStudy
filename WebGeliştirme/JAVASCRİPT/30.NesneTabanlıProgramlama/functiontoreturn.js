function question(hobby) {

    switch(hobby) {


        case  "football":
            return function (name) {
                console.log("do you like football ? "+ name);
                
            }
            break;
            case "basketball":
                return function(name) {
                    console.log("do you like baskettball ? "+name);
                }
            break;

            default :
            return function(name) {
                console.log("anyelse ? "+name);
            }
            break;
    }
}



let foot = question("football");
foot("ahmetcan");
