var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')

function acesso() {
    divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = ''
    divptitulo.innerHTML = ''
    var acesso1 = `<button  onclick='ace("sen")' class="botaodiv">Sensores</button>`
	var acesso2 = `<button  onclick='ace("enc")' class="botaodiv">Encoders</button>`
	var acesso3 = `<button  onclick='ace("al")' class="botaodiv">Alarmes</button>`
	var acesso4 = `<button  onclick='ace("sup")' class="botaodiv">Suportes</button>`
	var acesso5 = `<button  onclick='ace("acessocij")' class="botaodiv">CIJ</button>`
	var acesso6 = `<button  onclick='ace("acesstto")' class="botaodiv">TTO</button>`
	var acesso7 = `<button  onclick='ace("acesslcm")' class="botaodiv">LCM</button>`
	var acesso8 = `<button  onclick='ace("laser")' class="botaodiv">Laser</button>`
	var acesso9 = `<button  onclick='ace("")' class="botaodiv">TIJ</button>`
	var acesso10 = `<button  onclick='ace("lpa")' class="botaodiv">LPA</button>`
	divres.innerHTML = `<p class="adivera">Acessórios</p>${acesso1} ${acesso2} ${acesso3} ${acesso4}
	${acesso5} ${acesso6} ${acesso7} ${acesso8} ${acesso9} ${acesso10}`
}
function ace(tipo) {
    var aces = tipo
	let pdf = `
	<style>
		.tam {
			height:480px;
			width: 950px;
		}
	</style>`
	if(aces == "sen") {
		mod.innerHTML = 'Sensores<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="acessorios/sensorestodos.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "enc") {
		mod.innerHTML = 'Encoders'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/encodergeral.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "al") {
		mod.innerHTML = 'Alarmes'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/alarme.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "sup") {
		mod.innerHTML = 'Suportes</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("cij")' class="botaodiv">CIJ</button></br>
		<button  onclick='supo("tto")' class="botaodiv">TTO</button></br>
		<button  onclick='supo("laser")' class="botaodiv">LASER</button></br>
		<button  onclick='supo("lcm")' class="botaodiv">LCM 2300</button></br>
		<button  onclick='supo("lcm2120")' class="botaodiv">LCM 2120</button></br>
		<button  onclick='supo("uni")' class="botaodiv">Unicorn</button></br>`
		
	}else if(aces == "listfop") {
		mod.innerHTML = 'Lista completa FOP'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550fop.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "pct9") {
		mod.innerHTML = 'Vista TAMP'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550300TTamp.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "p34") {
		mod.innerHTML = 'LPA P3400'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/P3400.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "ze5") {
		mod.innerHTML = 'Modulo Impressor ZE500'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/ze500.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "210") {
		mod.innerHTML = 'Aplicadora 210'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/210.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "k2") {
		mod.innerHTML = 'Aplicadora Ketan K200'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/K200.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "con9") {
		mod.innerHTML = 'Conexões 9550'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/9550conexao.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "conp") {
		mod.innerHTML = 'Conexões P3400'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/P34IO.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "con210") {
		mod.innerHTML = 'Conexoes 210'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/210conexao.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "conk") {
		mod.innerHTML = 'Conexões K200'
		divptitulo .innerHTML =''
		list.innerHTML = pdf+`<iframe src="lpa/k200IO.pdf" class="tam">ola mundo</iframe>`
	}else if(aces == "acessocij") {
		mod.innerHTML = 'Acessorios</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("resfri")' class="botaodiv">Resfriador</button></br>
		<button  onclick='supo("mesaperf")' class="botaodiv">Mesa CIJ Perfil</button></br>
		<button  onclick='supo("capaprot")' class="botaodiv">Capa de proteção</button></br>
		<button  onclick='supo("umbi")' class="botaodiv">Umbilical VJ1000</button></br>
		<button  onclick='supo("umbis")' class="botaodiv">Umbilical Simplicity</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>`
		
	}else if(aces == "acesstto") {
		mod.innerHTML = 'Acessorios TTO</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("reg")' class="botaodiv">Regulador de Pressão</button></br>
		<button  onclick='supo("mao")' class="botaodiv">Mão da TTO</button></br>
		<button  onclick='supo("velo")' class="botaodiv">Velocidade Maxima TTO</button></br>
		<button  onclick='supo("borracha")' class="botaodiv">Borrachas</button></br>
		<button  onclick='supo("limpeza")' class="botaodiv">Manutenção preventiva TTO</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>`
		
	}else if(aces == "laser") {
		mod.innerHTML = 'Acessorios</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("hand")' class="botaodiv">Handheld</button></br>
		<button  onclick='supo("medidorpotpq")' class="botaodiv">Medidor de Potência pequeno CO2</button></br>
		<button  onclick='supo("medidorpotyag")' class="botaodiv">Medidor de Potência Fibra/CO2/YAG</button></br>
		<button  onclick='supo("cxfiltro")' class="botaodiv">Caixa Nacional Pre-Filtro para Extrator</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>`
		
	}else if(aces == "acesslcm") {
		mod.innerHTML = 'Acessorios TTO</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("senseL95")' class="botaodiv">Sensor de Produto Padrão LCM</button></br>
		<button  onclick='supo("kitlimp")' class="botaodiv">Kit Limpeza LCM Completo</button></br>
		<button  onclick='supo("regprelcm")' class="botaodiv">Regulador de Pressão</button></br>
		<button  onclick='supo("ads")' class="botaodiv">ADS Tambor de 5 Litros Unicorn</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>`
		
	}else if(aces == "lpa") {
		mod.innerHTML = 'Acessórios LPA</br>'
		list.innerHTML = ''
		divptitulo.innerHTML =`
		<button  onclick='supo("senseL95")' class="botaodiv">Sensor de Produto Pdrão</button></br>
		<button  onclick='supo("ass9550")' class="botaodiv">Acessórios 9550</button></br>
		<button  onclick='supo("garcab")' class="botaodiv">Garantia da Cabeça de Impressão 9550</button></br>
		<button  onclick='supo("sentido")' class="botaodiv">Mão/Sentido da Impressora 9550</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>
		<button  onclick='supo("")' class="botaodiv">...</button></br>`}
	else {alert('ERRO!!! este item não existe!')}
    
}
function supo(tipo) {
    var supor = tipo
	let pdf = `
	<style>
		.tam {
			height:480px;
			width: 950px;
		}
	</style>`
	if(supor == "cij") {
		mod.innerHTML = 'Suporte CIJ<br>'
		divptitulo.innerHTML = ''  
		list.innerHTML = pdf+`<iframe src="acessorios/suportecij.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "enc1") {
		mod.innerHTML = 'Encoderes'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/encodergeral.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "tto") {
		mod.innerHTML = 'Suporte TTO'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/suportetto.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "laser") {
		mod.innerHTML = 'Suporte Laser</br>'
		divptitulo.innerHTML ='WBZ0003024 - SUPORTE LASER COM AJUSTE X/Y'
		list.innerHTML = pdf+`<iframe src="acessorios/suportelaser.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "lcm") {
		mod.innerHTML = 'Suporte LCM 2300</br>'
		divptitulo.innerHTML ='WBZ3100006 - SUPORTE Perfil LCM P/PISO'
		list.innerHTML = pdf+`<iframe src="acessorios/suportelcm.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "lcm2120") {
		mod.innerHTML = 'Suporte LCM</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/suporte2120.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "uni") {
		mod.innerHTML = 'Suporte Unicorn</br>'
		divptitulo.innerHTML ='RP21506 - SUPORTE METALICO UNICORN'
		list.innerHTML = pdf+`<iframe src="acessorios/suporteunicorm.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "resfri") {
		mod.innerHTML = 'Resfriador</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/resfriadorCooler.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "mesaperf") {
		mod.innerHTML = 'Mesa CIJ perfil</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/mesaperfil.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "capaprot") {
		mod.innerHTML = 'Capa de proteção cabeçote CIJ</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/capaprotecaovj1000.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "umbi") {
		mod.innerHTML = 'Umbilicais VJ1000</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/umbilicaisVJ1000.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "umbis") {
		mod.innerHTML = 'Umbilicais Simplicity</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/umbilicalsimplicity.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "reg") {
		mod.innerHTML = 'Regulador de Pressão 6210/DF+/6320/6420</br>'
		divptitulo.innerHTML ='cod.: 215977 - REGULADOR  DE AR  TTO DATAFLEX'
		list.innerHTML = pdf+`<iframe src="acessorios/reguladorTTO.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "mao") {
		mod.innerHTML = 'Sentido(mão) da impressora TTO</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/mao_tto.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "velo") {
		mod.innerHTML = 'Velocidades Maximas TTO</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/velocidadestto.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "borracha") {
		mod.innerHTML = 'Borrachas do PAD TTO</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/borrachatto.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "limpeza") {
		mod.innerHTML = 'Manutenção Preventiva TTO</br>'
		divptitulo.innerHTML ='216054 - Kit Limpeza da cabeça TTO'
		list.innerHTML = pdf+`<iframe src="acessorios/limpezatto.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "hand") {
		mod.innerHTML = 'Handheld</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/Handheld.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "medidorpotpq") {
		mod.innerHTML = 'Medidor de potência Basico</br>'
		divptitulo.innerHTML ='Codigo: AL-SP93444 - MEDIDOR POTENCIA  PARA IMPRESSORA LASER CO2'
		list.innerHTML = pdf+`<iframe src="acessorios/medpotpqCO2.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "medidorpotyag") {
		mod.innerHTML = 'Medidor de potência Fibra/CO2/YAG</br>'
		divptitulo.innerHTML ='Codigo: AL-SP67438 - MEDIDOR POTENCIA  PARA IMPRESSORA LASER Fibra/CO2/YAG'
		list.innerHTML = pdf+`<iframe src="acessorios/medpotyfibrayag.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "cxfiltro") {
		mod.innerHTML = 'Caixa Nacional Pre-Filtro para Extrator</br>'
		divptitulo.innerHTML ='Codigo: WBZ0003142 - Caixa Pre Filtro com 3 filtros de tela metalica para extrator de fumos'
		list.innerHTML = pdf+`<iframe src="acessorios/cxprefiltroestrator.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "kitlimp") {
		mod.innerHTML = 'Kit Limpeza LCM Completo</br>'
		divptitulo.innerHTML ='Codigo: 36481 - KIT DE LIMPEZA LCM'
		list.innerHTML = pdf+`<iframe src="acessorios/kitLimpezaLCM.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "senseL95") {
		mod.innerHTML = 'Sensor Padrão LCM/9550</br>'
		divptitulo.innerHTML ='Codigo do sensor: WBZ3100003 - SENSOR DE PRODUTO LCM/9550</br>Codigo do cabo: WBZ3100004 - CABO SENSOR PRODUTO LCM/9550'
		list.innerHTML = pdf+`<iframe src="acessorios/sensorlcm_9550.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "regprelcm") {
		mod.innerHTML = 'Regulador de Pressão LCM</br>'
		divptitulo.innerHTML ='Codigo: 403401 - REGULADOR DE PRESSAO DE AR LCM 2300'
		list.innerHTML = pdf+`<iframe src="acessorios/reguladordearlcm.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "ads") {
		mod.innerHTML = 'ADS - Tambor de 5 Litros Unicorn</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/ADSParts.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "ass9550") {
		mod.innerHTML = 'Acessórios 9550</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/acessorios9550.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "garcab") {
		mod.innerHTML = 'Garantia da Cabeça de impressão 9550</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/garantiacab9550.pdf" class="tam">ola mundo</iframe>`
	}else if(supor == "sentido") {
		mod.innerHTML = 'Mão/Sentido da Impressora 9550</br>'
		divptitulo.innerHTML =''
		list.innerHTML = pdf+`<iframe src="acessorios/sentido9550.pdf" class="tam">ola mundo</iframe>`
	}else {alert('ERRO!!! este item não existe!')}
}