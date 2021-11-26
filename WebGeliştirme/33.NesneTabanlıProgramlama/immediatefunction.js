function welcome() {

    let days  = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];

    let today = new Date();

    let message = "welcome today is "+ days[today.getDay()];
    return message;
}

/* bu fonksiyonu sadece bir kez çalıştırmak istediğimizde isimsiz fonksiyonlar ile bunu halledebiliriz */
console.log(welcome());



(function(name) {
    let days  = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];
    let today = new Date();
    let message = "welcome "+name+" today is "+ days[today.getDay()];
    console.log(message);
}("ahmetcan"));