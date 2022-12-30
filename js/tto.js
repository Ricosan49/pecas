var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function inictto() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var tto = '<button name="cij" onclick="restto()" class="botaodiv">Peças</button>'
    var ttom = '<button name="cij" onclick="()" class="botaodiv">Manual</button>'
    var ttocon = '<button name="cij" onclick="conexaoTTO()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">TTO</p>${tto} ${ttom} ${ttocon}`
}

function restto() {
    var c6210 = '<button name="tto" onclick="c6210()" class="botaodiv">6210</button>'
    var cdfp = '<button name="tto" onclick="cdfp()" class="botaodiv">DF+</button>'
    var c632032 = '<button name="tto" onclick="c632032()" class="botaodiv">6320 32mm</button>'
    var c632053 = '<button name="tto" onclick="c632053()" class="botaodiv">6320 53mm</button>'
    var c642053 = '<button name="tto" onclick="c642053()" class="botaodiv">6420 53mm</button>'
    var c6420107 = '<button name="tto" onclick="c6420107()" class="botaodiv">6420 107mm</button>'
    var c6230 = '<button name="tto" onclick="c6230()" class="botaodiv">6230</button>'
    var c633032 = '<button name="tto" onclick="c633032()" class="botaodiv">6330 32mm</button>'
    var c633053 = '<button name="tto" onclick="c633053()" class="botaodiv">6330 53mm</button>'
    var c653053 = '<button name="tto" onclick="c653053()" class="botaodiv">6530 53mm</button>'
    var c6530107 = '<button name="tto" onclick="c6530107()" class="botaodiv">6530 107mm</button>'
    divres.innerHTML = `<p class="adivera">Peças TTO</p>${c6210} ${cdfp} ${c632032} ${c632053} ${c642053} ${c6420107} ${c6230} 
    ${c633032} ${c633053} ${c653053} ${c6530107}`
    
}
function c6210() {
    list.innerHTML = ''
    mod.innerHTML = '6210<br>'
    divptitulo.innerHTML = '403325	CABECA DE IMPRESSAO 32MM 6210-TTO<br>403330-UN  - CORREIA DENTADA VJ6210<br>'  
    var ler = '<a href="tto/6210i.pdf" class="advera">Peças Ilustradas 6210</a><br><a href="tto/6210IPB.pdf" class="advera">Peças IPB</a>'
    list.innerHTML = ler
    
}
function cdfp() {
    list.innerHTML = ''
    mod.innerHTML = 'DATAFLEX PLUS<br>'
    divptitulo.innerHTML = '215984 - CABECA DE IMPRESSAO DATAFLEX+ 53MM<br>216585 - CABEÇA DF+ 107mm<br>216037-UN - CORREIA DENTADA DA CABECA DE IMPRESSAO  53MMX107MM<br>'  
    var ler = '<a href="tto/dfpi.pdf" class="advera">Peças Ilustradas DF+</a><br><a href="tto/dfpIPB.pdf" class="advera">Peças DF+ IPB</a>'
    list.innerHTML = ler
    
}
function c632032() {
    list.innerHTML = ''
    mod.innerHTML = '6320 Cabeça 32mm<br>'
    divptitulo.innerHTML = '403325 - CABECA DE IMPRESSAO 32MM 6320-TTO<br>216037-UN - CORREIA DENTADA DA CABECA DE IMPRESSAO  32MM<br>'
    var ler = '<a href="tto/6320IPB.pdf" class="advera">Peças 6320 cabeça de 32mm</a>'
    list.innerHTML = ler
    
}
function c632053() {
    list.innerHTML = ''
    mod.innerHTML = '6320 Cabeça 53mm<br>'
    divptitulo.innerHTML = '215984 - CABECA DE IMPRESSAO 53MM 6320-TTO<br>216037-UN - CORREIA DENTADA DA CABECA DE IMPRESSAO  53MM<br>'  
    var ler = '<a href="tto/6320IPB.pdf" class="advera">Peças 6320 cabeça de 53mm</a>'
    list.innerHTML = ler
    
}
function c642053() {
    list.innerHTML = ''
    mod.innerHTML = '6420 Cabeça 53mm<br>'
    divptitulo.innerHTML = '215984 - CABECA DE IMPRESSAO 53MM 6320-TTO<br>216037-UN - CORREIA DENTADA DA CABECA DE IMPRESSAO  53MM<br>'  
    var ler = '<a href="tto/6420IPB.pdf" class="advera">Peças 6420 cabeça de 53mm</a>'
    list.innerHTML = ler
    
}
function c6420107() {
    list.innerHTML = ''
    mod.innerHTML = '6420 Cabeça 107mm<br>'
    divptitulo.innerHTML = '216585	CABECA DE IMPRESSAO 107MM 6420-TTO<br>216037-UN - CORREIA DENTADA DA CABECA DE IMPRESSAO  53MM<br>'  
    var ler = '<a href="tto/6420IPB.pdf" class="advera">Peças 6420 cabeça de 107mm</a>'
    list.innerHTML = ler
    
}
function c6230() {
    list.innerHTML = ''
    mod.innerHTML = '6230<br>'
    divptitulo.innerHTML = '408300 - CABECA DE IMPRESSAO DE 32MM 6230-TTO<br>408298 - CORREA  6230 (5 UNIDADES)<br>'  
    var ler = '<a href="tto/6230.pdf" class="advera">Peças 6230</a>'
    list.innerHTML = ler
    
}
function c633032() {
    list.innerHTML = ''
    mod.innerHTML = '6330 cabeça 32mm<br>'
    divptitulo.innerHTML = '408657 - CABECA DE IMPRESSAO 32MM 6330-TTO<br>407931 - CORREIA   6330-TTO<br>'  
    var ler = '<a href="tto/6330.pdf" class="advera">Peças 6330 cabeça 32mm</a>'
    list.innerHTML = ler
    
}
function c633053() {
    list.innerHTML = ''
    mod.innerHTML = '6330 cabeça 53mm<br>'
    divptitulo.innerHTML = '407933 - CABECA DE IMPRESSAO 53MM 6330-TTO<br>407931 - CORREIA   6330-TTO<br>'  
    var ler = '<a href="tto/6330.pdf" class="advera">Peças 6330 cabeça 53mm</a>'
    list.innerHTML = ler
    
}
function c653053() {
    list.innerHTML = ''
    mod.innerHTML = '6530 cabeça 53mm<br>'
    divptitulo.innerHTML = '407933 - CABECA DE IMPRESSAO 53MM 6530-TTO<br>407931 - CORREIA   6330-TTO<br>'  
    var ler = '<a href="tto/6530.pdf" class="advera">Peças 6530 cabeça 53mm</a>'
    list.innerHTML = ler
    
}
function c6530107() {
    list.innerHTML = ''
    mod.innerHTML = '6530 cabeça 107mm<br>'
    divptitulo.innerHTML = '408554 - CABECA DE IMPRESSAO 107MM 6530-TTO<br>408677 - CORREIA   6530-TTO<br>'  
    var ler = '<a href="tto/6530.pdf" class="advera">Peças 6530 cabeça 107mm</a>'
    list.innerHTML = ler
    
}
