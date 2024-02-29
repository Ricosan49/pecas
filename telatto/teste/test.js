//testar teclado


let ap = document.getElementById('num')
let ap1 = document.getElementById('btneste').value
let a = document.getElementById('itens')
let b = " oi mundão!!!1 "

let tam = `<style>
		.divv {
			font-size:30px;
			width: 500px;
			height: 70px;
			background-color: blue;
			border-radius: 5px;
			border: 5px solid #A9A9A9;
		}
	</style>`


function tecla1() {
	let ap2 = tam+`<div class="divv">como vai vc????</div>`
	a.innerHTML = ap2
}
function tecla2() {
	let ap2 = tam+`<div class="divv">eu estou bem????</div>`
	ap.innerHTML = ap2
}
function tecla3(){
	a.innerHTML = ''
	ap.innerHTML = ''
}