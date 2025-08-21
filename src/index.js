const content = document.getElementById("content")

console.log('starting')

const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailRegExp = "/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;";
