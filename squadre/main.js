const squadre = [
  { nome: "inter", goal: 0, goalsubiti: 0 },
  { nome: "juve", goal: 0, goalsubiti: 0 },
  { nome: "milan", goal: 0, goalsubiti: 0 },
  { nome: "splice", goal: 0, goalsubiti: 0 },
];

function randomNumber(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

function replaced(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].goal = randomNumber(1, 100);
    1;
    array[i].goalsubiti = randomNumber(1, 100);
  }
  console.log(array);
}
replaced(squadre);

function remover(array) {
  for (let i = 0; i < array.length; i++) {
    delete array[i].goalsubiti;
  }
  console.log(array);
}
remover(squadre);
