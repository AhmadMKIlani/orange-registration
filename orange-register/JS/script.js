// 1. Err MSG when : 
// a. email is empty 
// b. password is empty
// c. Mobile is empty 
// d. agree terms checkbox not checked
// 2. validation ;
// a. Email should  match the email pattern 
// b. Phone Number should be an Orange number 
// c. password should be 6-8 characters and contain mixed char

const email = document.getElementById("email-input");
const pNumber = document.getElementById("number-input");
const passWord = document.getElementById("passWord-input");
const terms = document.getElementById("terms");


const first= document.getElementById("first-feild"); 
const secondtFeild = document.getElementById("second-feild"); 
const thirdFeild = document.getElementById("third-feild"); 
const firstCheck = document.getElementById("first-check"); 

const form = document.querySelector("form");

let mistake;


let emailRegex =  /^[a-zA-Z0-9._-]+@(hotmail|gmail|yahoo).com$/;
let phoneRegex = /077[0-9]{7}/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,18}$/;


function checkIfEmpty(){
    try{
        if(email.value === ""){
                mistake="email";
        }else if(pNumber.value === ""){
            mistake="pNumber";
        }else if(passWord.value ===""){
            mistake= "passWord";
        }
            throw "this field is required";
    }catch(error){
          show(error);
    }
}

function show(message){

if (mistake === "email"){
    first.innerText = message;
}else if (mistake === "pNumber"){
    secondtFeild.innerText = message;
}else if (mistake === "passWord"){
    thirdFeild.innerText = message;
}
}

email.addEventListener("blur" , validation);
pNumber.addEventListener("blur" , validation);
passWord.addEventListener("blur" , validation);


function validation(){
    try{
        if(email.value != ""){
            if(emailRegex.test(email.value)){
                first.innerText = "";
            }else{
                throw "this email is the wrong format";
            }

        }else{
            checkIfEmpty();
        }
        if(pNumber.value != ""){
            if(phoneRegex.test(pNumber.value)){
                secondtFeild.innerText = "";
            }else{
                throw "this number is the wrong format";
            }

        }else{
            checkIfEmpty();
        }

        if(passWord.value != ""){
            if(passwordRegex.test(passWord.value)){
                thirdFeild.innerText = "";
            }else{
                throw "the password needs to be fixed";
            }

        }else{
            checkIfEmpty();
        }


    }catch(error){
        show(error);
    }
}


form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    if(first.innerText === "" && secondtFeild.innerText === "" && thirdFeild.innerText === ""&& terms.checked) {
          
    }else{
        firstCheck.innerText = "terms and conditions are not checked";
    }
})

