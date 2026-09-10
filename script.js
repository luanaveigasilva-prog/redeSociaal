// Seleção dos elementos do DOM
const likeBtn = document.getElementById('likeBtn');
const likeCountSpan = document.getElementById('likeCount');
const othersCountStrong = document.getElementById('othersCount');

// Estado inicial dos contadores
let isLiked = false;
let totalLikes = 0;
let othersLikes = 0;

// Inicialização dos valores exibidos na tela
likeCountSpan.textContent = totalLikes;
othersCountStrong.textContent = `${othersLikes} others`;

// Evento de clique para o botão de curtida
likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;

    if (isLiked) {
        totalLikes++;
        othersLikes++;
        likeBtn.classList.add('liked');
    } else {
        totalLikes--;
        othersLikes--;
        likeBtn.classList.remove('liked');
    }

    // Atualização da interface
    likeCountSpan.textContent = totalLikes;
    othersCountStrong.textContent = `${othersLikes} others`;
});