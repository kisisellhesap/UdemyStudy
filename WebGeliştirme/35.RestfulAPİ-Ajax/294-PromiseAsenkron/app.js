let kisiler = [

{id: 1 , name : " ahmetcan", age:20},
{id:2,name: "ali", age :25},
 {id:3, name : "halil",age: 35}
]


function add(prd,callback){

    return new Promise (function(resolve,reject){
        
        setTimeout(()=> {
            kisiler.push(prd);
            let added = true;
            if(added){
                    resolve();
              
            }
            else {
                reject("hata : 500");
            }
        
        });



    })
   
}


function get(){

    setTimeout(()=> {
        kisiler.forEach(function(item){
            console.log(item);
            })
    },1000);
}



add( {id:4, name : "ayşe",age: 55}).then(get).catch(function(err){
    console.log(err);
});