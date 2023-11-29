var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function inictto() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var tto = '<button name="cij" onclick="restto()" class="botaodiv">Peças</button>'
    var ttocon = '<button name="cij" onclick="conexaoTTO()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">TTO</p>${tto} ${ttocon}`
}

function restto() {
    var c6210 = '<button name="tto" onclick="c6210()" class="botaodiv">6210</button>'
    var cdfp = '<button name="tto" onclick="cdfp()" class="botaodiv">DF+</button>'
    var c632032 = '<button name="tto" onclick="c632032()" class="botaodiv">6320 32mm</button>'
    var c632053 = '<button name="tto" onclick="c632053()" class="botaodiv">6320 53mm</button>'
    var c642053 = '<button name="tto" onclick="c642053()" class="botaodiv">6420 53mm</button>'
    var c6420107 = '<button name="tto" onclick="c6420107()" class="botaodiv">6420 107mm</button>'
    var c6230 = '<button name="tto" onclick="c6230()" class="botaodiv">6230</button>'
    var c633032 = '<button name="tto" onclick="c633032()" class="botaodiv">6330 32mm</button>'
    var c633053 = '<button name="tto" onclick="c633053()" class="botaodiv">6330 53mm</button>'
    var c653053 = '<button name="tto" onclick="c653053()" class="botaodiv">6530 53mm</button>'
    var c6530107 = '<button name="tto" onclick="c6530107()" class="botaodiv">6530 107mm</button>'
    divres.innerHTML = `<p class="adivera">Peças TTO</p>${c6210} ${cdfp} ${c632032} ${c632053} ${c642053} ${c6420107} ${c6230} 
    ${c633032} ${c633053} ${c653053} ${c6530107}`
    
  }
