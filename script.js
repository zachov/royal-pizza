const toast = document.getElementById('toast');

const showToast = (message = 'Action enregistree') => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('visible');
  }, 1800);
};

document.querySelectorAll('.mini-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const productName = event.currentTarget.getAttribute('data-product');
    if (productName) {
      showToast(`${productName} selectionnee`);
    }
  });
});

const menuLinks = document.querySelectorAll('.menu-categories a');
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
