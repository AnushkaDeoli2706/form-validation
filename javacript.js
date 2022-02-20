const nam=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");

let validUser=false;
let validEmail=false;
let validPhone=false;

$('#failure').hide();
$('#success').hide();


nam.addEventListener('blur', ()=>{
    let reg=/^[A-Za-z][0-9A-Za-z]{1,9}$/;
    let str=nam.value;
    if(reg.test(str))
    {
        console.log("name valid")
        nam.classList.remove('is-invalid')
        validUser=true;
    }
    else
    {
    console.log("name invlid")
    nam.classList.add('is-invalid')
    validUser=false;
    }
})

email.addEventListener("blur",()=>{
    let reg=/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]){2,7}$/;
    let str=email.value;
    if(reg.test(str))
    {
        console.log("email valid")
        email.classList.remove('is-invalid')
        validEmail=true
    }
    else
    {
    console.log("email invlid")
    email.classList.add('is-invalid')
    validEmail=false
    }

})

phone.addEventListener("blur",()=>{
    let reg=/[0-9]{10}/;
    let str=phone.value;
    if(reg.test(str))
    {
        console.log("phone valid")
        phone.classList.remove('is-invalid')
        validPhone=true
    }
    else
    {
    console.log("phone invlid")
    phone.classList.add('is-invalid')
    validPhone=false
    }

})

let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>
{
    e.preventDefault();

    //submit form using backend 
    if(validEmail && validPhone && validUser)
    {
        let failure=document.getElementById("failure");
        let success=document.getElementById("success");
        success.classList.add("show")
        failure.classList.remove("show")
        $('#failure').hide();
        $('#success').show();
    }
    else{
        let failure=document.getElementById("failure");
        failure.classList.add("show")
        success.classList.remove("show")
        $('#success').hide();
        $('#failure').show();
    }
    
})
