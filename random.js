const passwordContainer = document.querySelector("#Password");
const length = 15;
const nm = document.querySelector("#nm");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "@#$^&*()+><.,[]{}/";
// const chars=upperCase+lowerCase+number+specialSymbol;

function createPassword() {
    if (nm.value === "") {
        passwordContainer.value = "Please , Firstly Enter your Name above 👆";
    }
    else {
        let password = "";
        password += nm.value;
        password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];


        while (length > password.length) {
            password += number[Math.floor(Math.random() * number.length)];
        }
        passwordContainer.value = password;
    }

}
const copyPassword = () => {
    passwordContainer.select();
    document.execCommand("copy");
};
const reset=()=>{
    nm.value="";
    passwordContainer.value="";
};