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
const rng = randomNumber(1, 100);
console.log(squadre);
