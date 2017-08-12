const portfolio = document.querySelector('.fa-file-text');
const removable = document.querySelector('.removable');
const overlay = document.querySelector('.portfolio');
const title = document.querySelector('.main-title');
portfolio.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  setTimeout(() => {
    removable.style.display = "none";
  }, 300)
  overlay.style.height = "100%";
})

closeNav = () => {
  overlay.style.height = "0%";
  setTimeout(() => {
    removable.style.display = "block";
  }, 300)
}

$('.main-title').quickfit();
