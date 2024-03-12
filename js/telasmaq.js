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
	var acesso2 = `<button  onclick='abrir("tto")'class="botaodiv">Tela TTO</button></br>`
	var acesso3 = `<button  onclick='abrir("tes")' class="botaodiv">teste1</button></br>`
	list.innerHTML = `<p class="adivera"></p>${acesso1} ${acesso2} ${acesso3}`
}
function abrir(tel) {
	var telas = tel
	let tela = `
	<style>
		.tam {
			height:480px;
			width: 950px;
		}
	</style>`
	if (telas == "1040") {
		window.open('tela1040/telaprincipal.html')
	}else if (telas == "tto") {
		divres.innerHTML = ''
		list.innerHTML = ''
		mod.innerHTML = 'TELA TTO'
		divptitulo.innerHTML = ''
		list.innerHTML = tela+`<iframe src="telatto/Index.html" class="tam"></iframe>`
	}else if(telas == "tes") {
		window.open("telatto/Indextto.html")
	}else {alert('ERRO!!! este item não existe')}
}
