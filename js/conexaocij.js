var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')


function rescon() {
    var cconexao = '<button name="cij" onclick="conconexao()" class="botaodiv">Conectores DIN</button>'
    var cpainelVj = '<button name="cij" onclick="conpainelVJ1000()" class="botaodiv">Painel Lateral CIJs</button>'
	var cpcb  = '<button name="cij" onclick="ccpcb()" class="botaodiv">Placas PCBs</button>'
    divres.innerHTML = `<p class="adivera">Conexões CIJ</p>${cconexao} ${cpainelVj} ${cpcb}`
    
}
function conconexao() {
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''  
    var ler = '<a href="conexoes/conexaoCIJ.pdf">VJ1000</a>'
	var ler0 = `<button  class="botaodiv" onclick="conexao('sensor')">Sensor</button><br>`
    var ler1 = `<button  class="botaodiv" onclick="conexao('enco')">Encoder</button><br>`
    var ler2 = `<button  class="botaodiv" onclick="conexao('alarme')">Alarme Luminoso</button><br>`
    var ler3 = `<button  class="botaodiv" onclick="conexao('rele')">Saida Relé</button><br>`
    var ler4 = `<button  class="botaodiv" onclick="conexao('pcb5')"></button><br>`
    divres.innerHTML = `<p class="adivera">Conexões CIJ</p>${ler0} ${ler1} ${ler2} ${ler3}`
    
}
function conexao(tipo) {
	var conecta = tipo
	if(conecta == "sensor") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>500-0036-578 - Conector DIN 3 pos macho</a><br><img src="conexoes/ligsensorcij.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "enco") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>500-0036-581 - Conector DIN 4 pos macho</a><br><img src="conexoes/ligencoder.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "alarme") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>500-0036-577 - Conector DIN 6 pos macho</a><br><img src="conexoes/ligalarme.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "rele") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>500-0036-583 - Conector DIN 7 pos macho</a><br>
		<img src="conexoes/ligrelegg.png" class="listpcb">`
	}else {alert('ERRO!!! este item não existe!')}
}
function aumentar() {
	let ver = `<img src="conexoes/ligrelegg.png" class="">`
	list.innerHTML =  `${ver}`
}
function conpainelVJ1000() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões CIJ<br>'
    divptitulo.innerHTML = ''  
    var ler1 = '<button class="botaodiv" onclick="sel(1000)">VJ1000</button><br>'
    var ler2 = '<button class="botaodiv" onclick="sel(16)">VJ1610DH</button><br>'
    var ler3 = '<button class="botaodiv" onclick="sel(1040)">1040</button><br>'
    var ler4 = '<button class="botaodiv" onclick="sel(1280)">1240/1280</button><br>'
    var ler5 = '<button class="botaodiv" onclick="sel(1580)">1580</button><br>'
    var ler6 = '<button class="botaodiv" onclick="sel(1860)">1860</button><br>'
    var ler7 = '<button class="botaodiv" onclick="sel(1880)">1880</button><br>'
	divres.innerHTML = `<p class="adivera">Conexões</p>${ler1} ${ler2} ${ler3} ${ler4} ${ler5} ${ler6} ${ler7}`
    
}
function sel(cij) {
	let ver  = cij
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 870px;
		}
	</style>`
	if(ver == "1000") {
		mod.innerHTML = 'Conexões VJ1000<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/painellateralvj1000.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "16") {
		mod.innerHTML = 'Conexões VJ1610DH<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/painellateralvj1610dh.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "1040") {
		mod.innerHTML = 'Conexões VJ1040<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O1040.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "1280") {
		mod.innerHTML = 'Conexões VJ1240/1280<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O12401280.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "1580") {
		mod.innerHTML = 'Conexões VJ1580<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O1580.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "1860") {
		mod.innerHTML = 'Conexões VJ1860<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O1860.pdf" class="tam">ola mundo</iframe>`
	}else if(ver == "1880") {
		mod.innerHTML = 'Conexões VJ1880<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O1880.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO - ')}
	
	}
function ccpcb() {
    list.innerHTML = ''
    mod.innerHTML = 'Placas PCBs VJ1000<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button  class="botaodiv" onclick="pcb('pcb0')">PCB 0 - SP500098</button><br>`
    var ler1 = `<button  class="botaodiv" onclick="pcb('pcb1')">PCB 1 - SP500095</button><br>`
    var ler2 = `<button  class="botaodiv" onclick="pcb('pcb2')">PCB 2 - SP500097</button><br>`
    var ler3 = `<button  class="botaodiv" onclick="pcb('pcb3')">PCB 3 - SP500096</button><br>`
    var ler4 = `<button  class="botaodiv" onclick="pcb('pcb5')">PCB 5(somente 1710)</button><br>`
	var ler5 = `<button  class="botaodiv" onclick="pcb('sensor')">Configurar NPN/PNP</button><br>`
    divres.innerHTML = `<p class="adivera">PCB's</p>${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5}` 
}
function pcb(tip) {
		var modelo = tip
		if(modelo == "pcb0") {
			list.innerHTML = `<a>PCB 0 - SP500098</a><br><img src="conexoes/PCB0.png" class="listpcb">`
		}else if(modelo == "pcb1") {
			list.innerHTML = `<a>PCB 1 - SP500095</a><br><img src="conexoes/PCB1.png" class="listpcb">`
		}else if(modelo == "pcb2") {
			list.innerHTML = `<a>PCB 2 - SP500097</a><br><img src="conexoes/PCB2.png" class="listpcb">`
		}else if(modelo == "pcb3") {
			list.innerHTML = `<a>PCB 3 - SP500096</a><br><img src="conexoes/PCB3.png" class="listpcb">`
		}else if(modelo == "pcb5") {
			list.innerHTML = `<a>PCB 5 - SP395605</a><br><img src="conexoes/PCB5.png" class="listpcb">`
		}else if(modelo == "sensor") {
			list.innerHTML = `<a>Configuração de tipo do Sensor da Placa PCB</a><br><img src="conexoes/sensor.png" class="listpcb">`
		}else {window.alert('ERRO: imagem não encontrada')}
		
}

function conexaoTTO() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões TTO<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O6210 DF+.pdf">I/O 6210</a><br>'
    var lerB = '<a href="conexoes/I_O6230.pdf">I/O 6230</a><br>'
    var lerC = '<a href="conexoes/I_O6210 DF+.pdf">I/O DF+ - 6420</a><br>'
    var lerD = '<a href="conexoes/I_O6330 6530.pdf">I/O 6330/6530</a>'
    list.innerHTML = `${lerO} ${lerB} ${lerC} ${lerD}`
    
}
function conexaolcm() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LCM<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O2300.pdf">I/O 2300</a><br>'
    list.innerHTML = `${lerO}`
    
}
function conexaolaser() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LCM<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O3120 3320.pdf">I/O 3120/3320/3130/3330</a><br>'
    var lerA = '<a href="conexoes/I_O3140 3340.pdf">I/O 3140/3340</a><br>'
    var lerB = '<a href="conexoes/I_OX9seg3140 3340.pdf">I/O conector X9 3140/3340</a><br>'
    list.innerHTML = `${lerO} ${lerA} ${lerB}`
    
}
function conexaotij() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões TIJ<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_OM600.pdf">I/O M600</a><br>'
    var lerA = '<a href="conexoes/I_O8510.pdf">I/O 8510/8520</a><br>'
    var lerB = '<a href="conexoes/I_O8510.pdf">I/O 8610</a><br>'
    list.innerHTML = `${lerO} ${lerA} ${lerB}`
    
}

