

passwordLengthInput = document.getElementById("passwordLengthInput");
passwordLengthDisplay = document.getElementById("passwordLengthDisplay");
passwordTextArea = document.getElementById("passwordTextArea");

numberInputBox = document.getElementById("numberInput");
lowerInputBox = document.getElementById("lowerInput");
upperInputBox = document.getElementById("upperInput");
symbolsInputBox = document.getElementById("symbolsInput");
spaceInputBox = document.getElementById("spaceInput");
duplicateInputBox = document.getElementById("duplicateInput");

let numberInput = false;
let lowerInput = false;
let upperInput = false;
let symbolsInput = false;
let spaceInput = false;
let duplicateInput = false;

numberInputBox.addEventListener("click", () => truthChange(numberInput))
lowerInputBox.addEventListener("click", () => truthChange(lowerInput))
upperInputBox.addEventListener("click", () => truthChange(upperInput))
symbolInputBox.addEventListener("click", () => truthChange(symbolInput))
spaceInputBox.addEventListener("click", () => truthChange(spaceInput))
duplicateInputBox.addEventListener("click", () => truthChange(duplicateInput))

const truthChange = (value) => {
    value = !value 
}


passwordLengthInput.addEventListener("change", () => changeDisplayLength())

const changeDisplayLength = () => {
    passwordLengthDisplay.innerHTML = passwordLengthInput.value;
    // passwordGenerator()
}


const passwordGenerator = (password = "", passwordGeneratorArray=[]) => {

    if(numberInput){
        passwordGeneratorArray.append([48,58])
    }
    if(lowerInput){
        passwordGeneratorArray.append([97,123])
    }
    if(upperInput){
        passwordGeneratorArray.append([65,91])
    }
    if(symbolInput){
        passwordGeneratorArray.append([33,48])
    }
    if(spaceInput){
        passwordGeneratorArray.append([32,33])
    }

    for (let i = 0; i < Number(passwordLengthInput); i++) {
        password.append(randomCharGenerator[Math.floor(Math.random() * length(passwordGeneratorArray))])
        }
    passwordTextArea.innerHTML = password; 
}

const randomCharGenerator = ([beg,end]) => {
    return charCodeAt(Math.floor(Math.random() * (end-beg)) + beg)
}