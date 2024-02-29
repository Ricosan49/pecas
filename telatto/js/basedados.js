//Base de dados

function basedados() {
	let voltar = document.getElementById('pdatahora')
	ini.innerHTML = `<a class="tamanhofonte">Ferramentas →Base de Dados</a>`
	voltar.innerHTML = voltar0
	let ferr0 = '<input type="button" value="" onclick="" class="fer" style="background-image:url(./icones/basedadosinterno.png)"/></input></br>'
	let ferr1 = '<input type="button" value="" onclick="" class="fer" style="background-image:url(./icones/basedadosexterno.png)"/></input></br>'
	let ferr2 = '<input type="button" value="" onclick="" class="fer0" style="background-image:url(./icones/basedadoscapacidade.png)"/></input></br>'
	nivel0.innerHTML = `${ferr0} ${ferr1} ${ferr2}`
	ini0 = "basedados"
	
}

function basedadosinterno() {
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