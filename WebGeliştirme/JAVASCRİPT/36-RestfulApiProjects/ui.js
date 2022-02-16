class Ui {
    constructor(){
        this.outProfile = document.querySelector(".outputProfile");
        this.alerting = document.querySelector(".alerting");
    }


showProfile(profile) {
    
    this.outProfile.innerHTML = `

    <div class="profile-card">
    <div class="img">RESİM</div>
    <div class="information">
        <div> 
           <h4> ID : </4> ${profile.id}
           <h4> NAME : </4> ${profile.name}
           <h4> USERNAME : </4> ${profile.username}
           <h4> E-MAİL : </4> ${profile.email}
           <h4> CİTY : </4> ${profile.address.city}
        </div>
    </div>
</div>   `;


}


alertProfile(text){
    this.alerting.innerHTML = ` <h1>${text} is not found </h1>` ; 
}

clear(){
    this.outProfile.innerHTML="";
    this.alerting.innerHTML="";
}
}