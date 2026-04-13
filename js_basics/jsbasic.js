let age=22;
let fullname="Gopi";
let status="single";

document.getElementById("p1").textContent=`my name is ${fullname}`;
document.getElementById("p2").textContent=`my age is ${age}`;
document.getElementById("p3").textContent=`status: ${status}`;

let user;
document.getElementById("mysubmit").onclick=function(){
    user=document.getElementById("mytext").value;
    document.getElementById("res").textContent=`Hi MR.${user}`;
}

/* type conversion*/
let age1=window.prompt("what is your age???");
age1=Number(age1);
age+=1;
console.log(age, typeof age);
age3=67
age3>18?console.log("you are eligible"): console.log("you are not eligible");