var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function iniclpa() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var lpa9550 = '<button  onclick="reslpa()" class="botaodiv">Peças</button>'
    var ketan = '<button  onclick="conexoes()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">LPA</p>${lpa9550} ${ketan}`
}
function reslpa() {
    var m9550 = '<button  onclick="p9550()" class="botaodiv">9550</button>'
    var mp3400 = '<button onclick="pp3400()" class="botaodiv">P3400</button>'
    var m210 = '<button onclick="p210()" class="botaodiv">210</button>'
    var mketan = '<button onclick="pketan()" class="botaodiv">KETAN</button>'
    divres.innerHTML = `<p class="adivera">Peças LPA</p>${m9550} ${mp3400} ${m210} ${mketan}`
    
}
function p9550() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças 9550<br>'
    divptitulo.innerHTML = '406315 - CABEÇA DE IMPRESSÃO 107 mm<br>409143 - CABECA DE IMPRESSAO 160 MM 160W<br>409579 - MANDRIL DE REBOBINADO DO RIBBON USADO - modelo novo mais fino<br>'  
    var ler0 = `<button onclick= 'lpax("pc9")' class="botaodiv">Peças 9550</button><br>`
    var ler1 = `<button onclick= 'lpax("pct9")' class="botaodiv">Peças TAMP 300mm</button><br>`
    var ler2 = `<button onclick= 'lpax("list9")' class="botaodiv">Lista peças Sincrona</button><br>`
    var ler3 = `<button onclick= 'lpax("listtamp")' class="botaodiv">Lista aplicador TAMP</button><br>`
    var ler4 = `<button onclick= 'lpax("listrcw")' class="botaodiv">Lista aplicador RCW</button><br>`
    var ler5 = `<button onclick= 'lpax("listfop")' class="botaodiv">Lista aplicador FOP</button>`
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5}`
    
}
function pp3400() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças P3400<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button onclick= 'lpax("p34")' class="botaodiv">Aplicador de etiquetas P3400</button><br>`
    var ler1 = `<button onclick= 'lpax("ze5")' class="botaodiv">Modulo impressor ZEBRA ZE500</button>`
    list.innerHTML = `${ler0} ${ler1}`
    
}
function p210() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças 210<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button onclick= 'lpax("210")' class="botaodiv">Aplicador de etiquetas 210</button>`
    list.innerHTML = `${ler0}`
    
}function pketan() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças Ketan<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button onclick= 'lpax("k2")' class="botaodiv">Aplicador de etiquetas K200</button>`
    list.innerHTML = `${ler0}`
    
}
function conexoes() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LPA<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button onclick= 'lpax("con9")' class="botaodiv">Conexões trazeira 9550</button><br>`
	var ler1 = `<button onclick= 'lpax("conp")' class="botaodiv">Conexões trazeira P3400</button><br>`
	var ler2 = `<button onclick= 'lpax("con210")' class="botaodiv">Conexões trazeira 210</button><br>`
    var ler3 = `<button onclick= 'lpax("conk")' class="botaodiv">Conexões trazeira K200</button>`
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3}`
    
}
function lpax(tipo) {
    var lpa = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(lpa == "pc9") {
		mod.innerHTML = 'Vista 9550<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="lpa/peca9550.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "list9") {
		mod.innerHTML = 'Lista completa Sincrona'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550sincro.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "listtamp") {
		mod.innerHTML = 'Lista completa TAMP'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550tamplista.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "listrcw") {
		mod.innerHTML = 'Lista completa RCW'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550rcw.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "listfop") {
		mod.innerHTML = 'Lista completa FOP'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550fop.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "pct9") {
		mod.innerHTML = 'Vista TAMP'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550300TTamp.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "p34") {
		mod.innerHTML = 'LPA P3400'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/P3400.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "ze5") {
		mod.innerHTML = 'Modulo Impressor ZE500'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/ze500.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "210") {
		mod.innerHTML = 'Aplicadora 210'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/210.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "k2") {
		mod.innerHTML = 'Aplicadora Ketan K200'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/K200.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "con9") {
		mod.innerHTML = 'Conexões 9550'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550conexao.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "conp") {
		mod.innerHTML = 'Conexões P3400'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/P34IO.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "con210") {
		mod.innerHTML = 'Conexoes 210'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/210conexao.pdf" class="tam">ola mundo</iframe>`
	}else if(lpa == "conk") {
		mod.innerHTML = 'Conexões K200'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/k200IO.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
    
}
