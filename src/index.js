const content = document.getElementById("content")

console.log('starting')

const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailRegExp = "/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;";
const passwordRegExp = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

const isValidEmail = () =>{
    const validity = email.ariaValueMax.length !== 0 && emailRegExp.test(email.value);
    return validity
};


const isValidCountry = () => {
    const validity = country.value.length >=3;
    return validity;
}

const isValidPostcode = () =>{
    const validity = postcode.length === 4;
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




