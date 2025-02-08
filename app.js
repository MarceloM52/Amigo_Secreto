//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome .");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Esse nome já está na lista.");
    return;
  }

  amigos.push(nomeAmigo);
  atualizarListaAmigos();
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Função para atualizar a lista exibida na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para fazer o sorteio.");
    return;
  }

  // Embaralhar os amigos
  let amigosEmbaralhados = [...amigos];
  do {
    amigosEmbaralhados.sort(() => Math.random() - 0.5);
  } while (amigos.some((amigo, index) => amigo === amigosEmbaralhados[index]));

  let resultado = "";
  amigos.forEach((amigo, index) => {
    resultado += `${amigo} tirou ${amigosEmbaralhados[index]}<br>`;
  });

  exibirResultado(resultado);
}

// Função para exibir o resultado
function exibirResultado(mensagem) {
  const resultadoContainer = document.getElementById("resultado");
  resultadoContainer.innerHTML = mensagem;
}
