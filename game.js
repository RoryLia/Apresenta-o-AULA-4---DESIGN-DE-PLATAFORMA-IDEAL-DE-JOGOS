document.addEventListener('DOMContentLoaded', () => {
    const gameId = getGameIdFromUrl();
    fetchGameData(gameId);
});

function getGameIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function fetchGameData(gameId) {
    fetch('../data/games.json')
        .then(response => response.json())
        .then(data => {
            const game = data.find(g => g.id === gameId);
            if (game) {
                displayGameDetails(game);
            } else {
                console.error('Jogo não encontrado');
            }
        })
        .catch(error => console.error('Erro ao buscar dados do jogo:', error));
}

function displayGameDetails(game) {
    const gameTitle = document.getElementById('titulo-jogo');
    const gameDescription = document.getElementById('descricao-jogo');
    const gameRating = document.getElementById('avaliacao-jogo');
    const gameImage = document.getElementById('imagem-jogo');

    gameTitle.textContent = game.title;
    gameDescription.textContent = game.description;
    gameRating.textContent = `Avaliação: ${game.rating}`;
    gameImage.src = game.imageUrl;
}