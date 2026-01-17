const bici = [
  { nome: "monociclo", peso: 150 },
  { nome: "triciclo", peso: 200 },
  { nome: "mountainBIKE", peso: 300 },
  { nome: "bmwX", peso: 320 },
];
const pesoBici = [];
for (let i = 0; i < bici.length; i++) {
  const index = bici[i].peso;
  pesoBici.push(index);
}
console.log(pesoBici);

function findingSmallNum(array) {
  let primoNum = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < primoNum) {
      primoNum = array[i];
    }
  }
  return primoNum;
}
const minNum = findingSmallNum(pesoBici);
console.log(minNum);
