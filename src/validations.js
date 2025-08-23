

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const ausStates = ['NSW', 'QLD', 'SA', 'VIC', 'WA', 'NT', 'ACT', 'TAS']


const isValidState = () => {
    const validity = state.value.length >=3;
   
     
    
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
    return validity
}

const isValidEmail = () =>{
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    
    return validity
};