import { is } from "date-fns/locale";
import  "./styles.css"



const content = document.getElementById("content")

console.log('starting')

const form = document.querySelector("form");
const email = document.getElementById("email");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const ausStates = ['NSW', 'QLD', 'SA', 'VIC', 'WA', 'NT', 'ACT', 'TAS']

const isValidEmail = () =>{
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity
};

const isValidState = () => {
    const validity = ausStates.includes(state.value);
    return validity;
}

const isValidPostcode = () =>{
    const validity = postcode.value.length === 4;
    return validity;
}

const isValidPassword = () => {
    const validity = password.value.length >= 8 && passwordRegExp.test(password.value);
    return validity;
}


const passwordsMatch = () => {
    const validity = confirmPassword.value === password.value;
    return validity;
}


const validators = new Map([
    [email, {validate: isValidEmail, errorMsg: "Please enter a valid email"}],
    [postcode, {validate: isValidPostcode, errorMsg: "Postcodes must contain exactly 4 digits"}],
    [password, {validate: isValidPassword, errorMsg: "Passwords must contain 8 characters including one letter and one number"}],
    [confirmPassword, {validate: passwordsMatch, errorMsg: "Passwords do not match"}],
])




validators.forEach((validation, inp) =>{
    const inputElement = document.getElementById(inp.getAttribute("id"));
    inputElement.addEventListener("input", (event) =>{
        inputElement.classList.remove("blank");
        const spanElement = inputElement.parentElement.querySelector("span");
        spanElement.classList.add("active");
       

        if(validation.validate(inp.value)) {
            setValidConditions(spanElement, inputElement)
        }
        else {
            showError(inputElement, spanElement);
        }
    })
})



const setValidConditions = (field, inp) => {
     field.textContent = "";
     field.classList.remove("active");
     inp.className = "valid-field";
}



const showError = (input, errorField) =>{
    errorField.className = "error active";
    input.className = "invalid-field";

    if(input.validity.valueMissing){
        errorField.textContent = "This field cannot be blank"
    } else {
        const inputField = validators.get(input);
        errorField.textContent = inputField.errorMsg
    }
}


const setToInvalid = (element) => {
    element.classList.add("invalid-field");
    element.classList.remove("valid-field");
}

const setToValid = (element) => {
    element.classList.remove("valid-field");
    element.classList.add("valid-field")
}








form.addEventListener("submit" , (event) => {
    
    if (!document.querySelector(".valid-field")){
        event.preventDefault()
        alert("Please fill out all fields correctly")
    } else {
    // if (!form.validity.valid) {
    //     setTimeout(() => {
    //     console.log("timeout")}, 100000)
      
    //     event.preventDefault();
    // } else {
    //     setTimeout(() => {
    //     console.log("timeout")}, 100000)
    //     alert("Well done. High five! 🖐")
    // }
    alert("Well done. High five! 🖐")
}
})



