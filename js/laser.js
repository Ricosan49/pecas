var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function iniclaser() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var laser = '<button name="cij" onclick="reslaser()" class="botaodiv">Peças</button>'
    var tubos = `<button name="cij" onclick='lasers("tubo")' class="botaodiv">Tubos</button>`
    var cextrator = '<button name="cij" onclick="extratores()" class="botaodiv">Extratores</button>'
    var lasercon = '<button name="cij" onclick="conexaolaser()" class="botaodiv">Circuito de Ligação</button>'
	var respelhos = '<button name="cij" onclick="lentesco2()" class="botaodiv">Lentes CO2</button>'
    divres.innerHTML = `<p class="adivera">LASER</p>${laser} ${cextrator} ${lasercon} ${tubos} ${respelhos}`
}

function reslaser() {
    var r30x0 = '<button onclick="lasers(3020)" class="botaodiv">3010/3020</button>'
    var r3x20 = '<button onclick="lasers(3320)" class="botaodiv">3120/3320</button>'
    var r3x30 = '<button onclick="lasers(3330)" class="botaodiv">3130/3330</button>'
    var r3x40 = '<button onclick="lasers(3640)" class="botaodiv">3140/3340/3640</button>'
    var f7220 = '<button onclick="lasers(7320)" class="botaodiv">7220 - 7320</button>'
	var f7210 = '<button onclick="lasers(7310)" class="botaodiv">7210 - 7310</button>'
	var f7230 = '<button onclick="lasers(7330)" class="botaodiv">7230 - 7330</button>'
	var f7340 = '<button onclick="lasers(7440)" class="botaodiv">7340 - 7440</button>'
	var f7510 = '<button onclick="lasers(7510)" class="botaodiv">7510</button>'
	var f7610 = '<button onclick="lasers(7610)" class="botaodiv">7610</button>'
	var f7810 = '<button onclick="lasers(7810)" class="botaodiv">7810</button>'
    divres.innerHTML = `<p class="adivera">Peças LASERS</p>${r30x0} ${r3x20} ${r3x30} ${r3x40} ${f7220}
	${f7230} ${f7210} ${f7340} ${f7510} ${f7610} ${f7810}`
    
}
function lentesco2() {
    list.innerHTML = ''
    mod.innerHTML = 'Lentes CO2<br>'
    divptitulo.innerHTML = ''  
    var tip = `<button onclick='lenteco2("tipo")' class="botaodiv">Tipo da Lente</button>`
    var med = `<button onclick='lenteco2("medi")' class="botaodiv">Medidas Lente</button>`
    var limp = `<button onclick='lenteco2("prev")' class="botaodiv">Preventiva Lente</button>`
    divres.innerHTML = `<p class="adivera">Lentes CO2</p>${tip} ${med} ${limp}`
}
function lenteco2(tipo) {
	var len = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if (len == "prev"){
		mod.innerHTML = 'Preventiva<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="laser/lenteprev.pdf" class="tam"></iframe>`
	}else if(len == "medi") {
		mod.innerHTML = 'Medidas / Codigos<br>'
		divptitulo.innerHTML = '' 
		list.innerHTML = pdf+`<iframe src="laser/lentesmedidasco2.pdf" class="tam"</iframe>`
	}else if(len == "tipo") {
		mod.innerHTML = 'Tipo<br>'
		divptitulo.innerHTML = '' 
		list.innerHTML = pdf+`<iframe src="laser/lentetipoCO2.pdf" class="tam"></iframe>`
	}else {alert('ERRO!!! este item não existe!')}
    
}
function tubos() {
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	
    list.innerHTML = ''
    mod.innerHTML = 'Tubos Lasers<br>'
    divptitulo.innerHTML = 'Novos codigos dos tubos Lasers<br>'  
    list.innerHTML = pdf+`<iframe src="laser/TubosnovosBT.pdf" class="tam">ola mundo</iframe>`
    
}
function lasers(tipo) {
	var conecta = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(conecta == "3020") {
		mod.innerHTML = '3120/3320<br>'
		divptitulo.innerHTML = 'AL-SP73539 - TUBO DE CO2 10.6NM/10W MODELO 3010/3020<br>'  
		list.innerHTML = pdf+`<iframe src="laser/30x0.pdf" class="tam"></iframe>`
	}else if(conecta == "3320") {
		mod.innerHTML = '3120/3320'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/3x20.pdf" class="tam"></iframe>`
	}else if(conecta == "3330") {
		mod.innerHTML = '3130/3330'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/3x30.pdf" class="tam"></iframe>`
	}else if(conecta == "3640") {
		mod.innerHTML = '3140/3340/3640'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/3x40.pdf" class="tam"></iframe>`
	}else if(conecta == "7320") {
		mod.innerHTML = '7220 - 7320'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/7220 - 7320.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7310") {
		mod.innerHTML = '7210 - 7310'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/7210-7310.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7330") {
		mod.innerHTML = '7230 - 7330<br>'
		divptitulo.innerHTML = ''
		list.innerHTML = pdf+`<iframe src="laser/7230-7330.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7440") {
		mod.innerHTML = '7340 - 7440<br>'
		divptitulo.innerHTML = ''
		list.innerHTML = pdf+`<iframe src="laser/7340-7440.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7510") {
		mod.innerHTML = '7510<br>'
		divptitulo.innerHTML = ''
		list.innerHTML = pdf+`<iframe src="laser/7510.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7610") {
		mod.innerHTML = '7610<br>'
		divptitulo.innerHTML = ''
		list.innerHTML = pdf+`<iframe src="laser/7610.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "7810") {
		mod.innerHTML = '7810<br>'
		divptitulo.innerHTML = ''
		list.innerHTML = pdf+`<iframe src="laser/7810.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "tubo") {
		mod.innerHTML = 'Tubos Lasers<br>'
		divptitulo.innerHTML = 'Novos codigos dos tubos Lasers<br>' 
		list.innerHTML = pdf+`<iframe src="laser/TubosnovosBT.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
}
function extratores() {
    var ad = `<button onclick='extra("ad")' class="botaodiv">Extratores antigos</button>`
    var lite = `<button onclick='extra("lite")' class="botaodiv">Xtract Lite</button>`
    var max = `<button onclick='extra("max")' class="botaodiv">Xtract Max</button>`
    var pro = `<button onclick='extra("pro")' class="botaodiv">Xtract Pro</button>`
    var pvc = `<button onclick='extra("pvc")' class="botaodiv">Xtract PVC</button>`
	divres.innerHTML = `<p class="adivera">Extratores</p>${ad} ${lite} ${max} ${pro} ${pvc}`
}
function extra(tipo) {
	var conecta = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(conecta == "ad") {
		mod.innerHTML = 'Extratores antigos<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="laser/extratorantigo.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "lite") {
		mod.innerHTML = 'Xtract Lite'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/XtractLite.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "max") {
		mod.innerHTML = 'Xtract Max'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/XtractMax.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "pro") {
		mod.innerHTML = 'Xtract Pro'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/XtractPro.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "pvc") {
		mod.innerHTML = 'Xtract PVC'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="laser/XtractPVC.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
}
function conexaolaser() {
    var acc = `<button onclick='cl("acc")' class="botaodiv">ACC3</button>`
    var ch = `<button onclick='cl("ch")' class="botaodiv">Chamilion</button>`
    var tras30 = `<button onclick='cl("trase")' class="botaodiv">Conectores traseiros 3130/3330</button>`
	var tras40 = `<button onclick='cl("trase4")' class="botaodiv">Conectores traseiros 3140/3340/3640</button>`
    var x9 = `<button onclick='cl("bx9")' class="botaodiv">X9</button>`
    var db15 = `<button onclick='cl("io3010")' class="botaodiv">I/O 3010/3020</button>`
	var fibr = `<button onclick='cl("fibra")' class="botaodiv">I/O Fibra</button>`
	divres.innerHTML = `<p class="adivera">Conexões</p>${db15} ${acc} ${ch} ${tras30} ${tras40} ${x9} ${fibr}`
}
function cl(tip) {
	var modelo = tip
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(modelo == "acc") {
		mod.innerHTML = 'Conexões 3120/3320<br>'
		list.innerHTML = pdf+`<iframe src="laser/IO3120 3320.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "ch") {
		mod.innerHTML = 'Conexões 3140/3340<br>'
		list.innerHTML = pdf+`<iframe src="laser/IO3140 3340.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "trase") {
		mod.innerHTML = 'Conexões treseiras do controlador<br>'
		list.innerHTML = pdf+`<iframe src="laser/IO3330.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "bx9") {
		mod.innerHTML = 'Conexões do X9<br>'
		list.innerHTML = pdf+`<iframe src="laser/IOX9.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "io3010") {
		mod.innerHTML = 'Conexões 3010/3020<br>'
		list.innerHTML = pdf+`<iframe src="laser/IO3010.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "fibra") {
		mod.innerHTML = 'Conexões FIBRA<br>'
		list.innerHTML = pdf+`<iframe src="laser/IOFIBRA.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "trase4") {
		mod.innerHTML = 'Conexões 3140/3340<br>'
		list.innerHTML = pdf+`<iframe src="laser/IO3x40.pdf" class="tam">ola mundo</iframe>`
	}else {window.alert('ERRO: imagem não encontrada')}
}
