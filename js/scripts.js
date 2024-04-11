const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    //verifica se o nome esta vazio
    if (nameInput.value === "") {
        alert("Por favor, insira o teu nome")
        return;
    }

    //verifica se o Email esta vazio
    if (emailInput.value === "" || !isEmailvalid()) {
        alert("Por favor, insira o teu Email")
        return;
    }

    //verifica se a senha esta preenchido e correcta
    if (password(passwordInput.value, 8)) {
        alert("A senha precisa no minimo de 8 digitos")
        return;
    }

    //verifica se a situação foi selecionada
    if (jobSelect === "") {
        alert("Por favor preencha a situação de traballho")
        return;
    }

    if (messageTextarea === "") {
        alert("Por favor, escreva uma mensagem")
        return;
    }

    form.submit()
})


//funcção que valida E-mail
function isEmailvalid(Email) {


    // cria juma regex para validar o email
    const emailRegex = new RegExp(
        //Usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(Email)) {
        return true
    } else {
        return false
    }
}
// função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        //Senha valida
        return true
    } else {
        //Senha inválida
        return false
    }
}