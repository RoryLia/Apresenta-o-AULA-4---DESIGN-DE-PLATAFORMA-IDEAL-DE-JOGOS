document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchGames(query);
    });

    function searchGames(query) {
        fetch('../data/games.json')
            .then(response => response.json())
            .then(games => {
                const filteredGames = games.filter(game => 
                    game.title.toLowerCase().includes(query) || 
                    game.description.toLowerCase().includes(query)
                );
                displayResults(filteredGames);
            })
            .catch(error => console.error('Erro ao buscar jogos:', error));
    }

    function displayResults(games) {
        searchResults.innerHTML = '';
        if (games.length === 0) {
            searchResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
            return;
        }
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('item-jogo');
            gameItem.innerHTML = `
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <p>Avaliação: ${game.rating}</p>
                <img src="${game.imageUrl}" alt="${game.title}">
            `;
            searchResults.appendChild(gameItem);
        });
    }
});