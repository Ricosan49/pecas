var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')

function telamaq() {
	divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = 'Telas de Maquinas</br>'
	var acesso1 = `<button  onclick='abrir("1040")' class="botaodiv">Tela 1040</button></br>`
	var acesso2 = `<button class="botaodiv"><a href="/telatto/indextto.html">teste</a></button></br>`
	var acesso3 = `<button  onclick='abrir("tes")' class="botaodiv">teste</button></br>`
	list.innerHTML = `<p class="adivera"></p>${acesso1} ${acesso2} ${acesso3}`
}
function abrir(tel) {
	var telas = tel
	if (telas == "1040") {
		window.open('tela1040/telaprincipal.html')
	}else if (telas == "tto") {
		window.open("telatto/index.html","_self")
	}else if(telas == "tes") {
		windows.location("https://www.videojet.com")
	}else {alert('ERRO!!! este item não existe')}
}
