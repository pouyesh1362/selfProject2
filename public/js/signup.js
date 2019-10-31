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
    if(name.length < 3 &&lastName.length < 3 && age < 18){
         alert('not valid entry ')
         formValidation = false;
    }
    if(formValidation){
    const userData = {
         name : name,
         familyName: lastName,
         email: email,
         age: age,
         password: password1,
     }
fetch('api/v1/users',{
    method : 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(userData)
})
.then(stream=> stream.json())
.then(res => console.log(res))
.catch((error) =>console.log(error))
return window.location = "/signin"
};
}




$(`#submit-btn`).on(`click`, submitForm);
$(`#signin-btn`).on('click' , signinPage)