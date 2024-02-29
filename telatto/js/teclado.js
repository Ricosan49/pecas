//testar teclado
let cxdig = `<style>
		.descri2 {
			width: 462px;
			height: 50px;
			background-color: white;
			text-align: left;
			font-size: 20px;
			border: 0px;
		}
		.btnlateral {
			width: 55px;
			height: 53px;
			font-size:30px;
		}
	</style>` 
let descri0 =`
	<style>
		.descri1 {
			width: 270px;
			height: 50px;
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
	</style>`
let teclanume = `
	<style>
		.tdnum {
			width: 80px;
			height: 50px;
			background-color: white;
			text-align: conter;
			border: 2px;
			margin: 0px 0px 0px;
			font-size: 20px;
		}
		.divnum {
			position: absolute;
			margin: -164px 330px 0px;
		}
		td {
			font-family: Arial;
			background-color: white;
		}
	</style>
`
let teclaok1 = `
	<style>
		.divokk {
			position: relative;
			
		}
		.tdook {
			width:290px;
			height:40px;
			background-color: white;
			text-align: center;
			border: 2px;
			font-size: 20px;
			margin: 60px 0px 0px;
		}
	</style>`
function teclaH() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Registro Horizontal</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0,0mm" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">0,0mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">75,0mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">00,0mm</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}

function teclaV() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Registro Vertical</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0,0mm" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">-53,0mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">53,0mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">00,0mm</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function iassure() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→IAssure</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
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
				<td><input type="button" value="  Desabilitado" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="✓ Habilitado" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
function teclaatraso() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Atraso</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0,0ms" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">0ms</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">500ms</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">0ms</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function teclavelocidade() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Velocidade</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0ms" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">0ms</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">500ms</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">0ms</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function teclaposicao() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Posição da IMpressão</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0,0mm" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">0,0mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">500mm</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">0mm</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function teclacontraste() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Contraste</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0%" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">40%</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">100%</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">75%</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function teclaforca() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→Contraste</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
	let cxdigito = cxdig+
	`
	<input type="button" value="-" class="btnlateral"></input>
	<input type="button" value="0" class="descri2"></input>
	<input type="button" value="+" class="btnlateral"></input>`
	let descricao = descri0+
	`
	<table>
			<tr>
				<td><input type="button" value="Mín" class="descri1">1</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Máx" class="descri1">5</input></td>
			</tr>
			<tr>
				<td><input type="button" value="Padrão" class="descri1">3</input></td>
			</tr>
						
	</table>`
	let teclanum = teclanume+
	`
	<div class="divnum">
	<table>
			<tr>
				<td><input type="button" value="1" class="tdnum"></input></td>
				<td><input type="button" value="2" class="tdnum"></input></td>
				<td><input type="button" value="3" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="4" class="tdnum"></input></td>
				<td><input type="button" value="5" class="tdnum"></input></td>
				<td><input type="button" value="6" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="7" class="tdnum"></input></td>
				<td><input type="button" value="8" class="tdnum"></input></td>
				<td><input type="button" value="9" class="tdnum"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="0" class="tdnum"></input></td>
				<td><input type="button" value="," class="tdnum"></input></td>
				<td><input type="button" value="Apagar" class="tdnum"></input></td>
			</tr>
	</table>
	</div>`
	let teclaok = teclaok1+
	`
	<div class="divokk">
				<input type="button" value="Cancelar" class="tdook"></input>
				<input type="button" value="OK" class="tdook"></input>
		
	</div>`
	nivel0.innerHTML = `${cxdigito} ${descricao} ${teclanum} ${teclaok}`
}
function teclaeconomia() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→IAssure</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
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
				<td><input type="button" value="    Intercalado" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="✓ Nenhum" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
function teclaorientacao() {
	//nivel0.style.overflow-y= "hidden";
	ini.innerHTML = `<a class="tamanhofonte">...Ajustes→Cabeça de Impressão→IAssure</a>`
	voltar.innerHTML = voltar0
	ini0 = "tecla"
	
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
				<td><input type="button" value="    180" class="descri1"></input></td>
			</tr>
			<tr>
				<td><input type="button" value="✓ 0" class="descri1"></input></td>
			</tr>
	</table>`
	nivel0.innerHTML = `${descricao}`
}
