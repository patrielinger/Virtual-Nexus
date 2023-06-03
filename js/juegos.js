function modificarParte() {
    let nuevoTexto = document.getElementById("nuevo-texto").value;
  
    let parteModificar = document.getElementById("parte-modificar");

    parteModificar.innerHTML = nuevoTexto;
  }
  
  function modificarParte1() {
    let nuevoTexto = document.getElementById("nuevo-texto1").value;
  
    let parteModificar = document.getElementById("parte-modificar1");
  
    parteModificar.innerHTML = nuevoTexto;
  }
  
  function modificarParte2() {
    let nuevoTexto = document.getElementById("nuevo-texto2").value;
  
    let parteModificar = document.getElementById("parte-modificar2");
  
    parteModificar.innerHTML = nuevoTexto;
  }

  function modificarParte3() {
    let nuevoTexto = document.getElementById("nuevo-texto3").value;
  
    let parteModificar = document.getElementById("parte-modificar3");
  
    parteModificar.innerHTML = nuevoTexto;
  }

  function modificarParte4() {
    let nuevoTexto = document.getElementById("nuevo-texto4").value;
  
    let parteModificar = document.getElementById("parte-modificar4");
  
    parteModificar.innerHTML = nuevoTexto;
  }
  
  const sourceButton = document.getElementById('sourceButton');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', function() {
  const textToCopy = sourceButton.innerText;
  
  // Crear un elemento de textarea temporal para copiar el texto
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = textToCopy;
  
  // Añadir el elemento textarea al DOM
  document.body.appendChild(tempTextArea);
  
  // Seleccionar y copiar el texto
  tempTextArea.select();
  document.execCommand('copy');
  
  // Remover el elemento textarea temporal
  document.body.removeChild(tempTextArea);
  
  // Cambiar el texto del botón copiado
  copyButton.innerText = '¡Copiado!';
});
