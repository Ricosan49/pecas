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
		list.innerHTML = `<a>WBZ0108427 - Conector DIN 3 pos macho</a><br><img src="conexoes/ligsensorcij.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "enco") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>WBZ0108428 - Conector DIN 4 pos macho</a><br><img src="conexoes/ligencoder.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "alarme") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>WBZ0108430 - Conector DIN 6 pos macho</a></br><a>WBZ0036021 - Conector DIN 6 pos FEMEA</a><br><img src="conexoes/ligalarme.png" class="listpcb">
		<img src="conexoes/plugdin.png" class="listpcb">`
	}else if(conecta == "rele") {
		mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
		list.innerHTML = `<a>WBZ0108429 - Conector DIN 7 pos macho</a><br>
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
			width: 945px;
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
	var ler4 = `<button  class="botaodiv" onclick="pcb('pcb4')">PCB 4 - 399475</button><br>`
    var ler5 = `<button  class="botaodiv" onclick="pcb('pcb5')">PCB 5(somente 1710)</button><br>`
	var ler6 = `<button  class="botaodiv" onclick="pcb('sensor')">Configurar NPN/PNP</button><br>`
    divres.innerHTML = `<p class="adivera">PCB's</p>${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5} ${ler6}` 
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
		}else if(modelo == "pcb4") {
			list.innerHTML = `<a>PCB 4 - 399475</a><br><img src="conexoes/PCB4.png" class="listpcb">`
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
    var lerO = `<button  class="botaodiv" onclick="tto('6210')">6210</button><br>`
    var lerB = `<button  class="botaodiv" onclick="tto('6230')">6230</button><br>`
    var lerC = `<button  class="botaodiv" onclick="tto('6420')">DF+ e 6420</button><br>`
    var lerD = `<button  class="botaodiv" onclick="tto('6330')">6330 e 6530</button><br>`
	divres.innerHTML = `<p class="adivera">Conexões</p>${lerO} ${lerB} ${lerC} ${lerD}`
}
function tto(tip) {
	var modelo = tip
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`	
	if(modelo == "6210") {
		mod.innerHTML = 'Conexões 6210<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O6210 DF+.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "6230") {
		mod.innerHTML = 'Conexões 6230<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O6230.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "6420") {
		mod.innerHTML = 'Conexões DF+ e 6420<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O6210 DF+.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "6330") {
		mod.innerHTML = 'Conexões 6330 e 6530<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O6330 6530.pdf" class="tam">ola mundo</iframe>`
	}else {window.alert('ERRO: imagem não encontrada')}
}
function conexaolcm() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LCM<br>'
    divptitulo.innerHTML = ''  
    var lerO = `<button  class="botaodiv" onclick="lcm()">2300</button><br>`
    list.innerHTML = `${lerO}`
    
}
function lcm() {
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`	
		mod.innerHTML = 'Conexões 2300<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O2300.pdf" class="tam">ola mundo</iframe>`
}
function conexaotij() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões TIJ<br>'
    divptitulo.innerHTML = ''  
    var lerc = `<button onclick='tij("600adv")' class="botaodiv">M600 Advanced</button>`
	var lerd = `<button onclick='tij("600oem")' class="botaodiv">M600 OEM</button>`
	var lere = `<button onclick='tij("610adv")' class="botaodiv">M610 Advenced</button>`
	var lerf = `<button onclick='tij("610oem")' class="botaodiv">M610 OEM</button>`
    var lerA = `<button  class="botaodiv" onclick="tij('8510')">8510/8520</button><br>`
    var lerB = `<button  class="botaodiv" onclick="tij('8610')">8610</button><br>`
    divres.innerHTML = `<p class="adivera">Conexões</p>${lerc} ${lerd} ${lere} ${lerf} ${lerA} ${lerB}`
    
}
function tij(tip) {
	var modelo = tip
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 945px;
		}
	</style>`	
	if(modelo == "600adv") {
		mod.innerHTML = 'Conexões M600 ADV<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/m600advIO.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "8510") {
		mod.innerHTML = 'Conexões 8510/8520<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O8510.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "8610") {
		mod.innerHTML = 'Conexões 8610<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/I_O8610.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "600oem") {
		mod.innerHTML = 'Conexões M600 OEM<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/m600oemIO.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "610adv") {
		mod.innerHTML = 'Conexões M610 ADV<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/m610advIO.pdf" class="tam">ola mundo</iframe>`
	}else if(modelo == "610oem") {
		mod.innerHTML = 'Conexões M610 OEM<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/m610oemIO.pdf" class="tam">ola mundo</iframe>`
	}else {window.alert('ERRO: imagem não encontrada')}
}

