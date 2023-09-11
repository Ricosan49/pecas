
var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function iniccij() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var cij = '<button name="cij" onclick="rescij()" class="botaodiv">Peças</button>'
    var cijm = '<button name="cij" onclick="manucij()" class="botaodiv">Manual</button>'
    var cijcn = '<button name="cij" onclick="nucleo()" class="botaodiv">Circuito do Nucleo</button>'
    var cijcon = '<button name="cij" onclick="rescon()" class="botaodiv">Conexões</button>'
	var cpcb  = '<button name="cij" onclick="ccpcb()" class="botaodiv">Placas PCBs VJ1000</button>'
    divres.innerHTML = `<p class="adivera">CIJ</p>${cij} ${cijm} ${cijcn} ${cijcon} ${cpcb}`
}

function rescij() {
    
    var c1040 = `<button name="cij" onclick="pecas('1040')" class="botaodiv">1040</button>`
    var c1210 = `<button name="cij" onclick="pecas('1210')" class="botaodiv">1210</button>`
    var c1220 = `<button name="cij" onclick="pecas('1220')" class="botaodiv">1220</button>`
    var c1240 = `<button name="cij" onclick="pecas('1240')" class="botaodiv">1240</button>`
    var c1280 = `<button name="cij" onclick="pecas('1280')" class="botaodiv">1280</button>`
    var c1510 = `<button name="cij" onclick="pecas('1510')" class="botaodiv">1510</button>`
    var c1520 = `<button name="cij" onclick="pecas('1520')" class="botaodiv">1520</button>`
    var c1530 = `<button name="cij" onclick="pecas('1530')" class="botaodiv">1530</button>`
    var c1560 = `<button name="cij" onclick="pecas('1560')" class="botaodiv">1560</button>`
    var c1580 = `<button name="cij" onclick="pecas('1580')" class="botaodiv">1580</button>`
    var c1610 = `<button name="cij" onclick="pecas('1610')" class="botaodiv">1610</button>`
    var c1620 = `<button name="cij" onclick="pecas('1620')" class="botaodiv">1620</button>`
    var c1000fg = `<button name="cij" onclick="pecas('fg')" class="botaodiv">VJ1000 FG</button>`
    var c1610dh = `<button name="cij" onclick="pecas('1610dh')" class="botaodiv">1610 DH</button>`
    var c1620hr = `<button name="cij" onclick="pecas('1620hr')" class="botaodiv">1620 HR</button>`
    var c1620uhs = `<button name="cij" onclick="pecas('1620uhs')" class="botaodiv">1620 UHS</button>`
    var c1650 = `<button name="cij" onclick="pecas('1650')" class="botaodiv">1650</button>`
    var c1650uhs = `<button name="cij" onclick="pecas('1650uhs')" class="botaodiv">1650 UHS</button>`
    var c1710 = `<button name="cij" onclick="pecas('1710')" class="botaodiv">1710</button>`
    var c1860 = `<button name="cij" onclick="pecas('1860')" class="botaodiv">1860</button>`
    var c1880 = `<button name="cij" onclick="pecas('1880')" class="botaodiv">1880</button>`
    divres.innerHTML = `<p class="adivera">Peças CIJ</p>${c1040} ${c1210} ${c1220} ${c1240} ${c1280} ${c1510} ${c1520} 
    ${c1530} ${c1560} ${c1580} ${c1610} ${c1620} ${c1000fg} ${c1610dh} ${c1620hr} ${c1620uhs} ${c1650} ${c1650uhs} ${c1710}
    ${c1860} ${c1880}`
    
}
function ccpcb() {
    list.innerHTML = ''
    mod.innerHTML = 'Placas PCBs VJ1000<br>'
    divptitulo.innerHTML = ''  
    var ler0 = `<button  class="botaopcb" onclick="pcb('pcb0')">PCB 0 - SP500098</button><br>`
    var ler1 = `<button  class="botaopcb" onclick="pcb('pcb1')">PCB 1 - SP500095</button><br>`
    var ler2 = `<button  class="botaopcb" onclick="pcb('pcb2')">PCB 2 - SP500097</button><br>`
    var ler3 = `<button  class="botaopcb" onclick="pcb('pcb3')">PCB 3 - SP500096</button><br>`
    var ler4 = `<button  class="botaopcb" onclick="pcb('pcb5')">PCB 5(somente 1710)</button><br>`
	var ler5 = `<button  class="botaopcb" onclick="pcb('sensor')">Configurar NPN/PNP</button><br><br>`
    divptitulo.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5}` 
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
function pecas(pc) {
	list.innerHTML = ''
	var item = pc
	if(item == "1040") {
		mod.innerHTML = '1040<br>'
		divptitulo.innerHTML = 'SP383401 - Filtro Principal de Tinta de  5 microns(Trocar a cada 3.000 hs)'  
		var ler = '<a href=""><embed src="mq/1040.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1210") {
		mod.innerHTML = '1210<br>'
		divptitulo.innerHTML = '399307 - Nucleo de Tinta sem bomba VJ1210 (6,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1220") {
		mod.innerHTML = '1220<br>'
		divptitulo.innerHTML = 'SP392167 - Nucleo de Tinta sem bomba VJ1220 (9,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1240") {
		mod.innerHTML = '1240<br>'
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<a href=""><embed src="./mq/1240.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1280") {
		mod.innerHTML = '1280<br>'
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<a href=""><embed src="./mq/1280.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1510") {
		mod.innerHTML = '1510<br>'
		divptitulo.innerHTML = '399070 - Nucleo de Tinta sem bomba VJ1510 (9,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1510.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1520") {
		mod.innerHTML = '1520<br>'
		divptitulo.innerHTML = 'SP392165 - Nucleo de Tinta sem bomba VJ1520/1550 (12,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1520.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1530") {
		mod.innerHTML = '1530<br>'
		divptitulo.innerHTML = '397550 - Nucleo de Tinta sem bomba VJ1530 (61 meses)'  
		var ler = '<a href=""><embed src="./mq/1530.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1560") {
		mod.innerHTML = '1560<br>'
		divptitulo.innerHTML = '397550 - Nucleo de Tinta sem bomba VJ1530 / VJ 1560 (61 meses)'  
		var ler = '<a href=""><embed src="./mq/1560.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1580") {
		mod.innerHTML = '1580<br>'
		divptitulo.innerHTML = '613597 - Modulo de Serviço 1-  c/ Filtro de Tinta e Damper 1580<br>trocar a cada 5.000 hs ou 12 meses de trabalho - mandatorio'  
		var ler = '<a href=""><embed src="./mq/1580.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1610") {
		mod.innerHTML = '1610<br>'
		divptitulo.innerHTML = '399341 - Nucleo de Tinta sin bomba VJ1610 (12,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1610.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1620") {
		mod.innerHTML = '1620<br>'
		divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sem bomba VJ1620 (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1620.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "fg") {
		mod.innerHTML = 'VJ1000fg<br>'
		divptitulo.innerHTML = 'Nucleo de Tinta ver abaixo'  
		var ler = '<a href=""><embed src="./mq/vj1000fg.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1610dh") {
		mod.innerHTML = '1610 DH<br>'
		divptitulo.innerHTML = '399341 - Nucleo de Tinta sem bomba VJ1610 (12,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1610dh.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1620hr") {
		mod.innerHTML = '1620 HR<br>'
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sin bomba VJ1620 HR  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1620hr.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1620uhs") {
		mod.innerHTML = '1620 UHS<br>'
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sin bomba VJ1620 UHS 1650 UHS  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1620uhs.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1650") {
		mod.innerHTML = '1650<br>'
		divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sin bomba VJ1620 / VJ 1650 (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1650.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1650uhs") {
		mod.innerHTML = '1650 UHS<br>'
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 UHS 1650 UHS  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1650uhs.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1710") {
		mod.innerHTML = '1710<br>'
		divptitulo.innerHTML = '395623 - Nucleo de Tinta sem bomba VJ1710 (4,000 hs)<br> indicar a troca deste item junto com o nucleo:<br>239415-filtro torpedo da 1710'  
		var ler = '<a href=""><embed src="./mq/1710.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1860") {
		mod.innerHTML = '1860<br>'
		divptitulo.innerHTML = '611220	Modulo de Servico 1 - c/ Filtro de Tinta e Damper<br>(trocar a cada 5.000 hs de trabalho mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1860.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880") {
		mod.innerHTML = '1880<br>'
		divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1880.txt" class="list"></a>'
		list.innerHTML = ler
	}else {window.alert('ERRO: Lista não encontrada')}
}
 
