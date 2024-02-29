//tela de ajustes

function ajustes() {
     //window.alert("oi mundo!!!")
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas → Ajustes</a>`
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="" onclick="ajcabimp()" class="fer" style="background-image:url(./icones/diagcabimp.png)"/></input></br>'
	let ferr1 = '<input type="button" value="" onclick="ajcontrole()" class="fer" style="background-image:url(./icones/diagcontrole.png)"/></input></br>'
	let ferr2 = '<input type="button" value="" onclick="ajconsumiveis()" class="fer0" style="background-image:url(./icones/diagconsumiveis.png)"/></input></br>'
	let ferr3 = '<input type="button" value="" onclick="opcao()" class="fer1" style="background-image:url(./icones/diagopcoes.png)"/></input></br>'
	nivel0.innerHTML = `${ferr0} ${ferr1} ${ferr2} ${ferr3}`
	ini0 = "Ajustes"
}
function ajcabimp() {
	let esp0 = " "
	let esp1 = esp0.repeat(57)
	let esp2 = esp0.repeat(43)
	let esp3 = esp0.repeat(13)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Ajustes→Cabeça de Impressão</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Registro Horizontal  '+esp1+'0,0mm >" onclick="teclaH()" class="des"/></input></br>'
	des1 = '<input type="button" value="Registro Vertical      '+esp1+'0,0mm >" onclick="teclaV()" class="des"/></input></br>'
	des2 = '<input type="button" value="IAssure                '+esp1+'Habilitado >" onclick="iassure()" class="des"/></input></br>'
	des3 = '<input type="button" value="Atraso da Impressão(Somente Intermitente)           '+esp3+'0ms >" onclick="teclaatraso()" class="des"/></input></br>'
	des4 = '<input type="button" value="Velocidade da Impressão(Somente Intermitente)'+esp3+'200ms >" onclick="teclavelocidade()" class="des"/></input></br>'
	des5 = '<input type="button" value="Posição da Impressão(Somente Contínua)       '+esp3+'25,0mm >" onclick="teclaposicao()" class="des"/></input></br>'
	des6 = '<input type="button" value="Contraste da Impressão            '+esp2+'75% >" onclick="teclacontraste()" class="des"/></input></br>'
	des7 = '<input type="button" value="Força da impressão          '+esp1+'1 >" onclick="teclaforca()" class="des"/></input></br>'
	des8 = '<input type="button" value="Modo de Economia da Fita '+esp2+'Nenhum >" onclick="teclaeconomia()" class="des"/></input></br>'
	des9 = '<input type="button" value="Orientação da Impressão'+esp1+'0° >" onclick="teclaorientacao()" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7} ${des8} ${des9}`
	ini0 = "ajcabimp"
}
function ajconsumiveis() {
	let esp0 = " "
	let esp1 = esp0.repeat(61)
	let esp2 = esp0.repeat(43)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Ajustes→Consumíveis</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Largura do Ribbon'+esp1+'55mm >" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Cor do Ribbon        '+esp1+'Preto >" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Tipo do Ribbon        '+esp1+'Ultra >" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2}`
	ini0 = "ajconsu"
}
function ajcontrole() {
	let esp0 = " "
	let esp1 = esp0.repeat(68)
	let esp2 = esp0.repeat(47)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Ajustes→Controle</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Arquivos de Parâmetros Clarity    '+esp2+'>" onclick="teclaarquivclarity()" class="des"/></input></br>'
	des1 = '<input type="button" value="Clone de Impressora'+esp1+'>" onclick="teclaclone()" class="des"/></input></br>'
	des2 = '<input type="button" value="Atualização               '+esp1+'>" onclick="teclaatualizar()" class="des"/></input></br>'
	des3 = '<input type="button" value="Internacionalização  '+esp1+'>" onclick="teclainternacional()" class="des"/></input></br>'
	des4 = '<input type="button" value="Recalibração do Touchscreen       '+esp2+'>" onclick="teclatouchscreen()" class="des"/></input></br>'
	des5 = '<input type="button" value="Ajuste da orientação da tela '+esp2+'180° >" onclick="teclaorientacaotela()" class="des"/></input></br>'
	des6 = '<input type="button" value="Ajuste Data e Hora   '+esp1+'>" onclick="tecladatahora()" class="des"/></input></br>'
	des7 = '<input type="button" value="Comunicação           '+esp1+'>" onclick="teclacomunic()" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7}`
	ini0 = "ajcontrole"
}