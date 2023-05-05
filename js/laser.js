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
    var tubos = '<button name="cij" onclick="tubos()" class="botaodiv">Tubos</button>'
    var laserm = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var cextrator = '<button name="cij" onclick="extratores()" class="botaodiv">Extratores</button>'
    var lasercon = '<button name="cij" onclick="conexaolaser()" class="botaodiv">Circuito de Ligação</button>'
    divres.innerHTML = `<p class="adivera">LASER</p>${laser} ${tubos} ${laserm} ${cextrator} ${lasercon}`
}

function reslaser() {
    var r30x0 = '<button name="cij" onclick="c30x0()" class="botaodiv">30x0</button>'
    var r3x20 = '<button name="cij" onclick="c3x20()" class="botaodiv">3x20</button>'
    var r3x30 = '<button name="cij" onclick="c3x30()" class="botaodiv">3x30</button>'
    var r3x40 = '<button name="cij" onclick="c3x40()" class="botaodiv">3x40</button>'
    var rfibra = '<button name="cij" onclick="cfibra()" class="botaodiv">Fibra</button>'
    var respelhos = '<button name="cij" onclick="lentesco2()" class="botaodiv">Lentes CO2</button>'
    divres.innerHTML = `<p class="adivera">Peças LASERS</p>${r30x0} ${r3x20} ${r3x30} ${r3x40} ${rfibra} ${respelhos}`
    
}
function tubos() {
    list.innerHTML = ''
    mod.innerHTML = 'Tubos Lasers<br>'
    divptitulo.innerHTML = 'Novos codigos dos tubos Lasers<br>'  
    var ler = '<a href="laser/TubosnovosBT.pdf" class="advera">Tubos</a>'
    list.innerHTML = ler
    
}
function c30x0() {
    list.innerHTML = ''
    mod.innerHTML = '30x0<br>'
    divptitulo.innerHTML = 'AL-SP73539 - TUBO DE CO2 10.6NM POTENCIA 10W  3010/3020<br>'  
    var ler = '<a href="laser/30x0.pdf" class="advera">Peças 30x0</a>'
    list.innerHTML = ler
    
}
function c3x20() {
    list.innerHTML = ''
    mod.innerHTML = '3x20<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="laser/3x20.pdf" class="advera">Peças 3x20</a>'
    list.innerHTML = ler
    
}
function c3x30() {
    list.innerHTML = ''
    mod.innerHTML = '3x30<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="laser/3x30.pdf" class="advera">Peças 3x30</a>'
    list.innerHTML = ler
    
}
function c3x40() {
    list.innerHTML = ''
    mod.innerHTML = '3x40<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="laser/3x40.pdf" class="advera">Peças 3x40</a>'
    list.innerHTML = ler
    
}
function cfibra() {
    list.innerHTML = ''
    mod.innerHTML = 'Fibra<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="laser/7220 - 7320.pdf" class="advera">Peças 7220 - 7320</a>'
    var ler1 = '<a href="laser/7220 - 7320.pdf" class="advera">Peças 7230 - 7330</a>'
    var ler2 = '<a href="laser/7210-7310.pdf" class="advera">Peças 7210 - 7310</a>'
    var ler3 = '<a href="laser/7340-7440.pdf" class="advera">Peças 7340 - 7440</a>'
    var ler4 = '<a href="laser/7510.pdf" class="advera">Peças 7510</a>'
    var ler5 = '<a href="laser/7610.pdf" class="advera">Peças 7610</a>'
    var ler6 = '<a href="laser/7810.pdf" class="advera">Peças 7810</a>'
    list.innerHTML = `${ler}<br>${ler1}<br>${ler2}<br>${ler3}<br>${ler4}<br>${ler5}<br>${ler6}`
    
}
function lentesco2() {
    list.innerHTML = ''
    mod.innerHTML = 'Lentes CO2<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="laser/lentesco2.pdf" class="advera">Medidas das Lentes</a><br>'
    var ler1= '<a href="laser/tipolenteco2.png" class="advera">Modelo de Lentes</a>'
    var ler2= '<a href="laser/PreventivaLente.pdf" class="advera">Preventiva Lentes</a>'
    list.innerHTML = `${ler0} ${ler1} ${ler2}`
    
}
function extratores() {
    list.innerHTML = ''
    mod.innerHTML = 'Estratores<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="laser/extratorantigo.pdf" class="advera">Extratores antigos</a><br>'
    var ler1 = '<a href="laser/XtractLite.pdf" class="advera">Extrator Xtract Lite</a><br>'
    var ler2 = '<a href="laser/XtractMax.pdf" class="advera">Extrator Xtract Max</a><br>'
    var ler3 = '<a href="laser/XtractPro.pdf" class="advera">Extrator Xtract Pro</a><br>'
    var ler4 = '<a href="laser/XtractPVC.pdf" class="advera">Extrator Xtract PVC</a>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4}`
    
}
