document.addEventListener('DOMContentLoaded', function () {
  // Obtém id do jogo via URL (?id=...)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  fetch('games.json')
    .then(response => response.json())
    .then(games => {
      const game = games.find(g => g.id === id);
      const details = document.getElementById('game-details');
      if (!game) {
        details.innerHTML = "<p>Jogo não encontrado!</p>";
        document.getElementById('avaliar-link').style.display = "none";
      } else {
        details.innerHTML = `
          <h2>${game.titulo}</h2>
          <p>${game.descricao}</p>
          <p><b>Categoria:</b> ${game.categoria}</p>
        `;
      }
    });
});
