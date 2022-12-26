
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
    var cijm = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var cijcn = '<button name="cij" onclick="nucleo()" class="botaodiv">Circuito do Nucleo</button>'
    var cijcon = '<button name="cij" onclick="rescon()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">CIJ</p>${cij} ${cijm} ${cijcn} ${cijcon}`
}

function rescij() {
    var cpcb  = '<button name="cij" onclick="ccpcb()" class="botaodiv">Placas PCBs VJ1000</button>'
    var c1040 = '<button name="cij" onclick="c1040()" class="botaodiv">1040</button>'
    var c1210 = '<button name="cij" onclick="c1210()" class="botaodiv">1210</button>'
    var c1220 = '<button name="cij" onclick="c1220()" class="botaodiv">1220</button>'
    var c1240 = '<button name="cij" onclick="c1240()" class="botaodiv">1240</button>'
    var c1280 = '<button name="cij" onclick="c1280()" class="botaodiv">1280</button>'
    var c1510 = '<button name="cij" onclick="c1510()" class="botaodiv">1510</button>'
    var c1520 = '<button name="cij" onclick="c1520()" class="botaodiv">1520</button>'
    var c1530 = '<button name="cij" onclick="c1530()" class="botaodiv">1530</button>'
    var c1560 = '<button name="cij" onclick="c1560()" class="botaodiv">1560</button>'
    var c1580 = '<button name="cij" onclick="c1580()" class="botaodiv">1580</button>'
    var c1610 = '<button name="cij" onclick="c1610()" class="botaodiv">1610</button>'
    var c1620 = '<button name="cij" onclick="c1620()" class="botaodiv">1620</button>'
    var c1000fg = '<button name="cij" onclick="c1000fg()" class="botaodiv">VJ1000 FG</button>'
    var c1610dh = '<button name="cij" onclick="c1610dh()" class="botaodiv">1610 DH</button>'
    var c1620hr = '<button name="cij" onclick="c1620hr()" class="botaodiv">1620 HR</button>'
    var c1620uhs = '<button name="cij" onclick="c1620uhs()" class="botaodiv">1620 UHS</button>'
    var c1650 = '<button name="cij" onclick="c1650()" class="botaodiv">1650</button>'
    var c1650uhs = '<button name="cij" onclick="c1650uhs()" class="botaodiv">1650 UHS</button>'
    var c1710 = '<button name="cij" onclick="c1710()" class="botaodiv">1710</button>'
    var c1860 = '<button name="cij" onclick="c1860()" class="botaodiv">1860</button>'
    var c1880 = '<button name="cij" onclick="c1880()" class="botaodiv">1880</button>'
    divres.innerHTML = `<p class="adivera">Peças CIJ</p>${cpcb} ${c1040} ${c1210} ${c1220} ${c1240} ${c1280} ${c1510} ${c1520} 
    ${c1530} ${c1560} ${c1580} ${c1610} ${c1620} ${c1000fg} ${c1610dh} ${c1620hr} ${c1620uhs} ${c1650} ${c1650uhs} ${c1710}
    ${c1860} ${c1880}`
    
}
function ccpcb() {
    list.innerHTML = ''
    mod.innerHTML = 'Placas PCBs VJ1000<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a  class="advera">PCB 0 - SP500098</a><br>'
    var ler1 = '<a  class="advera">PCB 1 - SP500095</a><br>'
    var ler2 = '<a  class="advera">PCB 2 - SP500097</a><br>'
    var ler3 = '<a  class="advera">PCB 3 - SP500096</a><br>'
    var ler4 = '<a  class="advera">PCB 5 - SP395605</a>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4}` 
    
}
function c1040() {
    list.innerHTML = ''
    mod.innerHTML = '1040<br>'
    divptitulo.innerHTML = 'SP383401 - Filtro Principal de Tinta de  5 microns(Trocar a cada 3.000 hs)'  
    var ler = '<a href=""><embed src="mq/1040.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1210() {
    list.innerHTML = ''
    mod.innerHTML = '1210<br>'
    divptitulo.innerHTML = '399307 - Nucleo de Tinta sem bomba VJ1210 (6,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1220() {
    list.innerHTML = ''
    mod.innerHTML = '1220<br>'
    divptitulo.innerHTML = 'SP392167 - Nucleo de Tinta sem bomba VJ1220 (9,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1210.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1240() {
    list.innerHTML = ''
    mod.innerHTML = '1240<br>'
    divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
    var ler = '<a href=""><embed src="./mq/1240.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1280() {
    list.innerHTML = ''
    mod.innerHTML = '1280<br>'
    divptitulo.innerHTML = '383556 - MODULO DE SERVIÇO 1 PARA IMPRESSORA CIJ 1240, 1280 (3000hrs)'  
    var ler = '<a href=""><embed src="./mq/1280.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1510() {
    list.innerHTML = ''
    mod.innerHTML = '1510<br>'
    divptitulo.innerHTML = '399070 - Nucleo de Tinta sem bomba VJ1510 (9,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1510.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1520() {
    list.innerHTML = ''
    mod.innerHTML = '1520<br>'
    divptitulo.innerHTML = 'SP392165 - Nucleo de Tinta sem bomba VJ1520/1550 (12,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1520.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1530() {
    list.innerHTML = ''
    mod.innerHTML = '1530<br>'
    divptitulo.innerHTML = '397550 - Nucleo de Tinta sem bomba VJ1530 (61 meses)'  
    var ler = '<a href=""><embed src="./mq/1530.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1560() {
    list.innerHTML = ''
    mod.innerHTML = '1560<br>'
    divptitulo.innerHTML = '397550 - Nucleo de Tinta sem bomba VJ1530 / VJ 1560 (61 meses)'  
    var ler = '<a href=""><embed src="./mq/1560.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1580() {
    list.innerHTML = ''
    mod.innerHTML = '1580<br>'
    divptitulo.innerHTML = '613597 - Modulo de Serviço 1-  c/ Filtro de Tinta e Damper 1580<br>trocar a cada 5.000 hs ou 12 meses de trabalho - mandatorio'  
    var ler = '<a href=""><embed src="./mq/1580.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1610() {
    list.innerHTML = ''
    mod.innerHTML = '1610<br>'
    divptitulo.innerHTML = '399341 - Nucleo de Tinta sin bomba VJ1610 (12,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1610.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1620() {
    list.innerHTML = ''
    mod.innerHTML = '1620<br>'
    divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sem bomba VJ1620 (14,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1620.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1000fg() {
    list.innerHTML = ''
    mod.innerHTML = 'VJ1000fg<br>'
    divptitulo.innerHTML = 'Nucleo de Tinta ver abaixo'  
    var ler = '<a href=""><embed src="./mq/vj1000fg.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1610dh() {
    list.innerHTML = ''
    mod.innerHTML = '1610dh<br>'
    divptitulo.innerHTML = '399341 - Nucleo de Tinta sem bomba VJ1610 (12,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1610dh.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1620hr() {
    list.innerHTML = ''
    mod.innerHTML = '1620 HR<br>'
    divptitulo.innerHTML = '395965 - Nucleo de Tinta sin bomba VJ1620 HR  (14,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1620hr.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1620uhs() {
    list.innerHTML = ''
    mod.innerHTML = '1620 UHS<br>'
    divptitulo.innerHTML = '395965 - Nucleo de Tinta sin bomba VJ1620 UHS 1650 UHS  (14,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1620uhs.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1650() {
    list.innerHTML = ''
    mod.innerHTML = '1650<br>'
    divptitulo.innerHTML = 'SP392169 - Nucleo de Tinta sin bomba VJ1620 / VJ 1650 (14,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1650.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1650uhs() {
    list.innerHTML = ''
    mod.innerHTML = '1650 UHS<br>'
    divptitulo.innerHTML = '395965 - Nucleo de Tinta sem bomba VJ1620 UHS 1650 UHS  (14,000 hs)'  
    var ler = '<a href=""><embed src="./mq/1650uhs.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1710() {
    list.innerHTML = ''
    mod.innerHTML = '1710<br>'
    divptitulo.innerHTML = '395623 - Nucleo de Tinta sem bomba VJ1710 (4,000 hs)<br> indicar a troca deste item junto com o nucleo:<br>239415-filtro torpedo da 1710'  
    var ler = '<a href=""><embed src="./mq/1710.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1860() {
    list.innerHTML = ''
    mod.innerHTML = '1860<br>'
    divptitulo.innerHTML = '611220	Modulo de Servico 1 - c/ Filtro de Tinta e Damper<br>(trocar a cada 5.000 hs de trabalho mandatorio)'  
    var ler = '<a href=""><embed src="./mq/1860.txt" class="list"></a>'
    list.innerHTML = ler
    
}
function c1880() {
    list.innerHTML = ''
    mod.innerHTML = '1880<br>'
    divptitulo.innerHTML = '611554	Modulo de Serviço 1-  c/ Filtro de Tinta e Damper<br>(Substituir a 12 meses de trabalho - mandatorio)'  
    var ler = '<a href=""><embed src="./mq/1880.txt" class="list"></a>'
    list.innerHTML = ler
    
}
    
