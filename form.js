
let usernamee= document.getElementById("username");
let passwordd=document.getElementById("pswrd");
let temp={
    user: 0,
    pass: 0
};
function validateform(){
    if(!username.value){
        document.getElementById("user_error").innerHTML= "Username is empty";
        temp.user=0;
       
    }
    else if(username.value.length < 3){
        document.getElementById("user_error").innerHTML="Username required minimum 3 characters";
        temp.user=0;
    }
    else{
        document.getElementById("user_error").innerHTML="";
        temp.user=1;
    }
    if(!pswrd.value){
        document.getElementById("passwrod_error").innerHTML="Password is empty";
        temp.pass=0;
    } 
    else if(pswrd.value.length < 8){
        document.getElementById("passwrod_error").innerHTML="Password needs to be atleast 8 character long";
        temp.pass=0;
    }
    else{
        document.getElementById("passwrod_error").innerHTML="";
        temp.pass=1;
    }
    if(temp.user && temp.pass){
        alert("Form validated successfully");
        return true;
         
    }
    else{
        return false;
    }
    
    
}
    
        
