function trocarteladiag(){
    var imagens = [
    "file:///C:/silvio/esquipamentos/CIJ/1040/telas/icones/teladiag1.png",
    "file:///C:/silvio/esquipamentos/CIJ/1040/telas/icones/teladiag2.png",
    "file:///C:/silvio/esquipamentos/CIJ/1040/telas/icones/seltrab.png"
    ]
    var txt = document.getElementById("text")
    var img = document.getElementById("diag");
    //var img = document.getElementById("agni");
    var img_src = img.src;
    var img_idx = imagens.indexOf(img_src);
    img.src = imagens[ img_idx == imagens.length-1 ? 0 : img_idx+1 ];
    
}

function teladiag2() {
    window.location.href = "./teladiagnosticos2.html"
}
function teladiag3() {
    window.location.href = "./teladiagnosticos3.html"
}
function teladiag4() {
    window.location.href = "./teladiagnosticos4.html"
}
function teladiag5() {
    window.location.href = "./teladiagnosticos5.html"
}
function teladiag6() {
    window.location.href = "./teladiagnosticos6.html"
}
function teladiag7() {
    window.location.href = "./teladiagnosticos7.html"
}
function teladiag8() {
    window.location.href = "./teladiagnosticos8.html"
}
function defconflinha() {
    window.location.href = "./teladefconflinha.html"
}
function defimpcontinua() {
    window.location.href = "./teladefimpcontinua.html"
}
function defimpccabecalho() {
    window.location.href = "./teladefimpcabecalho.html"
}
