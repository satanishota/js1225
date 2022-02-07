
let textarea = document.querySelector('.textarea');
// console.log (textarea);
//<textarea class="textarea"></textarea>がとれる
let string_num = document.querySelector('.string_num');
//文字数表示させる場所
let textA = document.querySelector('.textA')
let textB = document.querySelector('.textB')

let textC = document.querySelector('.textC')
//入力した文字
let select_num = document.querySelector('#select_num')
let Sele_num = 0
//入力した数値
let Answer = document.querySelector('#answer')
let collect = document.querySelector('#collect')


select_num.addEventListener('keyup', Selnumber)
function Selnumber(){
  const Selnum = select_num.value
  
  //隠す文字数の取得
  function hankaku(str) {
    return str.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}
   Sele_num = hankaku (Selnum)
 console.log(Sele_num)
 onkeyup() 
}

// textarea.addEventListener('keyup', onkeyup)
function onkeyup() {
  const inputText = textarea.value;
  
  const textnum = inputText.length;
  string_num.innerText = textnum;
  // console.log (textnum)
  const indtext = Math.floor(Math.random() * textnum) - Sele_num
  console.log (indtext)
  let TextA = inputText.slice(0,indtext)
  // console.log (TextA)
  let TextB = inputText.substr(indtext, Sele_num);
  
  console.log (TextB)
  let Cin = Number(Sele_num) + indtext
  if (indtext < 0) {
  Cin = textnum }
  
  let TextC = inputText.slice(Cin, textnum)
  // console.log (TextC)
  textA.innerText = TextA ;
  textB.innerText = TextB ;
  Answer = TextB
  textC.innerText = TextC ;
}

const clickHandler = (e) => {
  if (collect.value === Answer){
    window.alert('〇　まる');
  } else{
    window.alert('X　バツ');
  }};
  Answer.addEventListener('click', (e) => {
    clickHandler(e)});

  textB.addEventListener('click', () =>{
    textB.classList.toggle('textB2') 
  });

  const element = document.querySelector('#myrange')
  element.addEventListener('input',handChange)
  function handChange(event) {
  const value2 = event.target.value
  document.querySelector('.log').innerHTML = value2 + "文字隠す";
};