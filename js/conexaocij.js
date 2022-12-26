var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')


function rescon() {
    var cconexao = '<button name="cij" onclick="conconexao()" class="botaodiv">Conexão</button>'
    var cpainelVj = '<button name="cij" onclick="conpainelVJ1000()" class="botaodiv">Painel de conexões dos equipamentos CIJs</button>'
    divres.innerHTML = `<p class="adivera">Conexões CIJ</p>${cconexao} ${cpainelVj}`
    
}
function conconexao() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões VJ1000/1240/1280/1580/1860/1880<br>'
    divptitulo.innerHTML = ''  
    var ler = '<a href="conexoes/conexaoCIJ.pdf">VJ1000</a>'
    list.innerHTML = ler
    
}
function conpainelVJ1000() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões VJ1000<br>'
    divptitulo.innerHTML = ''  
    var ler1 = '<a href="conexoes/painellateralvj1000.pdf">Painel lateral VJ1000</a><br>'
    var ler2 = '<a href="conexoes/painellateralvj1610dh.pdf">Painel lateral VJ1610DH</a><br>'
    var ler3 = '<a href="conexoes/I_O1040.pdf">Painel Lateral 1040</a><br>'
    var ler4 = '<a href="conexoes/I_O12401280.pdf">Painel traseiro 1240/1280</a><br>'
    var ler5 = '<a href="conexoes/I_O1580.pdf">Painel traseiro 1580</a><br>'
    var ler6 = '<a href="conexoes/I_O1860.pdf">Painel traseiro 1860</a><br>'
    var ler7 = '<a href="conexoes/I_O1880.pdf">Painel traseiro 1880</a><br>'
    list.innerHTML = `${ler1} ${ler2} ${ler3} ${ler4} ${ler5} ${ler6} ${ler7}`
    
}
function nucleo() {
    list.innerHTML = ''
    mod.innerHTML = 'Nucleos VJ1000<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/NucleoOriginaL.pdf">Nucleo original</a><br>'
    var lerB = '<a href="conexoes/NucleoTipoB.pdf">Nucleo Tipo B</a><br>'
    var lerC = '<a href="conexoes/NucleoTipoC.pdf">Nucleo Tipo C</a>'
    var lerC = '<a href="conexoes/Nucleo1710.pdf">Nucleo/Sistema de tinta 1710</a>'
    list.innerHTML = `${lerO} ${lerB} ${lerC}`
    
}
function conexaoTTO() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões TTO<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O6210 DF+.pdf">I/O 6210</a><br>'
    var lerB = '<a href="conexoes/I_O6230.pdf">I/O 6230</a><br>'
    var lerC = '<a href="conexoes/I_O6210 DF+.pdf">I/O DF+ - 6420</a><br>'
    var lerD = '<a href="conexoes/I_O6330 6530.pdf">I/O 6330/6530</a>'
    list.innerHTML = `${lerO} ${lerB} ${lerC} ${lerD}`
    
}
function conexaolcm() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LCM<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O2300.pdf">I/O 2300</a><br>'
    list.innerHTML = `${lerO}`
    
}
function conexaolaser() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões LCM<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_O3120 3320.pdf">I/O 3120/3320/3130/3330</a><br>'
    var lerA = '<a href="conexoes/I_O3140 3340.pdf">I/O 3140/3340</a><br>'
    var lerB = '<a href="conexoes/I_OX9seg3140 3340.pdf">I/O conector X9 3140/3340</a><br>'
    list.innerHTML = `${lerO} ${lerA} ${lerB}`
    
}
function conexaotij() {
    list.innerHTML = ''
    mod.innerHTML = 'Conexões TIJ<br>'
    divptitulo.innerHTML = ''  
    var lerO = '<a href="conexoes/I_OM600.pdf">I/O M600</a><br>'
    var lerA = '<a href="conexoes/I_O8510.pdf">I/O 8510/8520</a><br>'
    var lerB = '<a href="conexoes/I_O8510.pdf">I/O 8610</a><br>'
    list.innerHTML = `${lerO} ${lerA} ${lerB}`
    
}

