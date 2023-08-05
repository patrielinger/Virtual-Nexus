// Buscador
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".juego.active").forEach(fruta =>{

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
        })
    }
  })
// Función para cargar las imágenes cuando estén en el viewport
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  });
}
lazyLoadImages();
window.addEventListener('scroll', lazyLoadImages);