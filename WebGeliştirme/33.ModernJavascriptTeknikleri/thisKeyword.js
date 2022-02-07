let list = {
    category : "phone",
    names : ["samsung s5","nokia n7","iphone 5"],
   /* call : function(){
        this.names.map(function(name) {
            console.log(this.category,name);  
            
            buradaki this sözcüğü yeni bir function içine girdiğinde objeyi temsil etmez. Çıktısı undefinedtır. bunun için bir önceki functiondan referans alınması gerekir. aşşağıdaki gibi.
        }); 

        call : function(){
            var self = this;
            this.names.map(function(name) {
                console.log(self.category,name);  
            });
    */

        call : function(){
        this.names.map((name) => {
        console.log(this.category,name);  });

        // arrow functionlar için durum farklıdır. arrow functionlar this sözcüğü için ayrı bir context oluşturmazlar. bu durumda obje geçerli olmuş olur.


    }
}

list.call();

// Examp ????????

function Game(){
    this.live = 0,
        /* 
        this.addLive = function(){
            this.OneUp = setInterval(function(){
            console.log(++this.live);
            },1000);  

            çıktısı NaNdır.
        */

        this.addLive = function(){

            // this.OneUp = setInterval(() => {    
            // console.log(++this.live);
            // }, 1000);
    
        }
}

let player = new Game();

player.addLive(); 

