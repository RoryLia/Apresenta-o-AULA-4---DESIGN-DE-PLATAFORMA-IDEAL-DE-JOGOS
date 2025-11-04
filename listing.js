document.addEventListener('DOMContentLoaded', () => {
    fetchGames();
});

function fetchGames() {
    fetch('../data/games.json')
        .then(response => response.json())
        .then(data => renderGames(data))
        .catch(error => console.error('Erro ao buscar jogos:', error));
}

function renderGames(games) {
    const gamesList = document.getElementById('lista-jogos');
    gamesList.innerHTML = '';

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('item-jogo');

        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="imagem-jogo">
            <h3 class="titulo-jogo">${game.title}</h3>
            <p class="descricao-jogo">${game.description}</p>
            <div class="avaliacao-jogo">${renderRating(game.rating)}</div>
            <a href="game.html?id=${game.id}" class="link-jogo">Ver Detalhes</a>
        `;

        gamesList.appendChild(gameItem);
    });
}

function renderRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}