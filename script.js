// Obten las referencias al parrafo y al botton

const color = document.getElementById("color");
const button = document.getElementById("button");

// Manejar el evento
button.addEventListener("click" , cambiarColor);

//Definir la funcion 
function cambiarColor() {
  //codugo que se ejecuta

  //Función anidada
  function colores() {
    const opciones = "0123456789ABCDEF"
    let colorHex = "#";

    // Recorrer el string opciones
    for (let i = 0 ; i < 6 ; i++ ) {
      let indiceAleatorio = Math.floor(Math.random() * 16) ;
      colorHex += opciones [indiceAleatorio] // #000000
      }

      return colorHex;
    }

  let colroAleatorio = colores();
  color.textContent = colroAleatorio;
  document.body.style.backgroundColor = colroAleatorio;
}

