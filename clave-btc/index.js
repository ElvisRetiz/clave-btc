const strBtn = document.getElementById('start-button');
const initMsg = document.getElementById('initial-message');
const reStrBtn = document.getElementById('restart');
const clueMsg = document.getElementById('clue');

const gameBoard1 = document.getElementById("game-1")

let gameInit = 0;
const gameAnswerOne = [1,14,6,15,7,4,11,2,5,13,10,9,8,3,12,16];

Sortable.create(gameBoard1,{
  animation: 150,
  chosenClass: "seleccionado",
  group: "mensaje-1",
  filter: ".disabled",
  onMove: function (evt) {
    return evt.related.className.indexOf('disabled') === -1;
  },
  store: {
    set: (sortable) => {
      const orden = sortable.toArray();
      if(orden.join(",") === gameAnswerOne.join(",")) {
        clueMsg.innerHTML = `¡Excelente!, ahora dile a tu jefatura cual es el mensaje.`
        console.log("orden: ",orden.join(","));
        console.log("respuesta: ", gameAnswerOne.join(","));
      }
    }
  }
})

function main () {
  gameInit = 1
  strBtn.style.display = "none"
  initMsg.style.display = "initial"
  reStrBtn.style.display = "initial"
  reStrBtn.addEventListener("click", () =>{
    location.reload();
  })
  setTimeout(() => {
    initMsg.style.display = 'none'
    clueMsg.style.display = "initial"
    gameBoard1.style.display = "grid"
  }, 1500);
};

strBtn.addEventListener("click", main);
window.addEventListener("keyup", (evt) => {
  if(evt.key === "Enter" && gameInit === 0) {
    main()
  }
})