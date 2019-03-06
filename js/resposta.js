var respostaA = document.getElementById("respostaA");
var respostaB = document.getElementById("respostaB");
var respostaC = document.getElementById("respostaC");
var respostaD = document.getElementById("respostaD");

respostaA.onclick = selectOptionA;
respostaB.onclick = selectOptionB;
respostaC.onclick = selectOptionC;
respostaD.onclick = selectOptionD;

function selectOptionA() {
    respostaA.classList.add("active");
    respostaB.classList.remove("active");
    respostaC.classList.remove("active");
    respostaD.classList.remove("active");
}
function selectOptionB() {
    respostaB.classList.add("active");
    respostaA.classList.remove("active");
    respostaC.classList.remove("active");
    respostaD.classList.remove("active");
}
function selectOptionC() {
    respostaC.classList.add("active");
    respostaA.classList.remove("active");
    respostaB.classList.remove("active");
    respostaD.classList.remove("active");
}
function selectOptionD() {
    respostaD.classList.add("active");
    respostaA.classList.remove("active");
    respostaB.classList.remove("active");
    respostaC.classList.remove("active");
}

/*
No evento do click do botão para confirmar resposta {
    se o usuário tiver selecionado a resposta correta {
        abrir o modal de resposta correta;
        remover classe disabled do link da seta seguirPagina;
    } se não se o usuário tiver selecionado a resposta errada {
        abrir o modal de resposta errada;
        remover classe active da alternativa errada;
    } se não {
        abrir o modal "selecione uma opção"
    }
}
*/

function errou() {
    respostaA.classList.remove("active");
    respostaC.classList.remove("active");
    respostaD.classList.remove("active");
}

var respostaCorreta = respostaB.onclick;
var proxPagina = document.getElementById("seguirPagina");
var botao = document.getElementById("btn_confirmar");
botao.onclick = confirmar;

// A FUNCAO ABAIXO NAO ESTA FUNCIONANDO
function confirmar() {
    if (respostaCorreta) {
        proxPagina.classList.remove("disabled"); // remove disabled habilitando a seta que vai para prox tela
        document.body.innerHTML += '<div class="modal fade" id="modalResposta" tabindex="-1" role="dialog" aria-labelledby="modalRespostaFinal" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body resposta-certa"><p>Parabéns!<br>A resposta está correta!</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button></div></div></div></div>';
    } else if (respostaErrada){
        errou();
        document.body.innerHTML += '<div class="modal fade" id="modalResposta" tabindex="-1" role="dialog" aria-labelledby="modalRespostaFinal" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body resposta-errada"><p>Sua resposta está errada.<br>Tente novamente.</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button></div></div></div></div>';
    } else {
        document.body.innerHTML += '<div class="modal fade" id="modalResposta" tabindex="-1" role="dialog" aria-labelledby="modalRespostaFinal" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><p>Selecione uma opção.</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button></div></div></div></div>';
    }
}
