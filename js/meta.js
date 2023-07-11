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



  
  function abrir() {
    var aside = document.getElementById("asideee");
    if (aside.style.display === "none") {
      aside.style.display = "inline-block";
    } else {
      aside.style.display = "none";
    }
  }
  function mostrarCartel111() {
    var cartel = document.getElementById("miCartel111");
    cartel.style.display = "block"; 
  }
  function mostrarCartel() {
    var cartel = document.getElementById("miCartel");
    cartel.style.display = "block"; 
  }
  function mostrarCartel10() {
    var cartel = document.getElementById("miCartel0");
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
  function mostrarCartel520() {
    var cartel5 = document.getElementById("miCartel520");
    cartel5.style.display = "block"; 
  }


//cerrar
      function ocultarCartel() {
      var carteles = document.getElementsByClassName("cartel");

      for (var i = 0; i < carteles.length; i++) {
        carteles[i].style.display = "none";
      }
    }
