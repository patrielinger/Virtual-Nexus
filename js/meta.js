document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".juego").forEach(fruta =>{

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
        })
    }
  })

  function mostrarCartel() {
    var cartel = document.getElementById("miCartel");
    cartel.style.display = "block"; 
  }
  function mostrarCartel2() {
    var cartel1 = document.getElementById("miCartel1");
    cartel1.style.display = "block"; 
  }
  function mostrarCartel3() {
    var cartel2 = document.getElementById("miCartel2");
    cartel2.style.display = "block"; 
  }
  function mostrarCartel4() {
    var cartel3 = document.getElementById("miCartel3");
    cartel3.style.display = "block"; 
  }
  function mostrarCartel5() {
    var cartel4 = document.getElementById("miCartel4");
    cartel4.style.display = "block"; 
  }
  function mostrarCartel6() {
    var cartel5 = document.getElementById("miCartel5");
    cartel5.style.display = "block"; 
  }


  // cerrar

      function ocultarCartel() {
      var carteles = document.getElementsByClassName("cartel");

      // Iterar a través de los elementos con la clase "miCartel"
      for (var i = 0; i < carteles.length; i++) {
        carteles[i].style.display = "none";
      }
    }
