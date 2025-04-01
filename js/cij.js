
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
    var cijcn = '<button name="cij" onclick="nucleo()" class="botaodiv">Circuito do Nucleo</button>'
    var cijcon = '<button name="cij" onclick="rescon()" class="botaodiv">Conexões</button>'
	divres.innerHTML = `<p class="adivera">CIJ</p>${cij} ${cijcn} ${cijcon}`
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
	var c1630 = `<button name="cij" onclick="pecas('1630')" class="botaodiv">1630</button>`
    var c1560 = `<button name="cij" onclick="pecas('1560')" class="botaodiv">1560</button>`
	var c1660 = `<button name="cij" onclick="pecas('1660')" class="botaodiv">1660</button>`
    var c1580 = `<button name="cij" onclick="pecas('1580')" class="botaodiv">1580</button>`
	var c1580P = `<button name="cij" onclick="pecas('1580P')" class="botaodiv">1580Plus</button>`
	var c1580C = `<button name="cij" onclick="pecas('1580C')" class="botaodiv">1580 C</button>`
    var c1610 = `<button name="cij" onclick="pecas('1610')" class="botaodiv">1610</button>`
    var c1620 = `<button name="cij" onclick="pecas('1620')" class="botaodiv">1620</button>`
    var c1000fg = `<button name="cij" onclick="pecas('fg')" class="botaodiv">VJ1000 FG</button>`
    var c1610dh = `<button name="cij" onclick="pecas('1610dh')" class="botaodiv">1610 DH</button>`
    var c1620hr = `<button name="cij" onclick="pecas('1620hr')" class="botaodiv">1620 HR</button>`
    var c1620uhs = `<button name="cij" onclick="pecas('1620uhs')" class="botaodiv">1620 UHS</button>`
	var c1630 = `<button name="cij" onclick="pecas('1630')" class="botaodiv">1630</button>`
    var c1650 = `<button name="cij" onclick="pecas('1650')" class="botaodiv">1650</button>`
    var c1650uhs = `<button name="cij" onclick="pecas('1650uhs')" class="botaodiv">1650 UHS</button>`
	var c1660 = `<button name="cij" onclick="pecas('1660')" class="botaodiv">1660</button>`
    var c1710 = `<button name="cij" onclick="pecas('1710')" class="botaodiv">1710</button>`
    var c1860 = `<button name="cij" onclick="pecas('1860')" class="botaodiv">1860</button>`
    var c1880 = `<button name="cij" onclick="pecas('1880')" class="botaodiv">1880</button>`
	var c1880p = `<button name="cij" onclick="pecas('1880p')" class="botaodiv">1880plus</button>`
	var c1880u = `<button name="cij" onclick="pecas('1880u')" class="botaodiv">1880uhs</button>`
	var c1880h = `<button name="cij" onclick="pecas('1880h')" class="botaodiv">1880hr</button>`
    divres.innerHTML = `<p class="adivera">Peças CIJ</p>${c1000fg} ${c1040} ${c1210} ${c1220} ${c1240} ${c1280} ${c1510} ${c1520} 
    ${c1530} ${c1560} ${c1580} ${c1580P} ${c1580C} ${c1610} ${c1620} ${c1630} ${c1660} ${c1610dh} ${c1620hr} ${c1620uhs} ${c1650} ${c1650uhs} ${c1710}
    ${c1860} ${c1880} ${c1880p} ${c1880u} ${c1880h}`
    
}
function nucleo() {
	divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''  
	var ler1 = `<button class="botaodiv" onclick = "tipnucleo('original')">Nucleo original</button><br>`
    var ler2 = `<button class="botaodiv" onclick = "tipnucleo('ntb')">Nucleo Tipo B</button><br>`
    var ler3 = `<button class="botaodiv" onclick = "tipnucleo('ntc')">Nucleo Tipo C</button><br>`
	var ler4 = `<button class="botaodiv" onclick = "tipnucleo('1040')">Sistema Tinta 1040</button><br>`
    var ler5 = `<button class="botaodiv" onclick = "tipnucleo('1710')">Nucleo 1710</button><br>`
    var ler6 = `<button class="botaodiv" onclick = "tipnucleo('4080')">Sistema tinta 1240/1280</button><br>`
    var ler7 = `<button class="botaodiv" onclick = "tipnucleo('1580')">Sistema tinta 1580</button><br>`
    var ler8 = `<button class="botaodiv" onclick = "tipnucleo('1860')">Sistema tinta 1860</button><br>`
    var ler9 = `<button class="botaodiv" onclick = "tipnucleo('1880')">Sistema tinta 1880</button><br>`
    divres.innerHTML = `<p class="adivera">NUCLEOS</p>${ler1} ${ler2} ${ler3} ${ler4} ${ler5} ${ler6} ${ler7} ${ler8} ${ler9}`
}
function tipnucleo(nu) {
	var nucleo = nu
	let pdf = `
	<style>
		.tam {
			height:500px;
			width: 870px;
		}
	</style>`
	if(nucleo == 'original') {
		mod.innerHTML = 'Nucleo Original - 6 valvulas<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/NucleoOriginal.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == 'ntb') {
		mod.innerHTML = 'Nucleo Tipo B - 4 valvulas<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/NucleoTipoB.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == 'ntc') {
		mod.innerHTML = 'Nucleo Tipo C - 5 valvulas<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/NucleoTipoC.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '1040') {
		mod.innerHTML = 'Sistema de tinta 1040<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/sistematinta1040.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '1710') {
		mod.innerHTML = 'Nucleo 1710<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/nucleo1710.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '4080') {
		mod.innerHTML = 'Sistema de tinta 1240/1280<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/sistematinta1240_1280.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '1580') {
		mod.innerHTML = 'Sistema de tinta 1580<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/sistematinta1580.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '1860') {
		mod.innerHTML = 'Sistema de tinta 1860<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/sistematinta1860.pdf" class="tam">ola mundo</iframe>`
	}else if(nucleo == '1880') {
		mod.innerHTML = 'Sistema de tinta 1880<br>'
		list.innerHTML = pdf+`<iframe src="conexoes/sistematinta1880.pdf" class="tam">ola mundo</iframe>`
	}else {alert("ERRO - Este item não existe")}
}
function pecas(pc) {
	list.innerHTML = ''
	var item = pc
	if(item == "1040") {
		mod.innerHTML = `1040<br><button name="1040" onclick="ipb('1040')" class="botaodiv">Vista explodida 1040</button><br>`
		divptitulo.innerHTML = 'SP383401 - Filtro Principal de Tinta de  5 microns(Trocar a cada 3.000 hs)'  
		var ler = '<iframe src="mq/1040.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1210") {
		mod.innerHTML = `1210<br><button name="1210" onclick="ipb('1210')" class="botaodiv">Vista explodida 1210</button><br>`
		divptitulo.innerHTML = '399307 - Nucleo de Tinta sem bomba VJ1210 (6,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1220") {
		mod.innerHTML = `1220<br><button name="1220" onclick="ipb('1220')" class="botaodiv">Vista explodida 1220</button><br>`
		divptitulo.innerHTML = 'SP392167 - Nucleo de Tinta sem bomba VJ1220 (9,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1240") {
		mod.innerHTML = `1240<br><button name="1240" onclick="ipb('1240')" class="botaodiv">Vista explodida 1240</button><br>`
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<a href=""><embed src="./mq/1240.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1280") {
		mod.innerHTML = `1280<br><button name="1280" onclick="ipb('1280')" class="botaodiv">Vista explodida 1280</button><br>`
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<a href=""><embed src="./mq/1280.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1510") {
		mod.innerHTML = `1510<br><button name="1510" onclick="ipb('1510')" class="botaodiv">Vista explodida 1510</button><br>`
		divptitulo.innerHTML = '399070 - Nucleo de Tinta sem bomba VJ1510 (9,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1510.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1520") {
		mod.innerHTML = `1520<br><button name="1520" onclick="ipb('1520')" class="botaodiv">Vista explodida 1520</button><br>`
		divptitulo.innerHTML = 'SP392165 - Nucleo de Tinta sem bomba VJ1520/1550 (12,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1520.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1530") {
		mod.innerHTML = `1530<br><button name="1X30" onclick="ipb('1530')" class="botaodiv">Vista explodida 1530</button><br>`
		divptitulo.innerHTML = `397550 - NUCLEO DE TINTA SEM BOMBA MODELO VJ 1530 63 MESES<br>`
		var ler = '<a href=""><embed src="./mq/1530.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1560") {
		mod.innerHTML = `1560<br><button name="1X30" onclick="ipb('1560')" class="botaodiv">Vista explodida 1560</button><br>`
		divptitulo.innerHTML = `397549 - NUCLEO DE TINTA SEM BOMBA MODELO VJ 1560 63 MESES<br>`
		var ler = '<a href=""><embed src="./mq/1560.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1580") {
		mod.innerHTML = '1580<br>'
		divptitulo.innerHTML = '613597 - Modulo de Serviço 1-  c/ Filtro de Tinta e Damper 1580<br>trocar a cada 5.000 hs ou 12 meses de trabalho - mandatorio'  
		var ler = '<a href=""><embed src="./mq/1580.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1580P") {
		mod.innerHTML = '1580 Plus<br>'
		divptitulo.innerHTML = '613597 - Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>trocar a cada 5.000 hs ou 12 meses de trabalho - mandatorio'  
		var ler = '<a href=""><embed src="./mq/1580p.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1580C") {
		mod.innerHTML = '1580 C<br>'
		divptitulo.innerHTML = '611685 - Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>trocar a cada 5.000 hs ou 12 meses de trabalho - mandatorio'  
		var ler = '<a href=""><embed src="./mq/1580c.txt" class="list"></a>'
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
		mod.innerHTML = `1610 DH<br><button name="1X30" onclick="ipb('1610dh')" class="botaodiv">Vista explodida 1610 DH</button><br>`
		divptitulo.innerHTML = '399341 - Nucleo de Tinta sem bomba VJ1610 (12,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1610dh.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1620hr") {
		mod.innerHTML = `1620 HR<br><button name="1X30" onclick="ipb('1610uhshr')" class="botaodiv">Vista explodida 1620 HR</button><br>`
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 HR  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1620hr.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1620uhs") {
		mod.innerHTML = `1620 UHS<br><button name="1X30" onclick="ipb('1610uhshr')" class="botaodiv">Vista explodida 1620 UHS</button><br>`
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 UHS 1620 UHS  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1620uhs.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1630") {
		mod.innerHTML = `1630<br><button name="1X30" onclick="ipb('1630')" class="botaodiv">Vista explodida 1630</button><br>`
		divptitulo.innerHTML = '397552 - Nucleo de Tinta sem bomba VJ1630'  
		var ler = '<a href=""><embed src="./mq/1630.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1650") {
		mod.innerHTML = `1650<br><button name="1X50" onclick="ipb('1650')" class="botaodiv">Vista explodida 1650</button><br>`
		divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sem bomba VJ1620 / VJ 1650 (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1650.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1650uhs") {
		mod.innerHTML = `1650 UHS<br><button name="1X50" onclick="ipb('1650')" class="botaodiv">Vista explodida 1650uhs</button><br>`
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 UHS 1650 UHS  (14,000 hs)'  
		var ler = '<a href=""><embed src="./mq/1650uhs.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1660") {
		mod.innerHTML = `1660<br><button name="1X30" onclick="ipb('1660')" class="botaodiv">Vista explodida 1660</button><br>`
		divptitulo.innerHTML = '397552 - Nucleo de Tinta sem bomba VJ1660'  
		var ler = '<a href=""><embed src="./mq/1660.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1710") {
		mod.innerHTML = `1710<br><button name="1X30" onclick="ipb('1710')" class="botaodiv">Vista explodida 1710</button><br>`
		divptitulo.innerHTML = '395623 - Nucleo de Tinta sem bomba VJ1710 (4,000 hs)<br> indicar a troca deste item junto com o nucleo:<br>239415-filtro torpedo da 1710'  
		var ler = '<a href=""><embed src="./mq/1710.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1860") {
		mod.innerHTML = `1860<br><button name="1X30" onclick="ipb('1860')" class="botaodiv">Vista explodida 1860</button><br>`
		divptitulo.innerHTML = '611220	Modulo de Servico 1 - c/ Filtro de Tinta e Damper<br>(trocar a cada 5.000 hs de trabalho mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1860.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880") {
		mod.innerHTML = `1880<br><button name="1X30" onclick="ipb('1880')" class="botaodiv">Vista explodida 1880</button><br>`
		divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1880.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880p") {
		mod.innerHTML = `1880 plus<br><button name="1X30" onclick="ipb('1880p')" class="botaodiv">Vista explodida 1880 plus</button><br>`
		divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1880p.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880u") {
		mod.innerHTML = `1880 uhs<br><button name="1X30" onclick="ipb('1880uhs')" class="botaodiv">Vista explodida 1880 uhs</button><br>`
		divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1880u.txt" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880h") {
		mod.innerHTML = `1880 HR<br><button name="1X30" onclick="ipb('1880hr')" class="botaodiv">Vista explodida 1880 HR</button><br>`
		divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
		var ler = '<a href=""><embed src="./mq/1880h.txt" class="list"></a>'
		list.innerHTML = ler
	}else {window.alert('ERRO: Lista não encontrada')}
}
function ipb(pc) {
	list.innerHTML = ''
	var item = pc
	if(item == "1040") {
		mod.innerHTML = '1040<br>'
		divptitulo.innerHTML = 'SP383401 - Filtro Principal de Tinta de  5 microns(Trocar a cada 3.000 hs)'  
		var ler = '<iframe src="cij/1040.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1210") {
		mod.innerHTML = '1210<br>'
		divptitulo.innerHTML = '399307 - Nucleo de Tinta sem bomba VJ1210 (6,000 hs)'  
		var ler = '<iframe src="cij/12101510.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1220") {
		mod.innerHTML = `1220<br>`
		divptitulo.innerHTML = 'SP392167 - Nucleo de Tinta sem bomba VJ1220 (9,000 hs)'  
		var ler = '<iframe src="cij/12201520.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1240") {
		mod.innerHTML = `1240<br>`
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<iframe src="cij/12401280.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1280") {
		mod.innerHTML = `1280<br>`
		divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
		var ler = '<iframe src="cij/12401280.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1510") {
		mod.innerHTML = `1510<br>`
		divptitulo.innerHTML = '399070 - Nucleo de Tinta sem bomba VJ1510 (9,000 hs)'  
		var ler = '<iframe src="cij/12101510.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1520") {
		mod.innerHTML = `1520<br>`
		divptitulo.innerHTML = 'SP392165 - Nucleo de Tinta sem bomba VJ1520/1550 (12,000 hs)'  
		var ler = '<iframe src="cij/12201520.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1530") {
		mod.innerHTML = `1530<br>`
		divptitulo.innerHTML = `397550 - NUCLEO DE TINTA SEM BOMBA MODELO VJ 1530 63 MESES<br>`  
		var ler = '<iframe src="cij/1530.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1560") {
		mod.innerHTML = `1560<br>`
		divptitulo.innerHTML = `397549 - NUCLEO DE TINTA SEM BOMBA MODELO VJ 1560 63 MESES<br>`
		var ler = '<iframe src="cij/1560.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1630") {
		mod.innerHTML = `1630<br>`
		divptitulo.innerHTML = '397552 - Nucleo de Tinta sem bomba VJ1630'  
		var ler = '<iframe src="cij/1630.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1660") {
		mod.innerHTML = `1660<br>`
		divptitulo.innerHTML = '397552 - Nucleo de Tinta sem bomba VJ1630'
		var ler = '<iframe src="cij/1660.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1610dh") {
		mod.innerHTML = `1610 DH<br>`
		divptitulo.innerHTML = '399341 - Nucleo de Tinta sem bomba VJ1610 (12,000 hs)'
		var ler = '<iframe src="cij/IPB1610dh.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1610uhshr") {
		mod.innerHTML = `1620 UHS/HR<br>`
		divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 UHS (14,000 hs)'
		var ler = '<iframe src="cij/1620UHSHR.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1650") {
		mod.innerHTML = `1650<br>`
		divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sem bomba VJ1620 / VJ 1650 (14,000 hs)'
		var ler = '<iframe src="cij/1650UHSHR.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1710") {
		mod.innerHTML = `1710<br>`
		divptitulo.innerHTML = `395623 - Nucleo de Tinta sem bomba VJ1710 (4,000 hs)</br>
		indicar a troca deste item junto com o nucleo:</br>239415-filtro torpedo da 1710`
		var ler = '<iframe src="cij/IPB1710.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1860") {
		mod.innerHTML = `1860<br>`
		divptitulo.innerHTML = `611220 Modulo de Servico 1 - c/ Filtro de Tinta e Damper</br>
(trocar a cada 5.000 hs de trabalho mandatorio)`
		var ler = '<iframe src="cij/1860.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880") {
		mod.innerHTML = `1880<br>`
		divptitulo.innerHTML = `611554 Modulo de Serviço 1- c/ Filtro de Tinta e Damper</br>
(Substituir a 12 meses de trabalho - mandatorio)`
		var ler = '<iframe src="cij/1880.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880p") {
		mod.innerHTML = `1880 plus<br>`
		divptitulo.innerHTML = `611554 Modulo de Serviço 1- c/ Filtro de Tinta e Damper</br>
(Substituir a 12 meses de trabalho - mandatorio)`
		var ler = '<iframe src="cij/1880p.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880uhs") {
		mod.innerHTML = `1880 uhs<br>`
		divptitulo.innerHTML = `611554 Modulo de Serviço 1- c/ Filtro de Tinta e Damper</br>
(Substituir a 12 meses de trabalho - mandatorio)`
		var ler = '<iframe src="cij/1880uhs.pdf" class="list"></a>'
		list.innerHTML = ler
	}else if(item == "1880hr") {
		mod.innerHTML = `1880 HR<br>`
		divptitulo.innerHTML = `611554 Modulo de Serviço 1- c/ Filtro de Tinta e Damper</br>
(Substituir a 12 meses de trabalho - mandatorio)`
		var ler = '<iframe src="cij/1880hr.pdf" class="list"></a>'
		list.innerHTML = ler
	}else {window.alert('ERRO: Lista não encontrada')}
}
 
