document.getElementById('cta')?.addEventListener('click', () => {
  alert('Біздің командамен танысыңыз: Мухаммеджан • Айкен • Аружан 🚀');
});

document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Хабарлама жіберілді — рахмет!');
  this.reset();
});