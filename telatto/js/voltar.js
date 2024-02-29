//botyão voltar de cada pagina
function voltar() {
	//window.alert(ini0)
	if (ini0 === "consumiveis") {
		home()
	} else if (ini0 === "Consumíveis → Fita"){
		ribbon()
	} else if (ini0 === "Desempenho") {
		home()
	} else if (ini0 === "Ferramentas") { 
		home()
	
	}else if (ini0 === "Diagnosticos") { 
		ferramentas()
	
	} else if (ini0 === "Ajustes") { 
		ferramentas()
	
	} else if (ini0 === "Ferramentas → Diagnosticos → Cabeça de Impressão") { 
		diagnosticos()
	
	} else if (ini0 === "Ferramentas→Diagnosticos→Consumiveis") { 
		diagnosticos()
	
	} else if (ini0 === "Ferramentas→Diagnosticos→Controle") { 
		diagnosticos()
	
	} else if (ini0 === "iniciojustes") { 
		home()
	
	} else if (ini0 === "Diagnosticos→Cabeça de Impressão→Entradas") { 
		diagcabimp()
	
	} else if (ini0 === "Diagnosticos→Cabeça de Impressão→Saidas") { 
		diagcabimp()
	
	} else if (ini0 === "Diagnosticos→Cabeça de Impressão→Geral") { 
		diagcabimp()
	
	} else if (ini0 === "Integridade") { 
		diagcabimp()
	
	} else if (ini0 === "logeventos") { 
		diagcabimp()
	
	} else if (ini0 === "tempos") { 
		diagcabimp()
	
	} else if (ini0 === "Perfis do Codificador") { 
		diagcabimp()
	
	} else if (ini0 === "ajcabimp") { 
		ajustes()
	
	} else if (ini0 === "ajconsu") { 
		ajustes()
	
	} else if (ini0 === "ajcontrole") { 
		ajustes()
	
	} else if (ini0 === "basedados") { 
		ferramentas()
	
	} else if (ini0 === "conteudomsg") { 
		home()
	
	} else if (ini0 === "selmsg") { 
		home()
	
	} else if (ini0 === "tecla") { 
		ajcabimp()
	
	} else if (ini0 === "tecla1") { 
		ajcontrole()
	
	}  else {
		window.alert("ERR - esta tela não existe")
	}
}