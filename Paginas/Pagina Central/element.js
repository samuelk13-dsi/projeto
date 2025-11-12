// Efeito de rolagem suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});
//parallax efeito
const items = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
  const alturaTela = window.innerHeight;

  items.forEach(item => {
    const topo = item.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {  // elemento quase visível
      item.classList.add('mostrar');
    }
  });
});
