let output = document.querySelector(".output");
let writing = document.querySelector(".writing");

document.querySelector("#getOne").addEventListener("click", function(){




    var getir = new XMLHttpRequest();
    var url =`https://jsonplaceholder.typicode.com/posts/${writing.value}`;
    console.log(url);
    getir.open("GET",url,true); 
    
    getir.onload= function(){

        if(this.status===200){
    
            var packet = JSON.parse(this.responseText);
            

           var html;
    
    
        
         html = `
           <div> 
           <header>${packet.id} ${packet.title} </header>
           <p> ${packet.body} </p>
           </div>
        `;
    
            output.innerHTML=html;
        }
    
    
    }
 
    getir.send();





});





document.querySelector("#getTwo").addEventListener("click", function(){


    var getir = new XMLHttpRequest();
    var url =`https://jsonplaceholder.typicode.com/posts`;
    console.log(url);
    getir.open("GET",url,true); 
    
    getir.onload= function(){

        if(this.status===200){
    
            var packet = JSON.parse(this.responseText);
            

           var html;

           packet.forEach(element => {
               
            html = `
            <div> 
            <header>${element.id} ${element.title} </header>
            <p> ${element.body} </p>
            </div>
         `;
     
             output.innerHTML+=html;


           });
        

        }

             
    
    
    }
 
    getir.send();

});

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

