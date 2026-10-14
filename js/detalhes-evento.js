// 1. Pega o ID da URL (ex: ?id=1 vira o número 1)
const parametrosURL = new URLSearchParams(window.location.search);
const eventoId = parseInt(parametrosURL.get("id"));

// 2. Busca os dados no arquivo JSON
fetch("data/eventos.json")
  .then((resposta) => resposta.json())
  .then((eventos) => {
    // Encontra o evento específico que tem o mesmo ID
    const eventoEncontrado = eventos.find((evento) => evento.id === eventoId);

    if (eventoEncontrado) {
      // 3. Preenche os elementos da página com os dados do JSON
      document.getElementById("titulo-detalhe").textContent =
        eventoEncontrado.titulo;
      document.getElementById("data-local-detalhe").textContent =
        `${eventoEncontrado.data} — ${eventoEncontrado.local}`;
      document.getElementById("img-detalhe").src = eventoEncontrado.imagem;

      // Aqui entra o texto completo que não estava no card da página anterior!
      // Em vez de textContent, use innerHTML para renderizar as tags <p>
      document.getElementById("texto-detalhe").innerHTML =
        eventoEncontrado.texto;
    } else {
      // Caso o ID não exista no JSON
      document.getElementById("detalhe-container").innerHTML =
        "<p>Evento não encontrado.</p>";
    }
  });
