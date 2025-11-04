document.addEventListener('DOMContentLoaded', function () {
  fetch('games.json')
    .then(response => response.json())
    .then(games => {
      const list = document.getElementById('games-list');
      list.innerHTML = '';
      games.forEach(game => {
        const item = document.createElement('div');
        item.classList.add('game-item');
        item.innerHTML = `
          <h3>${game.titulo}</h3>
          <p>${game.descricao}</p>
          <a href="game.html?id=${game.id}">Detalhes</a>
        `;
        list.appendChild(item);
      });
    });
});
