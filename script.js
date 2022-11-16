function edit() { alert("Dados Alterados!");}
function exc() { alert("Deseja Realmente excluir a conta?"); }

var senhaRecebida;

function exibeDisciplinas(){
    document.getElementById('disciplinas').style.visibility='visible';
    document.querySelector('.h3-float').style.visibility = 'hidden';
    window.location.href = '#disciplinas';
}

function erro_form() {
    let el = document.getElementById('floatingPassword');
    el.classList.add('is-invalid');    
}

function erro_confirm() {
    let el2 = document.getElementById('floatingPassword2');
    el2.classList.add('is-invalid');
}

function form_ok() {
    let el = document.getElementById('floatingPassword');    
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
    
}

function confirm_ok(){
    let el2 = document.getElementById('floatingPassword2');
    el2.classList.remove('is-invalid');
    el2.classList.add('is-valid');
}

function confirmaLogin(login) {
    novoLogin = login.value;
    let el = document.getElementById('floatingInput');
    if (novoLogin.length >= 8){        
        el.classList.remove('is-invalid');
        el.classList.add('is-valid'); 
        document.getElementById('alt-login').disabled = false;              
    }
    else 
        el.classList.add('is-invalid');
}

function senha(senha) {
    senhaRecebida = senha.value;
    if (senhaRecebida.length < 8) {
        document.getElementById('erro_senha').style.visibility = 'visible';
        erro_form();
        erro_confirm();
    }
    else {
        document.getElementById('erro_senha').style.visibility = 'hidden';
        form_ok();
        document.getElementById('btn-save').disabled = false;
    }
    return senhaRecebida;
}


function confirmasenha(senha2) {
    var confirmacao = senha2.value;
    if ((senhaRecebida == confirmacao) && (senhaRecebida.length >= 8) && (confirmacao.length >= 8)) {
        form_ok();
        confirm_ok();
        document.getElementById('erro_senha').style.visibility = 'hidden';
        document.getElementById('btn-save2').disabled = false;
    }
    else {
        erro_form();
        erro_confirm();
        document.getElementById('erro_conf').style.visibility = 'visible';
    }
}



function confirmTerms(x) {
    var button = document.getElementById('btn-create');
    x.disabled = true;
    button.disabled = false;     
}

function isOk(el){
    if (el.value == ''){
        el.classList.remove('is-valid');
        el.classList.add('is-invalid');
        disable();
    }
    else {
        el.classList.remove('is-invalid');
        el.classList.add('is-valid');
        enable();
    }
}

function encerrar(){
    document.getElementById('btn-encerrar').disabled = true;
    document.getElementById('encerrada').innerHTML = 'Questão Encerrada';
    document.getElementById('encerrou').style.display = 'inline';
}

function enable() {
    let button = document.getElementById('btn-post');
    button.classList.remove('disabled'); 
}

function disable() {
    let button = document.getElementById('btn-post');
    button.classList.add('disabled');    
}

var ativado=0;

function show() {
    var el = document.querySelector('.res-3');
    var elClass = el.classList;
    var elP = document.querySelector('.p-toggle-class');
    if (ativado==0){
        elP.innerHTML = 'Ocultar';
        ativado = 1;
    }
    else {
        elP.innerHTML = 'Exibir resposta oculta';
        ativado =0;
    }
    elClass.toggle("oculta");  
}

function deletar(){
    let el = document.querySelector('.res-3');
    let elDel = document.querySelector('.deleted');
    let elClass = el.classList;
    let DelClass = elDel.classList;
    let elP = document.querySelector('.p-toggle-class');
    if (elP.value==1){
        elP.innerHTML = 'Ocultar Resposta';
        elP.value = 0;
    }
    else {
        elP.innerHTML = 'Exibir resposta oculta';
        elP.value = 1;
    }
    elClass.toggle("oculta"); 
    DelClass.toggle("oculta");
}

function enviar() {
    let el = document.querySelector('.res-0');
    let resp = document.getElementById('suaResposta');
    el.classList.remove('oculta'); 
    document.getElementById('write').innerHTML = resp.value;   
    window.location.href = '#new';
    resp.classList.remove('is-valid');
    resp.value = '';
    disable(); 
}

function escreveNome(x) {
    var el = x.innerHTML;
    document.querySelector('#write').innerHTML = el;    
}

function escreveVazio() {
    document.querySelector('#write').innerHTML = '';     
}

var bloq = 0;
function block(){
    var pWrite = document.querySelector('.write');
    if (bloq==0){
        pWrite.innerHTML = 'Desbloquear Aluno';
        alert('Aluno Bloqueado');
        bloq = 1;
    } else {
        pWrite.innerHTML = 'Bloquear Aluno';
        alert('Aluno Desbloqueado');
        bloq = 0;
    }

}