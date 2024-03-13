var divres = window.document.getElementById('ver')
var divptitulo = window.document.getElementById('divpti')
var mod = window.document.getElementById('modelo')
var list = window.document.getElementById('lista')

function link() {
	divres.innerHTML = ''
    list.innerHTML = ''
    mod.innerHTML = 'Links Uteis</br>'
    divptitulo.innerHTML = ''
	var acesso1 = `<button  onclick='lin("lt")' class="botaodiv">LATAN</button></br>`
	var acesso2 = `<button  onclick='lin("gl")' class="botaodiv">Global</button></br>`
	var acesso3 = `<button  onclick='' class="botaodiv">...</button></br>`
	divptitulo.innerHTML = `${acesso1} ${acesso2} ${acesso3}`
}
function lin(l) {
	var con = l
	if(l == "lt") {
		window.open('https://veralto.sharepoint.com/sites/LATAM-TECHNICALSUPPORT/SitePages/Home.aspx')
	}else if(l == "gl") {
		window.open('https://veralto.sharepoint.com/sites/SupportTechnology/SitePages/Home.aspx')
	} else {alert('ERRO!!! este item não existe')}
}