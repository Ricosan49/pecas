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
    var lerO = '<a href="conexoes/NucleoOriginal.pdf">Nucleo original</a><br>'
    var lerB = '<a href="conexoes/NucleoTipoB.pdf">Nucleo Tipo B</a><br>'
    var lerC = '<a href="conexoes/NucleoTipoC.pdf">Nucleo Tipo C</a><br>'
    var ler17 = '<a href="conexoes/nucleo1710.pdf">Nucleo/Sistema de tinta 1710</a>'
    list.innerHTML = `${lerO} ${lerB} ${lerC} ${ler17}`
    
}

