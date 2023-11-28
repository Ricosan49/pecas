var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function inictij() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var tij = '<button name="cij" onclick="restij()" class="botaodiv">Peças</button>'
    var tijcon = '<button name="cij" onclick="conexaotij()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">TIJ</p>${tij} ${tijcon}`
}

function restij() {
    var cm600adv = `<button name="cij" onclick='cwolke("600adv")' class="botaodiv">M600 Advanced</button>`
	var cm600oem = `<button name="cij" onclick='cwolke("600oem")' class="botaodiv">M600 OEM</button>`
	var cm610adv = `<button name="cij" onclick='cwolke("610adv")' class="botaodiv">M610 Advenced</button>`
	var cm610oem = `<button name="cij" onclick='cwolke("610oem")' class="botaodiv">M610 OEM</button>`
    var c8510 = `<button name="cij" onclick='cwolke("8510")' class="botaodiv">8510</button>`
    var c8520 = `<button name="cij" onclick='cwolke("8520")' class="botaodiv">8520</button>`
    var c8610 = `<button name="cij" onclick='cwolke("8610")' class="botaodiv">8610</button>`
    divres.innerHTML = `<p class="adivera">Peças TIJ</p>${cm600adv} ${cm600oem} ${cm610adv} ${cm610oem} ${c8510} ${c8520} ${c8610}`
    
}
function cwolke(tipo) {
    var wolk = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(wolk == "600adv") {
		mod.innerHTML = 'M600 Advanced<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="tij/m600adv.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "600oem") {
		mod.innerHTML = 'M600 OEM'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/m600oem.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "610adv") {
		mod.innerHTML = 'M610 Advenced'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/m610adv.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "610oem") {
		mod.innerHTML = 'M610 OEM'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/m610oem.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "8510") {
		mod.innerHTML = '8510'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/8510.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "8520") {
		mod.innerHTML = '8520'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/8520A.pdf" class="tam">ola mundo</iframe>`
	}else if(wolk == "8610") {
		mod.innerHTML = '8610'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="tij/8610.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
    
}
