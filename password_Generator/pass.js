function password(){
    const pass= document.getElementById("pass");
    const pass_length=12;
    const islowercase_chars=true;
    const isuppercase_chars=true;
    const isnumber=true;
    const issymbols=true;

    const lowerchars="abcdefghijklmnopqrstuvwxyz";
    const upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars='1234567890';
    const symbolschars="!@#$%^&*(){}";
    let allowedchars='';
    let generated_password='';

    allowedchars+=isuppercase_chars ? upperchars :"";
    allowedchars+=islowercase_chars ? lowerchars :"";
    allowedchars+=isnumber ? numberchars : "";
    allowedchars+=issymbols ? symbolschars : "";
   

    if (pass_length<=0){
        return `(password length atleast 8 characters long)`;
    }

    if(allowedchars.length=== 0){
        return `(Atleast one set of characteristic need to be selected)`;
    }

    for(let i=0; i<=pass_length; i++){
        const random_idx= Math.floor(Math.random()*allowedchars.length);
        generated_password+=allowedchars[random_idx];

        
    }

    return pass.textContent=generated_password;

}
