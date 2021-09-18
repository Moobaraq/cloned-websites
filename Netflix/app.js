const menu = document.getElementById('menu')
const body = document.querySelector('body')
const open = document.getElementById('open')
const close = document.getElementById('close-btn')
const modal = document.getElementById('modal')
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Functions
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
//tell the user when the input is not accepted
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className= 'form-control error'
    const small = formControl.querySelector('small')
    small.innerHTML = message
}
// Check all input if they  are empty or not
function checkRequired(inputArr) {
    inputArr.forEach( element => {
        if(element.value.trim() === ""){
            showError(element, `${element.id} is required`)
        }else{
            showSuccess(element)
        }
    });
}
//To check the numbers of character the user input and make sure it is not too short or too long
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${input.id} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${input.id} must be at most ${max} characters`)
    }else{
        showSuccess(input)
    }
}
//make sure the passwords are the same 
function checkPassword(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input2)
    }else{
        showError(input2, `${input2.id} does not match`)
    }
}
// validate the user email
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input)) {
        showSuccess(input)
    }else{
        showError(input, "Email is not valid")
    }
}

// Event listeners
//to check all the functions when the form is submitted
form.addEventListener('submit', e => {
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 5, 25)
    checkLength(password, 8, 20)
    checkPassword(password, password2)
    checkEmail(email)

})
//to add and remove the nav tag
menu.addEventListener('click', ()=> {
    body.classList.toggle('show-nav')
})
//to open the modal tag and make sure the nav tag is closed
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
    if(body.classList.contains('show-nav')) {
        body.classList.remove('show-nav')
    }
})
//close the modal tag
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
//close the modal tag when an empty space is clicked
window.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false
})