const temp =document.getElementById("temp");
const tofah =document.getElementById("tofah");
const tocel =document.getElementById("tocel");
const result =document.getElementById("result");

let conv;

function convert(){
if(tofah.checked){
    conv=Number(temp.value);
    conv= conv*9/5+32;
    result.textContent=conv.toFixed(1)+'F';
}
else if(tocel.checked){
  conv=Number(temp.value);
  conv=5/9*(conv-32);
  result.textContent=conv.toFixed(1)+'C';
}
else{
    result.textContent='select a unit';
}
}