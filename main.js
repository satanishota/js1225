let itimai = document.querySelector('.mai1')
let nimai = document.querySelector('.mai2')
let sanmai = document.querySelector('.mai3')
let yonmai = document.querySelector('.mai4')
let gomai = document.querySelector('.mai5')
let rokumai = document.querySelector('.mai6')






const cards = [];

  for (let num = 1; num < 14; num++) {
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

itimai.innerHTML = shufflecard[1].num;
nimai.innerHTML = shufflecard[2].num;
sanmai.innerHTML = shufflecard[3].num;
yonmai.innerHTML = shufflecard[4].num;

itimai = shufflecard[1].num;
nimai = shufflecard[2].num;
sanmai = shufflecard[3].num;
yonmai = shufflecard[4].num;
gomai = shufflecard[5].num;
rokumai = shufflecard[6].num;


if(shufflecard[1].num>=10){
itimai = 0
}
if(shufflecard[2].num>=10){
nimai = 0
}
if(shufflecard[3].num>=10){
sanmai = 0
}
if(shufflecard[4].num>=10){
yonmai = 0
}
if(shufflecard[5].num>=10){
gomai = 0
}
if(shufflecard[6].num>=10){
rokumai = 0
}

let player = itimai + nimai
const p10 = () => {
if(player >= 10){
  player = player - 10
}
}

let banker = sanmai + yonmai
const b10 = () => {
if(banker >= 10){
  banker = banker - 10
}
}
p10()
b10()
console.log(player)
console.log(banker)
console.log(gomai + "player")
console.log(rokumai + "banker")

const katimake = () => {
  p10()
  b10()
  if(player < banker){
    console.log("b")}
    else if(player == banker){
    console.log("e")}
    else{
    console.log("p")}
}
if ( player == 9 && banker == 9){
  console.log("e")
}//1
if ( player == 9 && banker <= 8){
  console.log("p")
}//9
if ( player == 8 && banker == 8){
  console.log("e")
}//1
if ( player == 8 && banker == 9 ){
  console.log("b")
}//1
if ( player == 8 && banker <= 7 ){
  console.log("p")
}//8
if ( player == 7 && banker == 7){
  console.log("e")
}//1
if ( player == 7 && 8 <= banker && banker <= 9){
  console.log("b")
}//2
if ( player == 7 && banker <= 6){
  banker = banker + rokumai
  katimake()
}//7

if ( player == 6 && banker == 6){
  console.log("e")
}//1
if ( player == 6 && 7 <= banker && banker <= 9){
  console.log("e")
}//3
if ( player == 6 && banker <= 5){
  banker = banker + rokumai
  katimake()
}//6

if ( 0 <= player && player <= 5 && 8 <= banker && banker <= 9){
  console.log("b")
}//2
if ( 0 <= player && player <= 5 && banker == 7){
  player = player + gomai
  katimake()
}//1
if ( 0 <= player && player <= 5 && banker == 6 && 8 <= gomai && gomai <= 9){
  console.log("s")
}//1.2
if ( 0 <= player && player <= 5 && banker == 6 && 6 <= gomai && gomai <= 7){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.2
if ( 0 <= player && player <= 5 && banker == 6 &&  gomai <= 5){
  player = player + gomai
  katimake()
}//1.6
if ( 0 <= player && player <= 5 && banker == 5 && 8 <= gomai && gomai <= 9){
  player = player + gomai
  katimake()
}//1.2
if ( 0 <= player && player <= 5 && banker == 5 && 4 <= gomai && gomai <= 7){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.4
if ( 0 <= player && player <= 5 && banker == 5 &&  gomai <= 3){
  player = player + gomai
  katimake()
}//1.4
if ( 0 <= player && player <= 5 && banker == 4 && 8 <= gomai && gomai <= 9){
  player = player + gomai
  katimake()
}//1.4
if ( 0 <= player && player <= 5 && banker == 4 && 2 <= gomai && gomai <= 7){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.6
if ( 0 <= player && player <= 5 && banker == 4 &&  gomai <= 1){
  player = player + gomai
  katimake()
}//1.2
if ( 0 <= player && player <= 5 && banker == 3 &&  gomai == 9){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.1
if ( 0 <= player && player <= 5 && banker == 3 &&  gomai == 8){
  player = player + gomai
  katimake()
}//1.1
if ( 0 <= player && player <= 5 && banker == 3 &&  gomai <= 7){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.8
if (  0 <= player && player <= 5 && banker <= 2){
  player = player + gomai
  banker = banker + rokumai
  katimake()
}//1.2

const ura1 = document.querySelector(".mai1")
const ura2 = document.querySelector(".mai2")
const ura3 = document.querySelector(".mai3")
const ura4 = document.querySelector(".mai4")

const ura0 = (arg) =>{
  arg.addEventListener('click',() => {
    arg.classList.add("aka");
  });
} 
ura0(ura1)
ura0(ura2)
ura0(ura3)
ura0(ura4)

const start1 = document.querySelector("#start1")
const start2 = document.querySelector("#start2")
const local = document.querySelector(".local")
const start = () =>{
setTimeout(() => {
   ura1.dispatchEvent(new Event('click'));
},1000);
setTimeout(() => {
   ura2.dispatchEvent(new Event('click'));
},2000);
setTimeout(() => {
   ura3.dispatchEvent(new Event('click'));
},3000);
setTimeout(() => {
   ura4.dispatchEvent(new Event('click'));
},4000);
}


start1.addEventListener('click',() => {
  start()
});
start2.addEventListener('click',() => {
  setTimeout(() => {
    const gomaime = document.querySelector('.mai5')
    gomaime.innerHTML = gomai
    console.log(gomaime)
    local.appendChild(gomaime)
  }, 1000);
});