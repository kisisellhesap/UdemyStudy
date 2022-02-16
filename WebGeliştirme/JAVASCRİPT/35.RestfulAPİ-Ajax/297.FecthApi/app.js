// text


function gettext(){

fetch("msg.txt").then((response) => {
    return response.text();
}).then((data)=> {
    console.log(data);
}).catch((err)=> {
console.log(err);
});


}
 
gettext();

// json


function getjson() {

    fetch("msg.json").then((response)=> {

        return response.json();

    }).then((data)=> {
        console.log(data);
    }).catch((err)=> {});

}

getjson();

// external api


function getExapi(){

    fetch("https://randomuser.me/api/?results=5").then((response)=>{
        return response.json();
    }).then((data)=> {
  
        let users= data.results;
        users.forEach(element => {
           var   html =  `
            <div>
            <h2>${element.name.title} </h2>
            <img src="${element.picture.large}">
            <p>${element.email} </p>
            <p> ${element.phone} </p>
            <div>
            
            `;
            document.querySelector(".a").innerHTML+=html;
        });
      
    }).catch((err)=> {
        console.log(err);
    });
}


getExapi();



// post external api



function postExternalApi(){

    var data = {
        method : "POST",
        body : JSON.stringify({
           userId : 1,
           title : "sample title",
           body : "body title"
        }),
        headers : new Headers({
            'content-type':'application/json'
        })
    }

    fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=> {
        console.log(res);
    }).catch();
}


postExternalApi();