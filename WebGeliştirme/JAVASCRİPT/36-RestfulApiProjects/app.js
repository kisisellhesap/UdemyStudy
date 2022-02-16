const profile = new Profile();
const ui = new Ui();

const search = document.querySelector("#seachProfile");
search.addEventListener("keyup",(event)=> 
{
    ui.clear();
 
    let text =event.target.value; 
  
    if(text!=="" ) {
        profile.getProfile(text).then((res)=> {
        if(res.profile.length===0) {
            ui.alertProfile(text);

        }else {
            ui.showProfile(res.profile[0]);
            console.log(res.profile[0]);
        }  
        
        });
    }







});