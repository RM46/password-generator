const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()_-+=[]{},|:;<>.?/".split("");

function generatePassword(length = 15, useSymbols = true, useNumbers = true) {
    let charset = [...letters];
    if (useSymbols) charset = charset.concat(symbols);
    if (useNumbers) charset = charset.concat(numbers);

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: ${text}`);
    });
}

document.getElementById("generate-btn").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const useSymbols = document.getElementById("include-symbols").checked;
    const useNumbers = document.getElementById("include-numbers").checked;

    const pwd1 = generatePassword(length, useSymbols, useNumbers);
    const pwd2 = generatePassword(length, useSymbols, useNumbers);

    document.getElementById("password1").textContent = pwd1;
    document.getElementById("password2").textContent = pwd2;
});

document.getElementById("password1").addEventListener("click", () => copyToClipboard("password1"));
document.getElementById("password2").addEventListener("click", () => copyToClipboard("password2"));