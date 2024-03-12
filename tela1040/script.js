//para aparecer a data e a hora na tela constante
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()
let datahora = document.getElementById('pdatahora')

datahora.innerText = `
    ${ano}/${mes}/${dia}
    ${hora}:${min}:${seg}`

function ferram() {
    //window.alert("ola mundo")
    window.location.href = "./telas/ferramentas.html"
}

function iniciojato() {
    window.location.href = "./telas/iniciojato.html"
}

function trabalho() {
    window.alert("oi mundo!!!")
}

function trab() {
    //window.alert("ola mundo")
    window.location.href = "./telas/trabalhos.html"
}

function ajustesimples() {
    window.location.href = "./telas/ajustarsimples.html"
}