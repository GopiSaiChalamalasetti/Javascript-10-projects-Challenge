const dis=document.getElementById("display");
function appendToDisplay(input){
    dis.value+=input;

}
function ClearDisplay(){
    dis.value="";
}

function calculate(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="Error";
    }
    
}