// function fn(){
//     return "hello";
// }

// console.log(fn());

// // promise

// function fnpromise(){
//     return Promise.resolve("hello");
// }


// fnpromise().then((data)=> {
//     console.log(data);
// })

// // async
// async function fnAsync(){
//     return "hello";
// }

// fnAsync().then((data)=> {
//     console.log(data);
// })



function getCategory(){
return new Promise ((resolve,reject)=> {



        if(true){
            setTimeout(() => {
            resolve("samsung");
        }, 1000);
        }
        else{
            reject("error");
            
        }

    

});

}

function getProducts(category) {

    return new Promise((resolve,reject)=> {
if(!true) {
    setTimeout(()=> {

        resolve("5 products in "+ category);
    });
}
else {

    reject("error");
}

    })
}


getCategory().then(getProducts).then((data)=>{
console.log(data);
}).catch((err)=> {
    console.log(err);
});



async function getProduct(){

    try{
        let category = await getCategory();
        let results = await getProducts(category);
        console.log(results);
    }
    catch(err){
console.log(err);

    }



}


getProduct();