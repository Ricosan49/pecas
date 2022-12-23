var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function inictij() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var tij = '<button name="cij" onclick="restij()" class="botaodiv">Peças</button>'
    var tijm = '<button name="cij" onclick="restij()" class="botaodiv">Manual</button>'
    var tijcon = '<button name="cij" onclick="restij()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">TIJ</p>${tij} ${tijm} ${tijcon}`
}

function restij() {
    var cwolke = '<button name="cij" onclick="cwolke()" class="botaodiv">Wolke</button>'
    var c8510 = '<button name="cij" onclick="c8510()" class="botaodiv">8510</button>'
    var c8520 = '<button name="cij" onclick="c8520()" class="botaodiv">8520</button>'
    var c8610 = '<button name="cij" onclick="c8610()" class="botaodiv">8610</button>'
    divres.innerHTML = `<p class="adivera">Peças TIJ</p>${cwolke} ${c8510} ${c8520} ${c8610}`
    
}
function cwolke() {
    list.innerHTML = ''
    mod.innerHTML = 'Wolke<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="tij/wolke.pdf" class="advera">Peças Wolke</a>'
    list.innerHTML = ler
    
}
function c8510() {
    list.innerHTML = ''
    mod.innerHTML = '8510<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="tij/8510.pdf" class="advera">Peças 8510</a>'
    list.innerHTML = ler
    
}
function c8520() {
    list.innerHTML = ''
    mod.innerHTML = '8520<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="tij/8520a.pdf" class="advera">Peças 8520</a>'
    list.innerHTML = ler
    
}
function c8610() {
    list.innerHTML = ''
    mod.innerHTML = '8610<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="tij/8610.pdf" class="advera">Peças 8610</a>'
    list.innerHTML = ler
    
}