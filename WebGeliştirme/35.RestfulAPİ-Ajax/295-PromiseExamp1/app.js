// let p = new Promise(( resolve,reject) => {

// if(true) {
// resolve("başarılı bir sonuç gerçekleşti.");
// }
// else {
// reject("hata : 500");
// }

// });


// p.then((great)=> {console.log(great)}).catch((warning)=> {console.log(warning)});


// new Promise((resolve)=> {
// setTimeout(()=>{
//     resolve(6);
// },1000
// );

//  }).then((number)=> {
//      console.log(number);
//      return number*number;
//  }).then((number)=>{
//      console.log(number);
//  });


const alishappy = false;



let myac = new Promise((resolve,reject)=>{

    if(alishappy) {

        let prd = { account: "littleVio", lp:1000, team: "gto"}
        let message =  `l did it ${prd.account} from name my account is challenger ${prd.lp}`;

        resolve(message);
    }

    else{
        let message = "l am not happy because l cant challanger";
        reject(message);
    }


})


    let saytobrother = (prd) => {
        let message ="hi bro look at my account  "+ prd;
      return  Promise.resolve(message);
    };



let lookat = ()=> {
myac.then((saytobrother)).then((message)=>{console.log(message);}).catch((message)=> {
      console.log(message);
  });

}



lookat();