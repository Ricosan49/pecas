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
    var laserm = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var lasercon = '<button name="cij" onclick="conexaolaser()" class="botaodiv">Circuito de Ligação</button>'
    divres.innerHTML = `<p class="adivera">LASER</p>${laser} ${laserm} ${lasercon}`
}

function reslaser() {
    var c30x0 = '<button name="cij" onclick="c30x0()" class="botaodiv">30x0</button>'
    var c3x20 = '<button name="cij" onclick="c3x20()" class="botaodiv">3x20</button>'
    var c3x30 = '<button name="cij" onclick="c3x30()" class="botaodiv">3x30</button>'
    var c3x40 = '<button name="cij" onclick="c3x40()" class="botaodiv">3x40</button>'
    var cfibra = '<button name="cij" onclick="cfibra()" class="botaodiv">Fibra</button>'
    var cespelhos = '<button name="cij" onclick="cespelhos()" class="botaodiv">Espelhos CO2</button>'
    divres.innerHTML = `<p class="adivera">Peças LASERS</p>${c30x0} ${c3x20} ${c3x30} ${c3x40} ${cfibra} ${cespelhos}`
    
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