const input = document.getElementById('cardCount');
const container = document.getElementById('container');

function renderCards() {
  const count = parseInt(input.value) || 0;
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    container.appendChild(card);
  }
}

input.addEventListener('input', renderCards);

renderCards();