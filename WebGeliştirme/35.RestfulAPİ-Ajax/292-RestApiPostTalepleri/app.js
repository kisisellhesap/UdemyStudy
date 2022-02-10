let output = document.querySelector(".output");
let writing = document.querySelector(".writing");



// POST

document.querySelector("#postid").addEventListener("click",function(){
    let user = {
        userId : "1",
        title : "deneme bir iki",
        body : "bodyguard"
        }

    let json = JSON.stringify(user);

    
var xhr = new XMLHttpRequest();
var url =`https://jsonplaceholder.typicode.com/posts`;


xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
xhr.onload= function(){

    if(xhr.status===201 && xhr.readyState === 4){
        console.log(xhr.responseText);
    }

}
xhr.send(json);

});