function c6210() {
    list.innerHTML = ''
    mod.innerHTML = '6210<br>'
    divptitulo.innerHTML = '403325	CABECA DE IMPRESSAO 32MM 6210-TTO<br>403330-UN  - CORREIA DENTADA VJ6210<br>'  
    var ler = `
		<button  class="botaodiv" onclick="modelo('6210a')">Peças Ilustradas</button><br>
		<button  class="botaodiv" onclick="modelo('6210b')">Peças IPB</button><br>`
	list.innerHTML = ler
}
function cdfp() {
    list.innerHTML = ''
    mod.innerHTML = 'DATAFLEX PLUS<br>'
    divptitulo.innerHTML = '215984 - Cabeça DF+ 53MM<br>216585 - Cabeça DF+ 107mm<br>216037-UN - Correia DF+<br>'  
    var ler = `
		<button  class="botaodiv" onclick="modelo('dfpi')">Peças Ilustradas</button><br>
		<button  class="botaodiv" onclick="modelo('dfpIPB')">Peças IPB</button><br>`
    list.innerHTML = ler
}
function c632032() {
    list.innerHTML = ''
    mod.innerHTML = '6320 Cabeça 32mm<br>'
    divptitulo.innerHTML = '403325 - CABECA DE IMPRESSAO 32MM 6320-TTO<br>216037-UN - CORREIA DA CABECA 32MM<br>'
    var ler = `<button  class="botaodiv" onclick="modelo('632032')">Peças Ilustradas</button><br>`
    list.innerHTML = ler
}
function c632053() {
    list.innerHTML = ''
    mod.innerHTML = '6320 Cabeça 53mm<br>'
    divptitulo.innerHTML = '215984 - CABECA DE IMPRESSAO 53MM 6320-TTO<br>216037-UN - CORREIA DA CABECA 53MM<br>'  
    var ler = `<button  class="botaodiv" onclick="modelo('632032')">Peças Ilustradas</button><br>`
    list.innerHTML = ler
}
function c642053() {
    list.innerHTML = ''
    mod.innerHTML = '6420 Cabeça 53mm<br>'
    divptitulo.innerHTML = '215984 - CABECA DE IMPRESSAO 53MM 6420-TTO<br>216037-UN - CORREIA DA CABECA  53MM<br>'  
    var ler = `<button  class="botaodiv" onclick="modelo('642053')">Peças Ilustradas</button><br>`
    list.innerHTML = ler
}
function c6420107() {
    list.innerHTML = ''
    mod.innerHTML = '6420 Cabeça 107mm<br>'
    divptitulo.innerHTML = '216585 - CABECA DE IMPRESSAO 107MM 6420-TTO<br>216037-UN - CORREIA CABECA DE IMPRESSAO 107MM<br>'  
    var ler = `<button  class="botaodiv" onclick="modelo('6420107')">Peças Ilustradas</button><br>`
    list.innerHTML = ler
}
function c6230() {
    list.innerHTML = ''
    mod.innerHTML = '6230<br>'
    divptitulo.innerHTML = '408300 - CABECA DE IMPRESSAO DE 32MM 6230-TTO<br>408298 - CORREA  6230 (5 UNIDADES)<br>'  
    var ler1 = `<button  class="botaodiv" onclick="modelo('6230l')">Peças Lista</button><br>`
    var ler2 = `<button  class="botaodiv" onclick="modelo('6230i')">Peças Ilustradas</button><br>`
    list.innerHTML = `${ler1} ${ler2}`
}
function c633032() {
    list.innerHTML = ''
    mod.innerHTML = '6330 cabeça 32mm<br>'
    divptitulo.innerHTML = '408657 - CABECA DE IMPRESSAO 32MM 6330-TTO<br>407931 - CORREIA   6330-TTO<br>'  
	var ler0 = `<button  class="botaodiv" onclick="modelo('633032l')">Peças Lista</button><br>`
    //var ler1 = `<button  class="botaodiv" onclick="modelo('633032i')">Peças Ilustradas</button><br>`
    list.innerHTML = ler0
}
function c633053() {
    list.innerHTML = ''
    mod.innerHTML = '6330 cabeça 53mm<br>'
    divptitulo.innerHTML = '407933 - CABECA DE IMPRESSAO 53MM 6330-TTO<br>407931 - CORREIA 6330-TTO<br>'  
    var ler1 = `<button  class="botaodiv" onclick="modelo('633053l')">Peças Lista</button><br>`
    var ler2 = `<button  class="botaodiv" onclick="modelo('633053i')">Peças Ilustrada</button><br>`
    list.innerHTML = `${ler1} ${ler2}`
}
function c653053() {
    list.innerHTML = ''
    mod.innerHTML = '6530 cabeça 53mm<br>'
    divptitulo.innerHTML = '407933 - CABECA DE IMPRESSAO 53MM 6530-TTO<br>407931 - CORREIA   6330-TTO<br>'  
    var ler = `<button  class="botaodiv" onclick="modelo('653053l')">Peças Lista</button><br>`
    list.innerHTML = ler
}
function c6530107() {
    list.innerHTML = ''
    mod.innerHTML = '6530 cabeça 107mm<br>'
    divptitulo.innerHTML = '408554 - CABECA DE IMPRESSAO 107MM 6530-TTO<br>408677 - CORREIA   6530-TTO<br>'  
    var ler1 = `<button  class="botaodiv" onclick="modelo('6530107l')">Peças Lista</button><br>`
    var ler2 = `<button  class="botaodiv" onclick="modelo('6530107i')">Peças Ilustrada</button><br>`
    list.innerHTML = `${ler1} ${ler2}`
}
function modelo(tto) {
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 870px;
		}
	</style>`
	list.innerHTML = ''
    divptitulo.innerHTML = ''
	var ttoo = tto
	if(ttoo == '6210a') {
		mod.innerHTML = '6210<br>'
		list.innerHTML = pdf+`<iframe src="tto/6210i.pdf" class="tam"></iframe>`
	}else if(ttoo == '6210b') {
		mod.innerHTML = '6210<br>'
		list.innerHTML = pdf+`<iframe src="tto/6210IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == 'dfpi') {
		mod.innerHTML = 'DATAFLEX PLUS<br>'
		list.innerHTML = pdf+`<iframe src="tto/dfpi.pdf" class="tam"></iframe>`
	}else if(ttoo == 'dfpIPB') {
		mod.innerHTML = 'DATAFLEX PLUS<br>'
		list.innerHTML = pdf+`<iframe src="tto/dfpIPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '632032') {
		mod.innerHTML = '6320 Cabeça 32mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6320IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '632053') {
		mod.innerHTML = '6320 Cabeça 53mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6320IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '642053') {
		mod.innerHTML = '6420 Cabeça 53mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6420IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '6420107') {
		mod.innerHTML = '6420 Cabeça 107mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6420IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '6230l') {
		mod.innerHTML = '6230<br>'
		list.innerHTML = pdf+`<iframe src="tto/6230list.pdf" class="tam"></iframe>`
	}else if(ttoo == '6230i') {
		mod.innerHTML = '6230<br>'
		list.innerHTML = pdf+`<iframe src="tto/IPB 6230.pdf" class="tam"></iframe>`
	}else if(ttoo == '633032l') {
		mod.innerHTML = '6330 Cabeça 32mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6330 32_53 List.pdf" class="tam"></iframe>`
	}else if(ttoo == '633053l') {
		mod.innerHTML = '6330 Cabeça 53mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6330 32_53 List.pdf" class="tam"></iframe>`
	}else if(ttoo == '633053i') {
		mod.innerHTML = '6330 Cabeça 53mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/633053IPB.pdf" class="tam"></iframe>`
	}else if(ttoo == '653053l') {
		mod.innerHTML = '6330 Cabeça 53mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/653053_107l.pdf" class="tam"></iframe>`
	}else if(ttoo == '6530107l') {
		mod.innerHTML = '6330 Cabeça 107mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/653053_107l.pdf" class="tam"></iframe>`
	}else if(ttoo == '6530107i') {
		mod.innerHTML = '6330 Cabeça 107mm<br>'
		list.innerHTML = pdf+`<iframe src="tto/6530107IPB.pdf" class="tam"></iframe>`
	}else {alert('ERRO - Este item não existe')}
}
