var ampm="am";
setInterval(myfunction,1000);
function myfunction(){
    const d=new Date();
   var display=document.querySelector(".container");
let h=d.getHours();
   if(h>12){
    h=h-12;
    ampm="Pm";
   }
    display.innerHTML=h+":"+d.getMinutes()+":"+d.getSeconds()+" "+ampm;
}

