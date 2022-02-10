let myObj = {
    url :"https://randomuser.me/api/?results=5"
}


let request = (obj)=> {

return new Promise((resolve,reject)=> {

let xhr = new XMLHttpRequest();
xhr.open("GET",obj.url,true);

xhr.onload=  ()=> {

    if(xhr.status>=200 && xhr.status<300) {
        resolve(xhr.response);
    }

    else{

        reject(xhr.statusText);
    }



};

xhr.onerror = ()=> {
    reject(xhr.statusText);
}





xhr.send();

});
}







let build = (data)=> {
    let users = JSON.parse(data);
    users.results.forEach(element => {
        let html  = `
        <div>
        <h2>${element.name.first}  ${element.name.last}</h2>
        <img src="${element.picture.large}">
        <p>${element.email} </p>
        <p>${element.phone} </p>
        <div>
        `;

        document.querySelector(".a").innerHTML+=html;  
 
    })  
    let msg = "html loaded";
    return Promise.resolve(msg);
}

request(myObj).then(build).then((msg)=>{console.log(msg)}).catch((err)=> {
    console.log(err);
});