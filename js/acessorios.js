var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')

function acesso() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var acesso1 = '<button  onclick="acessocij()" class="botaodiv">CIJ</button>'
    var acesso2 = '<button  onclick="acessotto()" class="botaodiv">TTO</button>'
    var acesso3 = '<button  onclick="acessolcm()" class="botaodiv">LCM</button>'
    var acesso4 = '<button  onclick="acessolpa()" class="botaodiv">LPA</button>'
    var acesso5 = '<button  onclick="acessotij()" class="botaodiv">TIJ</button>'
    divres.innerHTML = `<p class="adivera">Acessórios</p>${acesso1} ${acesso2} ${acesso3} ${acesso4} ${acesso5}`
}
function acessocij() {
    list.innerHTML = ''
    mod.innerHTML = 'Acessorios CIJ<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a  href="acessorios/accessorioscij.pdf" class="advera" >Diversos CIJ</a><br>'
    var ler1 = '<a  href="acessorios/sensorescij.pdf" class="advera" >Sensor CIJ</a><br>'
    var ler2 = '<a  href="acessorios/suportecij.pdf" class="advera" >Suporte CIJ</a><br>'
    var ler3 = '<a  href="acessorios/encodercij.pdf" class="advera" >Encoder CIJ</a><br>'
    var ler4 = '<a  href="acessorios/resfriadorCooler.pdf" class="advera" >Resfriador Cooler</a><br>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4}` 
    
}
function acessotto() {
    list.innerHTML = ''
    mod.innerHTML = 'Acessorios TTO<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a   class="advera" >216054 - KIT DE LIMPEZA CONTENDO 10 BASTOES DE LIMPEZA PRE SATURADOS COM ALCOOL ISOPROPILICO</a><br>'
    var ler1 = '<a  href="acessorios/suportetto.pdf" class="advera" >Suporte</a><br>'
    var ler2 = '<a  href="acessorios/encodertto.pdf" class="advera" >Encoder</a><br>'
    list.innerHTML = `${ler0} ${ler1} ${ler2}` 
    
}
function acessolcm() {
    list.innerHTML = ''
    mod.innerHTML = 'Acessorios LCM<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a   class="advera" >WBZ-3100-006 -  Suporte de fixação para piso</a><br>'
    var ler1 = '<a   class="advera" >WBZ-3100-003 -  Sensor do produto</a><br>'
    var ler2 = '<a   class="advera" >WBZ-3100-004 -  Cabo do sensor</a><br>'
    var ler3 = '<a   class="advera" >WBZ-0993-190 -  Suporte p/ sensor optoeletronico xy p/ VJ 2300 e VJ 9550</a><br>'
    var ler4 = '<a   class="advera" >36481 -  Kit de limpeza da Cabeça de Impressão LCM 2351/2361</a><br>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4}` 
    
}
function acessolpa() {
    list.innerHTML = ''
    mod.innerHTML = 'Acessorios LPA<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a   class="advera" >397270 - SUPORTE HORIZONTAL PARA IMPRESSORA E APLICADORA DE ETIQUETAS MODELO LPA 9550	</a><br>'
    var ler1 = '<a   class="advera" >397275 - SUPORTE VERTICAL PARA IMPRESSORA E APLICADORA DE ETIQUETAS MODELO LPA 9550	</a><br>'
    var ler2 = '<a   class="advera" >406553 - apalpador de etiquetas com 10pçs</a><br>'
    var ler3 = '<a   class="advera" >406553-UN - apalpador de etiquetas</a><br>'
    var ler4 = '<a   class="advera" >406387 - apalpador direito com braço</a><br>'
    var ler5 = '<a   class="advera" >406386 - SENSOR DE PRODUTO LPA 9550</a><br>'
    var ler6 = '<a   class="advera" >216054 - KIT DE LIMPEZA CONTENDO 10 BASTOES DE LIMPEZA PRE SATURADOS COM ALCOOL ISOPROPILICO</a><br>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5} ${ler6}` 
    
}
function acessotij() {
    list.innerHTML = ''
    mod.innerHTML = 'Acessorios TIJ<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a  href="acessorios/accessoriostij.pdf" class="advera" >Acessórios</a><br>'
    list.innerHTML = `${ler0}` 
    
}
