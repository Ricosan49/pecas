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
    var lcmm = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var lcmcon = '<button name="cij" onclick="conexaolcm()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">LCM</p>${lcm} ${lcmm} ${lcmcon}`
}

function reslcm() {
    var c2120 = '<button name="cij" onclick="c2120()" class="botaodiv">2120</button>'
    var c2340 = '<button name="cij" onclick="c2340()" class="botaodiv">2340</button>'
    var c2351 = '<button name="cij" onclick="c2351()" class="botaodiv">2351</button>'
    var c2361 = '<button name="cij" onclick="c2361()" class="botaodiv">2361</button>'
    var cunicorn1 = '<button name="cij" onclick="cunicorn1()" class="botaodiv">Unicorn 1</button>'
    var cunicorn2 = '<button name="cij" onclick="cunicorn2()" class="botaodiv">Unicorn 2</button>'
    divres.innerHTML = `<p class="adivera">Peças LCM</p>${c2120} ${c2340} ${c2351} ${c2361} ${cunicorn1} ${cunicorn2}`
    
}
function c2120() {
    list.innerHTML = ''
    mod.innerHTML = '2120<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="lcm/2120.pdf" class="advera">Peças 2120</a>'
    list.innerHTML = ler
    
}
function c2340() {
    list.innerHTML = ''
    mod.innerHTML = '2340<br>'
    divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>402287 - MODULO DE IMPRESSAO LCM VJ2310/2340<br>'  
    var ler = '<a href="lcm/2340 2351 2361IPB.pdf" class="advera">Peças 2120</a>'
    list.innerHTML = ler
    
}
function c2351() {
    list.innerHTML = ''
    mod.innerHTML = '2351<br>'
    divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>36466 - KIT DE FILTROS DO COLETOR DE TINTA DA IMPRESSORA LCM 2351/2361<br>36485 - MODULO DE IMPRESSAO LCM V2351<br>'  
    var ler = '<a href="lcm/2340 2351 2361IPB.pdf" class="advera">Peças 2351</a>'
    list.innerHTML = ler
    
}
function c2361() {
    list.innerHTML = ''
    mod.innerHTML = '2361<br>'
    divptitulo.innerHTML = '404428 - Kit de Filtros manutencao Preventiva<br>36466 - KIT DE FILTROS DO COLETOR DE TINTA DA IMPRESSORA LCM 2351/2361<br>36486 - MODULO DE IMPRESSAO LCM V2361<br>'  
    var ler = '<a href="lcm/2340 2351 2361IPB.pdf" class="advera">Peças 2361</a>'
    list.innerHTML = ler
    
}
function cunicorn1() {
    list.innerHTML = ''
    mod.innerHTML = 'Unicorn 1<br>'
    divptitulo.innerHTML = 'RP15895 - BLOCO DE NOZZLES 10 mm UNICORN LCM (PADRÃO)<br>RP27339 - VALVULA DE TINTA 600 HZ - 12V - UNICORN LCM<br>'  
    var ler = '<a href="lcm/unicorn1.pdf" class="advera">Peças Unicorn 1</a>'
    list.innerHTML = ler
    
}
function cunicorn2() {
    list.innerHTML = ''
    mod.innerHTML = 'Unicorn 2<br>'
    divptitulo.innerHTML = 'RP35462 - BLOCO  25MM  Unicorn 2 (padão)<br>RP27339 - VALVULA DE TINTA 600 HZ - 12V - UNICORN LCM<br>'  
    var ler = '<a href="lcm/unicorn2.pdf" class="advera">Peças Unicorn 2</a>'
    list.innerHTML = ler
    
}