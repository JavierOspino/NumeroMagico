const inf = 1;
const sup = 1000;
var intentos = 10;
var nMagico = Math.random() * (sup - inf) + inf;
nMagico = parseInt(nMagico);
var pistas = document.querySelector(".pistas");
const comp = document.querySelector(".comprobar");
var caja = document.querySelector(".cajaNumero");
var veces = document.getElementById("intentos");

function comprobar() {
  if (Number(caja.value) > 0 && Number(caja.value) < 1001) {
    var num = Number(caja.value);
    localStorage.setItem("Numero" + intentos, num);
    if (Number(localStorage.getItem("Numero" + intentos)) === nMagico) {
      pistas.textContent = "ACERTASTE!";
    } else if (num === 0) {
      pistas.textContent = "HASTA LUEGO!";
    } else if (num > nMagico) {
      intentos--;
      veces.innerHTML = "Tienes " + intentos + " intentos.";
      pistas.textContent = "El número mágico es menor.";
    } else if (num < nMagico) {
      intentos--;
      veces.innerHTML = "Tienes " + intentos + " intentos.";
      pistas.textContent = "El número mágico es mayor.";
    }
    if (intentos === 0) {
      pistas.textContent = veces.innerHTML = "HAS PERDIDO.";
      reset();
    }
    caja.value = "";
    caja.focus();
  } else {
    pistas.textContent = "Ingrese un número válido.";
  }
}

comp.addEventListener("click", comprobar);

function reset() {
  localStorage.clear();
  intentos = 10;
  veces.innerHTML = "Trata de adivinar el número, tienes 10 intentos.";
}
