
const cards = [];

  for (let num = 0; num < 13; num++) {
    for (let mark = 0; mark < 4; mark++) {
      const card = {
        num: num,   // 左のnumはプロパティ名、右のnumは変数名
        mark: mark  // 同上
      };
      cards.push(card);
    }
  }

const shufflecard = shuffleArray(cards);
console.dir(shufflecard);

function shuffleArray(sourceArr){
  const array = sourceArr.concat();
 const arrayLength = array.length;
 for (let i = arrayLength - 1; i >=0; i--){
   const randomIndex = Math.floor(Math.random() * (i + 1));
   [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
 }
 return array;
}