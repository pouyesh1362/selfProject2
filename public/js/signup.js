// console.log("this is a sign up page");

const formValidation = true;

function submitForm(event){
    event.preventDefault();
console.log('click');
    const name= $(`#name`).val();
    const lastName= $(`#lastName`).val();
    const email= $(`#email`).val();
    const age= $(`#age`).val();
    const password1= $(`#password`).val();
    const password2= $(`#conform_password`).val();

    if(password1 !== password2){
       alert("password doesn't match");
       formValidation = false;
    }
    if(name.length < 3 &&lastname.length < 3 && age < 18){
         alert('not valid entry ')
         formValidation = false;
    }
    if(formValidation){
    const userDate = {
         name : name,
         familyName: lastName,
         email: email,
         age: age,
         password: password1,
     }
 }
}



$(`#signin-btn`).on(`click`, submitForm);