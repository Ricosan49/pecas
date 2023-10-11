var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function iniclcm() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var lcm = '<button name="cij" onclick="reslcm()" class="botaodiv">Peças</button>'
    //var lcmm = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var lcmcon = '<button name="cij" onclick="conexaolcm()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">LCM</p>${lcm} ${lcmcon}`
}

function reslcm() {
    var c2120 = '<button onclick="lcma(2120)" class="botaodiv">2120</button>'
    var c2340 = '<button onclick="lcma(2340)" class="botaodiv">2340</button>'
    var c2351 = '<button onclick="lcma(2351)" class="botaodiv">2351</button>'
    var c2361 = '<button onclick="lcma(2361)" class="botaodiv">2361</button>'
    var cunicorn1 = '<button onclick="lcma(1)" class="botaodiv">Unicorn 1</button>'
    var cunicorn2 = '<button onclick="lcma(2)" class="botaodiv">Unicorn 2</button>'
    divres.innerHTML = `<p class="adivera">Peças LCM</p>${c2120} ${c2340} ${c2351} ${c2361} ${cunicorn1} ${cunicorn2}`
    
}
function lcma(tipo) {
	var conecta = tipo
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`
	if(conecta == "2120") {
		mod.innerHTML = '2120<br>'
		list.innerHTML = pdf+`<iframe src="lcm/2120.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "2340") {
		mod.innerHTML = '2340<br>'
		divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>402287 - MODULO DE IMPRESSAO LCM VJ2310/2340<br>'  
		list.innerHTML = pdf+`<iframe src="lcm/234023512361.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "2351") {
		mod.innerHTML = '2351<br>'
		divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>36466 - KIT DE FILTROS DO COLETOR DE TINTA DA IMPRESSORA LCM 2351/2361<br>36485 - MODULO DE IMPRESSAO LCM V2351<br>'  
		list.innerHTML = pdf+`<iframe src="lcm/234023512361.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "2361") {
		mod.innerHTML = '2361<br>'
		divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>36466 - KIT DE FILTROS DO COLETOR DE TINTA DA IMPRESSORA LCM 2351/2361<br>36486 - MODULO DE IMPRESSAO LCM V2361<br>'  
		list.innerHTML = pdf+`<iframe src="lcm/234023512361.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "1") {
		mod.innerHTML = 'Unicorn 1<br>'
		divptitulo.innerHTML = 'RP15895 - BLOCO DE NOZZLES 10 mm UNICORN LCM (PADRÃO)<br>RP27339 - VALVULA DE TINTA 600 HZ - 12V - UNICORN LCM<br>'
		list.innerHTML = pdf+`<iframe src="lcm/unicorn1.pdf" class="tam">ola mundo</iframe>`
	}else if(conecta == "2") {
		mod.innerHTML = 'Unicorn 2<br>'
		divptitulo.innerHTML = 'RP35462 - BLOCO  25MM  Unicorn 2 (padão)<br>RP27339 - VALVULA DE TINTA 600 HZ - 12V - UNICORN LCM<br>'
		list.innerHTML = pdf+`<iframe src="lcm/unicorn2.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
}
