let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
//contact 
const btnAdd = document.getElementById("btnAdd")

const txtName = document.getElementById("txtName")
const txtNumber = document.getElementById("txtNumber")
const txtEmail  = document.getElementById("txtEmail");
const txtDetails = document.getElementById("txtDetails")
const regexEmail =  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

let isValid = true

btnAdd.addEventListener("click",function(e){

    //name 
    if(txtName.value == ""){
       txtName.nextElementSibling.textContent = "Please Enter Name"
       isValid = false
    
    }
     else{
      txtName.nextElementSibling.textContent = "";
     }
    //number 
     if(txtNumber.value ==""){
         txtNumber.nextElementSibling.textContent = "Please Enter Number"
         isValid = false
     }
     else if(txtNumber.value.length!=10){
         txtNumber.nextElementSibling.textContent = "Please Enter Valid Number"
         isValid = false;
     }
     else {
         txtNumber.nextElementSibling.textContent = ""
     }
    //email
     if(txtEmail.value ==""){
         txtEmail.nextElementSibling.textContent  = "Please Enter Email"
         isValid = false
     }
     else if(regexEmail.test(txtEmail.value)==false){
         txtEmail.nextElementSibling.textContent = "Please Enter Valid Email";
         isValid = false
     }
    else {
        txtEmail.nextElementSibling.textContent = "";
    }

    //Details
    if(txtDetails.value == ""){
        txtDetails.nextElementSibling.textContent = "Please Enter"
        isValid = false
     
     }
      else{
       txtDetails.nextElementSibling.textContent = "";
      }

    if(isValid == false){
        e.preventDefault();
    }
})
