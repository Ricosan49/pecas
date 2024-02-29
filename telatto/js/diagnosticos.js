//tela de diagnsoticos

function diagnosticos() {
    //window.alert("oi mundo!!!")
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = '<a class="tamanhofonte">Ferramentas → Diagnosticos</a>'
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="" onclick="diagcabimp()" class="fer" style="background-image:url(./icones/diagcabimp.png)"/></input></br>'
	let ferr1 = '<input type="button" value="" onclick="diagcontrole()" class="fer" style="background-image:url(./icones/diagcontrole.png)"/></input></br>'
	let ferr2 = '<input type="button" value="" onclick="diagconsumiveis()" class="fer0" style="background-image:url(./icones/diagconsumiveis.png)"/></input></br>'
	let ferr3 = '<input type="button" value="" onclick="opcao()" class="fer1" style="background-image:url(./icones/diagopcoes.png)"/></input></br>'
	nivel0.innerHTML = `${ferr0} ${ferr1} ${ferr2} ${ferr3}`
	ini0 = "Diagnosticos"
}

function diagcabimp() {
	let esp0 = " "
	let esp1 = esp0.repeat(79)
	let esp2 = esp0.repeat(47)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Diagnosticos→Cabeça de Impressão</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Entradas       '+esp1+'>" onclick="diagcabimpentradas()" class="des"/></input></br>'
	des1 = '<input type="button" value="Saídas          '+esp1+'>" onclick="diagcabimpsaidas()" class="des"/></input></br>'
	des2 = '<input type="button" value="Geral            '+esp1+'>" onclick="diagcabimpgeral()" class="des"/></input></br>'
	des3 = '<input type="button" value="Integridade cabeça de impressão'+esp2+'>" onclick="diagcabimpintegridade()" class="des"/></input></br>'
	des4 = '<input type="button" value="Log de eventos                             '+esp2+'>" onclick="diagcabimplog()" class="des"/></input></br>'
	des5 = '<input type="button" value="Tempos         '+esp1+'>" onclick="diagcabimptempos()" class="des"/></input></br>'
	des6 = '<input type="button" value="Perfis do codificador                     '+esp2+'>" onclick="diagcabimpperfiscod()" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6}`
	ini0 = "Ferramentas → Diagnosticos → Cabeça de Impressão"
}
function diagconsumiveis() {
	let esp0 = " "
	let esp1 = esp0.repeat(70)
	let esp2 = esp0.repeat(34)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Diagnosticos→Consumíveis</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Diâmetro do fornecimento de fita'+esp2+'102,83mm" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Diâmetro de descarte da fita         '+esp2+'34,04mm" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Tensão da fita   '+esp1+'2760" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Modo de impressão    '+esp2+'Tansferência Térmica" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3}`
	ini0 = "Ferramentas→Diagnosticos→Consumiveis"
}
function diagcontrole() {
	let esp0 = " "
	let esp1 = esp0.repeat(78)
	let esp2 = esp0.repeat(53)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas→Diagnosticos→Controle</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Versões           '+esp1+'>" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Infromações do Sistema          '+esp2+'>" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Informações de Contato          '+esp2+'>" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Comunicações'+esp1+'>" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Log de auditoria de produção  '+esp2+'>" onclick="" class="des"/></input></br>'
	des5 = '<input type="button" value="Fila de atualização de imagem'+esp2+'>" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5}`
	ini0 = "Ferramentas→Diagnosticos→Controle"
}
function diagcabimpentradas() {
	let esp0 = " "
	let esp1 = esp0.repeat(59)
	let esp2 = esp0.repeat(41)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...→Diagnosticos→Cabeça de Impressão→Entradas</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Configuração da Entrada                    '+esp2+'>"onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Codificador                        '+esp1+'>" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Entrada Externa 1'+esp1+'Desligada" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Entrada Externa 2'+esp1+'Desligada" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Posição da Cabeça de impressão'+esp2+'Início" onclick="" class="des"/></input></br>'
	des5 = '<input type="button" value="Cassete Aberto             '+esp1+'Não" onclick="" class="des"/></input></br>'
	des6 = '<input type="button" value="Distância da Cabeça '+esp1+'27mm" onclick="" class="des"/></input></br>'
	des7 = '<input type="button" value="Sensor de posição da Cabeça     '+esp2+'Início" onclick="" class="des"/></input></br>'
	des8 = '<input type="button" value="Sensor de posição da Fita            '+esp2+'Ativo" onclick="" class="des"/></input></br>'
	des9 = '<input type="button" value="Voltagem do Motor        '+esp1+'24v" onclick="" class="des"/></input></br>'
	des10 = '<input type="button" value="Alimentação 24 Volts    '+esp1+'24v" onclick="" class="des"/></input></br>'
	des11 = '<input type="button" value="Voltagem da Cabeça    '+esp1+'24v" onclick="" class="des"/></input></br>'
	des12 = '<input type="button" value="Temperatura da Cabeça               '+esp2+'35°C" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7} ${des8} ${des9} ${des10} ${des11} ${des12} `
	ini0 = "Diagnosticos→Cabeça de Impressão→Entradas"
}
function diagcabimpsaidas() {
	let esp0 = " "
	let esp1 = esp0.repeat(59)
	let esp2 = esp0.repeat(20)
	let desab = '<p class=estacionadatxt>Desabilitado</p>'
	let desab1 = '<Button class="estacionada" style="background-image:url(./icones/saidasestacionada.png)"></Button>'
	let desab2 = '<Button class="estacionada" style="background-image:url(./icones/saidadesligada.png)"></Button>'
	let desab3 = '<Button class="estacionada" style="background-image:url(./icones/saidaabrir.png)"></Button>'
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...→Diagnosticos→Cabeça de Impressão→Saídas</a>`
	voltar.innerHTML = voltar0
	des0 = '<div onclick="" class="des"/><a class="estacionadatxt">Posição da cabeça de impressão</a>'+desab1+'</div>'
	des1 = '<div onclick="" class="des"/><a class="estacionadatxt">Entrada/saída da cabeça</a>'+desab2+'</div>'
	des2 = '<div onclick="" class="des"/><a class="estacionadatxt">Saída por Relé 1(7 e 8)</a>'+desab3+'</div>'
	des3 = '<div onclick="" class="des"/><a class="estacionadatxt">Saída por Relé 2(9 e 10)</a>'+desab3+'</div>'
	des4 = '<div onclick="" class="des"/><a class="estacionadatxt">Saída PNP 3 (11)</a>'+desab2+'</div>'
	des5 = '<div onclick="" class="des"/><a class="estacionadatxt">Saída PNP 4 (13)</a>'+desab2+'</div>'
	des6 = '<div onclick="" class="des"/><a class="estacionadatxt">LED verde</a>'+desab2+'</div>'
	des7 = '<div onclick="" class="des"/><a class="estacionadatxt">LED vermelho</a>'+desab2+'</div>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7}`
	ini0 = "Diagnosticos→Cabeça de Impressão→Saidas"
}
function diagcabimpgeral() {
	let esp0 = " "
	let esp1 = esp0.repeat(50)
	let esp2 = esp0.repeat(39)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...→Diagnosticos→Cabeça de Impressão→Geral</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Modo da impressora      '+esp1+'Contínua" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Mão da cabeça de impressão       '+esp2+'Direita" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Modo de impressão'+esp2+'Termo Transferência" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Registro de Impressão Total      '+esp2+'17,5mm" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Impressão de Imagem de Teste           '+esp2+'>" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4}`
	ini0 = "Diagnosticos→Cabeça de Impressão→Geral"
}
function diagcabimpintegridade() {
	let esp0 = " "
	let esp1 = esp0.repeat(55)
	let esp2 = esp0.repeat(26)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...Cabeça de Impressão→Integridade do Cabeçote de Impressão</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Exibir Gráfico de Integridade '+esp1+'>" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="ID da cabeça de impressão'+esp2+'0123417D78B5B2C3" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Resistencia da Cabeça    '+esp1+'1164" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Distância Total IMpressa'+esp1+'0,0km" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Senha do Fabricante             '+esp1+'>" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4}`
	ini0 = "Integridade"
}
function diagcabimplog() {
	let esp0 = " "
	let esp1 = esp0.repeat(55)
	let esp2 = esp0.repeat(26)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...Cabeça de Impressão→Log de Eventos</a>`
	voltar.innerHTML = voltar0
	des00 = '<a style="background-image:url(./icones/diagcabimplogeventos.png)" class="logeventos"></a>'
	nivel0.innerHTML = des00
	ini0 = "logeventos"
}
function diagcabimptempos() {
	let esp0 = " "
	let esp1 = esp0.repeat(53)
	let esp2 = esp0.repeat(20)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...Cabeça de Impressão→Tempos</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Velocidade mínima de impressão (mm/s)          '+esp2+'0mm" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Velocidade máxima de impressão (mm/s)         '+esp2+'0mm" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Tempo do ciclo (ms)           '+esp1+'0ms" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Tempo de impressão (ms)  '+esp1+'0ms" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Tempo de seleção de trabalho                            '+esp2+'0ms" onclick="" class="des"/></input></br>'
	des5 = '<input type="button" value="Tempo de atualização dos dados da mensagem'+esp2+'0ms" onclick="" class="des"/></input></br>'
	des6 = '<input type="button" value="Tempo de atualização do contador                     '+esp2+'0ms" onclick="" class="des"/></input></br>'
	des7 = '<input type="button" value="Tempo/data de atualização'+esp1+'0ms" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4} ${des5} ${des6} ${des7}`
	ini0 = "tempos"
}
function diagcabimpperfiscod() {
	let esp0 = " "
	let esp1 = esp0.repeat(60)
	let esp2 = esp0.repeat(54)
    let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">...Cabeça de Impressão→Perfis do Codificador</a>`
	voltar.innerHTML = voltar0
	des0 = '<input type="button" value="Capturar Perfil do Codificador'+esp2+'>" onclick="" class="des"/></input></br>'
	des1 = '<input type="button" value="Exibir o Ultimo Perfil               '+esp2+'>" onclick="" class="des"/></input></br>'
	des2 = '<input type="button" value="Ínicio do Perfil'+esp1+'Automatico >" onclick="" class="des"/></input></br>'
	des3 = '<input type="button" value="Tipo de Perfil        '+esp1+'Padrão >" onclick="" class="des"/></input></br>'
	des4 = '<input type="button" value="Eixo X do Perfil '+esp1+'Distância >" onclick="" class="des"/></input></br>'
	nivel0.innerHTML = `${des0} ${des1} ${des2} ${des3} ${des4}`
	ini0 = "Perfis do Codificador"
}