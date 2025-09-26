// Função chamada quando o botão for clicado
function alerta() {
    // Criamos um texto que contém DOIS parágrafos HTML
    const texto = "<p>Primeiro parágrafo</p><p>Segundo parágrafo</p>";

    // Colocamos o conteúdo da variável "texto" dentro do parágrafo que tem id="aqui"
    document.getElementById("aqui").innerHTML = texto;
}

