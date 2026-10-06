const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));

// Cards de funções
const botoesDetalhes=document.querySelectorAll('.card-funcao .btn-detalhes');
botoesDetalhes.forEach(botao=>botao.addEventListener('click',()=>{const card=botao.closest('.card-funcao');const corpo=card.querySelector('.card-body');corpo.classList.toggle('escondido');botao.textContent=corpo.classList.contains('escondido')?'Ver detalhes':'Ocultar detalhes';}));

// Login simulado do portal
const btnLogin=document.querySelector('.btn-portal-login');
const portalAcesso=document.querySelector('#portal-acesso');
const portalLogin=document.querySelector('#portal-login');
const portalConteudo=document.querySelector('#portal-conteudo');
const btnEntrar=document.querySelector('.btn-entrar');
const btnSair=document.querySelector('.btn-sair');
const matricula=document.querySelector('#login-matricula');
const senha=document.querySelector('#login-senha');
const mensagemLogin=document.querySelector('.mensagem-login');

btnLogin.addEventListener('click',()=>{portalAcesso.classList.add('escondido');portalLogin.classList.remove('escondido');matricula.focus();});
btnEntrar.addEventListener('click',()=>{const m=matricula.value.trim();const s=senha.value.trim();if(m==='12345'&&s==='1234'){portalLogin.classList.add('escondido');portalConteudo.classList.remove('escondido');mensagemLogin.classList.add('escondido');}else{mensagemLogin.textContent='Matrícula ou senha incorreta.';mensagemLogin.classList.remove('escondido');mensagemLogin.classList.add('login-erro');}});
senha.addEventListener('keydown',e=>{if(e.key==='Enter')btnEntrar.click();});
btnSair.addEventListener('click',()=>{portalConteudo.classList.add('escondido');portalLogin.classList.add('escondido');portalAcesso.classList.remove('escondido');matricula.value='';senha.value='';});

// Botões do portal
const botoesPortal=document.querySelectorAll('.btn-portal');
botoesPortal.forEach(botao=>botao.addEventListener('click',()=>{const secao=botao.dataset.secao;const destino=document.querySelector('#'+secao);if(destino){destino.classList.remove('escondido');destino.scrollIntoView({behavior:'smooth'});}}));

// Minha Visão
const btnVisao=document.querySelector('.btn-visao');
const campoVisao=document.querySelector('.campo-visao');
const btnEnviarVisao=document.querySelector('.btn-enviar-visao');
const mensagemVisao=document.querySelector('.mensagem-visao');
btnVisao.addEventListener('click',()=>{campoVisao.classList.remove('escondido');btnEnviarVisao.classList.remove('escondido');btnVisao.classList.add('escondido');campoVisao.focus();});
btnEnviarVisao.addEventListener('click',()=>{const opiniao=campoVisao.value.trim();if(!opiniao){mensagemVisao.textContent='Digite sua opinião antes de enviar.';mensagemVisao.classList.remove('escondido');mensagemVisao.classList.add('login-erro');return;}mensagemVisao.textContent='Sua opinião foi registrada com sucesso.';mensagemVisao.classList.remove('escondido','login-erro');mensagemVisao.classList.add('login-sucesso');campoVisao.value='';campoVisao.classList.add('escondido');btnEnviarVisao.classList.add('escondido');btnVisao.classList.remove('escondido');setTimeout(()=>mensagemVisao.classList.add('escondido'),3000);});

// Minha Rotina
const itensRotina=document.querySelectorAll('.rotina-item');
const rotinaProgresso=document.querySelector('.rotina-progresso');
const quantidadeTarefas=document.querySelector('.rotina-quantidade-tarefa');
const rotinaPercentual=document.querySelector('.rotina-percentual');
const mensagemInicial='Você possui '+itensRotina.length+' tarefas para concluir!';
quantidadeTarefas.textContent=mensagemInicial;
itensRotina.forEach(item=>item.addEventListener('click',()=>{item.classList.toggle('concluida');atualizarRotina();}));
function atualizarRotina(){let concluidas=0;itensRotina.forEach(item=>{if(item.classList.contains('concluida'))concluidas++;});const percentual=(concluidas/itensRotina.length)*100;rotinaProgresso.textContent='Você concluiu '+concluidas+' tarefas de um total de '+itensRotina.length+' tarefas!';rotinaPercentual.textContent='Você concluiu '+percentual.toFixed(0)+'% da rotina.';quantidadeTarefas.classList.remove('tarefasConcluidas');if(concluidas===0){quantidadeTarefas.textContent=mensagemInicial;quantidadeTarefas.classList.remove('escondido');rotinaProgresso.classList.add('escondido');rotinaPercentual.classList.add('escondido');}else if(concluidas===itensRotina.length){quantidadeTarefas.textContent='Parabéns! Todas as tarefas foram concluídas!';quantidadeTarefas.classList.remove('escondido');quantidadeTarefas.classList.add('tarefasConcluidas');rotinaProgresso.classList.remove('escondido');rotinaPercentual.classList.remove('escondido');}else{quantidadeTarefas.classList.add('escondido');rotinaProgresso.classList.remove('escondido');rotinaPercentual.classList.remove('escondido');}}

// Checklist
const itensChecklist=document.querySelectorAll('.checklist-item');
const checklistProgresso=document.querySelector('.checklist-progresso');
itensChecklist.forEach(item=>item.addEventListener('click',()=>{item.classList.toggle('concluida');atualizarChecklist();}));
function atualizarChecklist(){let concluidos=0;itensChecklist.forEach(item=>{if(item.classList.contains('concluida'))concluidos++;});checklistProgresso.textContent=concluidos+' de '+itensChecklist.length+' itens concluídos';}
