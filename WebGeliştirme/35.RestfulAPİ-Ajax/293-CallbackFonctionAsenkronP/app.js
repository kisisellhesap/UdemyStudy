let kisiler = [

{id: 1 , name : " ahmetcan", age:20},
{id:2,name: "ali", age :25},
 {id:3, name : "halil",age: 35}
]

let added = false;
function add(prd,callback){

    if(added){
        setTimeout(()=> {
            kisiler.push(prd);
            callback(null,prd);
            },2000);
            
    }
    else {
        callback("500");
    }

}


function get(){

    setTimeout(()=> {
        kisiler.forEach(function(item){
            console.log(item.name);
            })
    },1000);
}


// add( {id:4, name : "ayşe",age: 55},get);


add( {id:4, name : "ayşe",age: 55},function(err,data){

if(err){
    console.log("hata : "+ err);
}
else {
    console.log(data);
}

});