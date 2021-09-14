let anuncio = document.querySelectorAll(".uEierd");
let time = setInterval(() => {
  if(anuncio) {
    clearInterval(time);
    anuncio.forEach((val) => {
      let spans = val.querySelectorAll("span");
      spans.forEach(span => {
        if(span.innerText === 'Anúncio·') {
          val.style.display = "none";
        }
      })
    });
  }
}, 1000)
