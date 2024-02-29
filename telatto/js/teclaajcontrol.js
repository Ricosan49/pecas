let ajcontrol = `<style>
		.descri1 {
			width: 610px;
			height: 40px;
			background-color: white;
			text-align: left;
			font-size: 20px;
			border: 0px;
		}
		tr {
			font-family: Arial;
			background-color: white;
			font-size: 15px;
		
		}
	</style>`
let teclaok2 = `
	<style>
		.divokk {
			position: relative;
			
		}
		.tdook {
			width:290px;
			height:40px;
			background-color: white;
			text-align: center;
			border-radius: 5px;
			border: 2px solid #A9A9A9;
			font-size: 20px;
			margin: 240px 2px 0px;
		}
		.tdook1 {
			width:290px;
			height:40px;
			background-color: white;
			text-align: center;
			border-radius: 5px;
			border: 2px solid #A9A9A9;
			font-size: 20px;
			margin: 289px 2px 0px;
		}
	</style>`
	
let dat = `${dia}/${mes}/${ano}`
let hor = `${hora}:${min} `
function teclaarquivclarity() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Arquivos de parametros Clarity</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	let descricao = ajcontrol+
	`
	<table>
			<tr>
				<td><input type="button" value=" Z026725 28Ago2023 134848T" class="descri1"></input></td>
			</tr>
	</table>`
	let teclaok = teclaok2+
	`
	<div class="divokk">
				<input type="button" value="Criar" class="tdook"></input>
				<input type="button" value="Restaurar" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${descricao} ${teclaok}`
}
function teclaclone() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Clone</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	
	
	let teclaok = teclaok2+
	`
	<div class="divokk">
				<input type="button" value="Criar" class="tdook1"></input>
				<input type="button" value="Restaurar" class="tdook1"></input>
		
	</div>`
	nivel0.innerHTML = `${teclaok}`
}
function teclaatualizar() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Atualizar</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	
	
	let teclaok = teclaok2+
	`
	<div class="divokk">
				<input type="button" value="atualizar" class="tdook1"></input>
				
		
	</div>`
	nivel0.innerHTML = `${teclaok}`
}
function teclainternacional() {
	//nivel0.style.overflow-y= "hidden";
	let esp0 = " "
	let esp1 = esp0.repeat(77)
	let esp2 = esp0.repeat(73)
	let esp3 = esp0.repeat(65)
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Internacionalização</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	let descricao = ajcontrol+
	`
	<table>
			<tr>
				<td><input type="button" value="Linguagem`+esp2+`Brasileiro >" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="Região/País`+esp1+`Brazil >" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="Unidades de Medidas`+esp3+`mm >" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
function teclatouchscreen() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Recalibrar Touch Screen</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	
	
	let teclaok = teclaok2+
	`
	<div class="divokk">
				<input type="button" value="Calibrar" class="tdook"></input>
				
		
	</div>`
	nivel0.innerHTML = `${teclaok}`
}
function teclaorientacaotela() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Orientação da Tela</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	let descricao = 
	`<style>
		.descri1 {
			width: 610px;
			height: 40px;
			background-color: white;
			text-align: left;
			border: 0px;
			font-size: 20px;
		}
		td {
			font-family: Arial;
			background-color: white;
			font-size: 15px;
		
		}
	</style>
	<table>
			<tr>
				<td><input type="button" value="  0°" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="✓ 180°" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
function tecladatahora() {
	//nivel0.style.overflow-y= "hidden";
	let esp0 = " "
	let esp1 = esp0.repeat(81)
	let esp2 = esp0.repeat(87)
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Data Hora</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	let descricao = ajcontrol+
	`
	<table>
			<tr>
				<td><input type="button" value="Data`+esp1+dat+` >" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="Hora`+esp2+hor+` >" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
function teclacomunic() {
	//nivel0.style.overflow-y= "hidden";
	let esp0 = " "
	let esp1 = esp0.repeat(72)
	let esp2 = esp0.repeat(80)
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Controle→Comunicação</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla1"
	
	let descricao = ajcontrol+
	`
	<table>
			<tr>
				<td><input type="button" value="Senha do Fabricante`+esp1+` >" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="Serviço Remoto`+esp2+` >" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}