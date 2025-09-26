// Esta função é chamada quando o usuário clica no primeiro botão
function mostraBemVindo() {
  // document representa a página inteira
  // getElementById("aqui") procura o elemento cujo id é "aqui" no HTML
  // innerHTML troca o conteúdo dentro do elemento para o texto informado
  document.getElementById("aqui").innerHTML = "Seja bem-vindo";
}

// Esta função é chamada quando o usuário clica no segundo botão
function mostraAteLogo() {
  // Faz a mesma coisa que a função de cima, mas com outro texto
  document.getElementById("aqui").innerHTML = "Até logo";
}

