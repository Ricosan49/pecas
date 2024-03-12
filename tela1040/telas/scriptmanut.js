function telaopservsist() {
    window.location.href = "./manutopsevsist.html"
}
let txt = document.getElementById('txtop')
let txtseq = document.getElementById('txtseq')
let btnon = document.getElementById('btnon')
function btnopsist() {
    txt.innerText = "Purga do sistema de limpeza"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function btnpurgprodsit() {
    txt.innerText = "Purga de produção de limpeza"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function btnpurgumb() {
    txt.innerText = "Purga umbilical"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function btnesvaziar() {
    txt.innerText = "Esvaziar sistema de tinta"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function btncarregartint() {
    txt.innerText = "Carregar tinta no sistema"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function btndescalhaon() {
    txt.innerText = "Fech p/falha da calha"
    btnon.style.background = "#0bca56"
    btnon.value = 'DESLIG'
}
function btndescalhaoff() {
    if (btnon.value == "DESLIG" && txt.innerText == "Fech p/falha da calha") {
        txt.innerText = "Abre p/falha da calha"
        btnon.style.background = "red"
        btnon.value = 'LIGUE'
    }else if (btnon.value == "LIGUE" && txt.innerText == "Abre p/falha da calha") {
        txt.innerText = "Fech p/falha da calha"
        btnon.style.background = "#0bca56"
        btnon.value = 'DESLIG'
    }
}
function btncalibvisc() {
    txt.innerText = "Calibração da viscosidade"
    btnon.style.background = "#d3d3d3"
    btnon.value = 'Iniciar'
}
function telaparamcab() {
    window.location.href = "./manutparamcab.html"
}
function btnmodulacao() {
    txt.innerText = "Ajustar modulação"
    btnon.style.background = "#ffffff"
    btnon.value = '0'
    
}
function btnvlacarga() {
    txt.innerText = "Ajustar valor de carga"
    btnon.style.background = "#ffffff"
    btnon.value = '190'
}
function btnvlaphase() {
    txt.innerText = "Ajustar valor de phase"
    btnon.style.background = "#ffffff"
    btnon.value = '10'
}
function btnphasemanu() {
    txt.innerText = "Ajustar phase manual"
    btnon.style.background = "#ffffff"
    btnon.value = '0'
}
function btnatvphasemanu() {
    txt.innerText = "Dasativar phase manual"
    btnon.style.background = "#0bca56"
    btnon.value = 'ON'
}
function btndesphaseff() {
    if (btnon.value == "ON" && txt.innerText == "Dasativar phase manual") {
        txt.innerText = "Ativar phase manual"
        btnon.style.background = "red"
        btnon.value = "OFF"
    }else if(btnon.value == "ON" && txt.innerText == "Auto modulação"){
        txt.innerText = "Auto modulação"
        btnon.style.background = "red"
        btnon.value = "OFF"
    }else if(btnon.value == "OFF" && txt.innerText == "Ativar phase manual"){
        txt.innerText = "Dasativar phase manual"
        btnon.style.background = "#0bca56"
        btnon.value = "ON"
    }else if(btnon.value == "OFF" && txt.innerText == "Auto modulação"){
        txt.innerText = "Auto modulação"
        btnon.style.background = "red"
        btnon.value = "ON"
    }

}
function btnautomodulacao() {
    txt.innerText = "Auto modulação"
    btnon.style.background = "#0bca56"
    btnon.value = "ON"
}

function btnmoduloimp() {
    txt.innerText = "Tipo modulo impressor"
    btnon.style.background = "#ffffff"
    btnon.value = '60 Micron'
}
function btnquebragota() {
    txt.innerText = "Frequencia das gotas"
    btnon.style.background = "#ffffff"
    btnon.value = '83.06'
}
function btnofsetcarga() {
    txt.innerText = "Offset de carga"
    btnon.style.background = "#ffffff"
    btnon.value = '0'
}
function btnvalorincli() {
    txt.innerText = "Valor de inclição"
    btnon.style.background = "#ffffff"
    btnon.value = '2'
}
function btnfunceng() {
    window.location.href = "./manutfunceng.html"
}
function btnfuncengfase() {
    if (btnon.value == "ON" && txt.innerText == "Ativar Teste de Fase") {
        txt.innerText = "Desativar Teste de Fase"
        txtseq.innerText = ""
        txtseq.style.overflowY = ""
        btnon.style.background = "red"
        btnon.value = "OFF"
    }else if(btnon.value == "OFF" && txt.innerText == "Desativar Teste de Fase"){
        txt.innerText = "Ativar Teste de Fase"
        txtseq.innerText = ""
        txtseq.style.overflowY = ""
        btnon.style.background = "#0bca56"
        btnon.value = "ON"
    }

}
function btnvalorincli() {
    txt.innerText = "Valor de inclição"
    btnon.style.background = "#ffffff"
    btnon.value = '2'
}
function btndefinirap() {
    txt.innerText = "Definir Seq. Inicio Rápido de Jato"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btntesfase() {
    txt.innerText = "Ativar Teste de Fase"
    txtseq.style.height = "120px"
    txtseq.style.backgroundColor = "#3f6d9a"
    txtseq.innerText = ""
    txtseq.style.overflowY = ""
    btnon.style.background = "#0bca56"
    btnon.value = 'ON'
}
function btndefparadrap() {
    txt.innerText = "Definir Seq. Parada Rápida de Jato"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btndeflimp() {
    txt.innerText = "Definir Seq. Limpeza do Jato"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btndeflimpcalha() {
    txt.innerText = "Definir Seq. Limpeza da Calha"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btndefinilimpjato() {
    txt.innerText = "Definir Seq. Inicio limpo do Jato"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btndefpurg() {
    txt.innerText = "Definir Seq. Purga Umbilical"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btndefparadlimpjato() {
    txt.innerText = "Definir Seq. Parada limpa do Jato"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btneditseq() {
    txt.innerText = "Editar Memória Transitoria"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Salvar Sequência'
}
function btnexeseq() {
    txt.innerText = "Executar Memória Transitória"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Executar Sequência'
}
function btnapagseq() {
    txt.innerText = "Apagar Memória Transitória"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Apagar Sequência'
}
function btnapagconfg() {
    txt.innerText = "Apagar Configurações"
    txtseq.style.backgroundColor = "whitesmoke"
    txtseq.style.height = "120px"
    txtseq.style.overflowY = "scroll"
    txtseq.style.fontSize = "15px"
    txtseq.style.color = "black"
    txtseq.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore pariatur magni sed saepe rerum optio architecto, asperiores eveniet commodi tenetur inventore amet reiciendis ducimus placeat totam veniam! Nihil, enim."
    btnon.style.background = "#d3d3d3"
    btnon.type = 'button'
    btnon.value = 'Apagar configuração'
}
let btncalib = document.getElementById('btncalib')
let txteht0 = document.getElementById('txtEHT0')
let txteht1 = document.getElementById('txtEHT1')
function btncalibEHT() {
    window.location.href = "./manutfalhaeht.html"

}