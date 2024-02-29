//para aparecer a data e a hora na tela constante
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth() +1
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()
let datahora = document.getElementById('pdatahora')

datahora.innerText = `${hora}:${min}  ${dia}/${mes}/${ano}`

let voltar0 = '<input type="button" value="" onclick="voltar()" class="btnvoltar" style="background-image:url(./icones/setavoltar.png)"/></input></br>'

function home() {
	let nivelribbon = document.getElementById('inicio')
	let voltar = document.getElementById('pdatahora')
	let nivel0 = document.getElementById('principal')
	nivelribbon.innerHTML = "Início"
	voltar.innerHTML = datahora.innerText = `${hora}:${min}  ${dia}/${mes}/${ano}`
	let msg0 = '<input type="button" value="" onclick="selmsg()" class="btnmsg" style="background-image:url(./icones/btnMSG.png)"/></input></br>'
	let texto = '<input type="button" value="TESTE" onclick="conteudomsg()" class="btnmsgvisao" /></input></br>'
	let conter = '<input type="button" value="" onclick="desempenho()" class="btncont" style="background-image:url(./icones/btncontadores.png)"/></input></br>'
	let ribbon0 = '<input type="button" value="" onclick="ribbon()" class="btntinta" style="background-image:url(./icones/btnindicadorfita.png)"/></input></br>'
	nivel0.innerHTML = `${msg0} ${texto} ${conter} ${ribbon0}`
	
}
function opcao() {
	alert('NESTE ITEM NÃO CONTÉM CONTEUDO')
}



let ini = document.getElementById('inicio')
let ini0 = document.getElementById('inicio').text
let nivel0 = document.getElementById('principal')


function ribbon() {
    //window.alert("ola mundo")
    //let nivelribbon = document.getElementById('inicio')
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = "Consumíveis"
	voltar.innerHTML = voltar0
	nivel0.innerHTML = '<input type="button" value="" onclick="conteudoribbon()" class="nivelribbon0" style="background-image:url(./icones/btnnivelfita.png)"/></input></br>'
	ini0 = "consumiveis"
}
function conteudoribbon() {
    //window.alert("ola mundo")
    //let nivelribbon = document.getElementById('inicio')
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = "Consumíveis → Fita"
	voltar.innerHTML = voltar0
	nivel0.innerHTML = '<input type="button" value="" onclick="" class="nivelribbon1" style="background-image:url(./icones/btnconteudofita.png)"/></input></br>'
	ini0 = "Consumíveis → Fita"
}
function inicioajustes() {
    let esp0 = " "
	let esp1 = esp0.repeat(57)
	let esp2 = esp0.repeat(34)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ajustes</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Registro Horizontal'+esp1+'0,0mm  >" onclick="teclaH()" class="des"/></input></br>'
	des1 = '<input type="button" value="Registro Vertical    '+esp1+'0,0mm  >" onclick="teclaV()" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1}`
	ini0 = "iniciojustes"
}
function desempenho() {
	let esp0 = " "
	let esp1 = esp0.repeat(63)
	let esp2 = esp0.repeat(57)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = "Desempenho"
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Taxa de Produção         '+esp1+'0" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Contador de Lote          '+esp1+'0" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Contagem Total             '+esp1+'0" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Disponibilidade              '+esp1+'>" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Pacotes Muito Lentos    '+esp1+'0" onclick="" class="des"/></input></br>'
	des5 = '<input type="button" value="Impressões em Pacotes'+esp1+'0" onclick="" class="des"/></input></br>'
	des6 = '<input type="button" value="Sinais Impressão Ignorados'+esp2+'0" onclick="" class="des"/></input></br>'
	des7 = '<input type="button" value="Velocidade curto prazo        '+esp2+'0" onclick="" class="des"/></input></br>'
	des8 = '<input type="button" value="Eficiência em curto prazo    '+esp2+'0" onclick="" class="des"/></input></br>'
	des9 = '<input type="button" value="Velocidade em longo prazo '+esp2+'0" onclick="" class="des"/></input></br>'
	des10 = '<input type="button" value="Eficiência em longo prazo   '+esp2+'0" onclick="" class="des"/></input></br>'
	des11 = '<input type="button" value="Velocidade de tendência     '+esp2+'0" onclick="" class="des"/></input></br>'
	des12 = '<input type="button" value="Tendência de eficiência       '+esp2+'0" onclick="" class="des"/></input></br>'
	des13 = '<input type="button" value="Velocidade nominal             '+esp2+'0" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7} ${des8} ${des9} ${des10} ${des11} 
	${des12} ${des13}`
	ini0 = "Desempenho"
}


function ferramentas() {
    //window.alert("oi mundo!!!")
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = '<a class="tamanhofonte">Ferramentas</a>'
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="" onclick="ajustes()" class="fer" style="background-image:url(./icones/ferajustes.png)"/></input></br>'
	let ferr1 = '<input type="button" value="" onclick="basedados()" class="fer" style="background-image:url(./icones/ferbasededados.png)"/></input></br>'
	let ferr2 = '<input type="button" value="" onclick="diagnosticos()" class="fer0" style="background-image:url(./icones/ferdiagnosticos.png)"/></input></br>'
	let ferr3 = '<input type="button" value="" onclick="opcao()" class="fer1" style="background-image:url(./icones/ferajuda.png)"/></input></br>'
	nivel0.innerHTML = `${ferr0} ${ferr1} ${ferr2} ${ferr3}`
	ini0 = "Ferramentas"
}
function conteudomsg() {
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = '<a class="tamanhofonte">TESTE</a>'
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="" onclick="" class="conteudomsg0" style="background-image:url(./icones/conteudomsg.png)"/></input></br>'
	let ferr1 = '<input type="button" value="" onclick="" class="fer" style="background-image:url(./icones/ferbasededados.png)"/></input></br>'
	let ferr2 = '<input type="button" value="" onclick="" class="fer0" style="background-image:url(./icones/ferdiagnosticos.png)"/></input></br>'
	let ferr3 = '<input type="button" value="" onclick="" class="fer1" style="background-image:url(./icones/ferajuda.png)"/></input></br>'
	nivel0.innerHTML = `${ferr0}`
	ini0 = "conteudomsg"
}
function selmsg() {
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = '<a class="tamanhofonte">Selecinar Mensagem</a>'
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="&#128269;" onclick="" class="btnmsg1" style=""></input></br>'
	let ferr1 = '<input type="button" value="TESTE" onclick="" class="btnmsg1"></input>'
	let ferr2 = '<input type="button" value="" onclick="" class="conteudomsg1" style="background-image:url(./icones/conteudomsg.png)"/></input></br>'
	let ferr3 = '<input type="button" value="Cancelar" onclick="" class="btnmsg2"</br>'
	let ferr4 = '<input type="button" value="OK" onclick="" class="btnmsg2"</br>'
	nivel0.innerHTML = `${ferr0} ${ferr1} ${ferr2} ${ferr3} ${ferr4}`
	ini0 = "conteudomsg"
}
