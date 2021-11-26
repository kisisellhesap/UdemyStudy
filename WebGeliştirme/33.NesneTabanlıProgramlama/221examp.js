    let employee = function (name,salary) {
        this.name=name;
        this.salary=salary;
        
     
    }

employee.prototype.tax=function() {
   
        let taxTotal;
        let taxSum;
        let month= new Date().getMonth()+1;
        let totalSalary=this.salary*month;
    
     
        if (totalSalary<=20000) {
            taxSum=(totalSalary*20/100);
           taxTotal= totalSalary- taxSum;
            console.log(`Alınan aylık maaş : ${this.salary} TL\n${month} ayda alınan toplam maaş : ${totalSalary} TL\nAlınan vergi tutarı : ${taxSum} TL\nVergiden kalan: ${taxTotal} TL`)
        }
        else if (totalSalary<=30000) {
            taxSum=(totalSalary*25/100);
            taxTotal= totalSalary- taxSum;
            console.log(`Alınan aylık maaş : ${this.salary} TL\n${month} ayda alınan toplam maaş : ${totalSalary} TL\nAlınan vergi tutarı : ${taxSum} TL\nVergiden kalan: ${taxTotal} TL`)
        }

        else if (totalSalary>30000) {
            taxSum=(totalSalary*30/100);
            taxTotal= totalSalary- taxSum;
            console.log(`Alınan aylık maaş : ${this.salary} TL\n${month} ayda alınan toplam maaş : ${totalSalary} TL\nAlınan vergi tutarı : ${taxSum} TL\nVergiden kalan: ${taxTotal} TL`)
        }

  
}
    

    let can = new employee("can",2000);
    let selin = new employee("selin",8000);
    
console.log("CAN-------");
    can.tax();
    
console.log("SELİN-------");
    selin.tax();  

   
    

    



 