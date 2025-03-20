document.addEventListener("DOMContentLoaded", function () {
  let grid = document.querySelector(".container");

  if (!grid) {
    console.error("No se encontró el elemento .container");
    return;
  }

  function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function createGrid(size = 16) {
    grid.innerHTML = ""; // Limpia el grid antes de agregar nuevos elementos
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      let divs = document.createElement("div");
      divs.classList.add("grid-item");

      // Evento para cambiar color al pasar el mouse
      divs.addEventListener("mouseover", function () {
        divs.style.backgroundColor = getRandomColor();
      });

      grid.appendChild(divs);
    }
  }

  createGrid();

  const boton = document.querySelector("button");

  boton.addEventListener("click", function () {
    let size = parseInt(
      prompt("¿Cuántos cuadros por lado quieres en la cuadrícula?")
    );
    if (!isNaN(size) && size > 0 && size <= 100) {
      createGrid(size);
    } else {
      alert("Por favor, ingresa un número válido entre 1 y 100.");
    }
  });

  const borrador = document.querySelector("#borrador");

  borrador.addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((div) => {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "white"; // Pinta de blanco al pasar el mouse
      });
    });
  });



  const rndColor = document.querySelector("#random");

  rndColor.addEventListener("click", function(){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((div) => {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = getRandomColor(); // Pinta de un color aleatorio al pasar el mouse
      });
    });

  }
)
});
