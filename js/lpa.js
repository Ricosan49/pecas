var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')
function iniclpa() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var lpa9550 = '<button  onclick="reslpa()" class="botaodiv">Peças</button>'
    var p3400 = '<button  onclick="" class="botaodiv">Manual</button>'
    var ketan = '<button  onclick="conexoes()" class="botaodiv">Conexões</button>'
    divres.innerHTML = `<p class="adivera">LPA</p>${lpa9550} ${p3400} ${ketan}`
}
function reslpa() {
    var m9550 = '<button  onclick="p9550()" class="botaodiv">9550</button>'
    var mp3400 = '<button onclick="pp3400()" class="botaodiv">P3400</button>'
    var m210 = '<button onclick="p210()" class="botaodiv">210</button>'
    var mketan = '<button onclick="pketan()" class="botaodiv">KETAN</button>'
    divres.innerHTML = `<p class="adivera">Peças LPA</p>${m9550} ${mp3400} ${m210} ${mketan}`
    
}
function p9550() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças 9550<br>'
    divptitulo.innerHTML = '406315 - CABEÇA DE IMPRESSÃO 107 mm<br>409143 - CABECA DE IMPRESSAO 160 MM 160W<br>409579 - MANDRIL DE REBOBINADO DO RIBBON USADO - modelo novo mais fino<br>'  
    var ler0 = '<a href="lpa/peca9550.pdf" class="advera">Vista explodida de peças 9550</a><br>'
    var ler1 = '<a href="lpa/9550300TTamp.pdf" class="advera">Vista explodida de peças TAMP 300mm 9550</a><br>'
    var ler2 = '<a href="lpa/9550sincro.pdf" class"advera">Lista de peças completa Sincrona</a><br>'
    var ler3 = '<a href="lpa/9550tamplista.pdf" class"advera">Lista de peças completa aplicador TAMP</a><br>'
    var ler4 = '<a href="lpa/9550rcw.pdf" class"advera">Lista de peças completa aplicador RCW</a><br>'
    var ler5 = '<a href="lpa/9550fop.pdf" class"advera">Lista de peças completa aplicador FOP</a>'
    list.innerHTML = `${ler0} ${ler1} ${ler2} ${ler3} ${ler4} ${ler5}`
    
}
function pp3400() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças P3400<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="lpa/P3400.pdf" class="advera">Aplicador de etiquetas P3400</a><br>'
    var ler1 = '<a href="lpa/ze500.pdf" class"advera">Modulo impressor ZEBRA ZE500</a>'
    list.innerHTML = `${ler0} ${ler1}`
    
}
function p210() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças 210<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="lpa/210.pdf" class="advera">Aplicador de etiquetas 210</a><br>'
    list.innerHTML = `${ler0}`
    
}
function pketan() {
    list.innerHTML = ''
    mod.innerHTML = 'Peças Ketan<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="lpa/K200.pdf" class="advera">Aplicador de etiquetas K200</a><br>'
    list.innerHTML = `${ler0}`
    
}
function conexoes() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LPA<br>'
    divptitulo.innerHTML = ''  
    var ler0 = '<a href="lpa/9550conexao.pdf" class="advera">Conexões trazeira 9550</a><br>'
    var ler1 = '<a href="lpa/210conexao.pdf" class="advera">Conexões trazeira 210</a><br>'
    list.innerHTML = `${ler0} ${ler1}`
    
}
