// const question = '最強の十天衆';
// const answers = [
//     'son',
//     'katoru',
//     'sisu',
//     'siete'
//   ];
// const collect = 'sisu';

const quiz = [
  {
    question: "ゲームうれた",
    answers: [
      'すぱ',
      'ぷれ',
      'にん',
      'DS',
    ],
    collect:'DS'
  }, {
    question: "任天堂",
    answers: [
      'maza-',
      'マリオ',
      '鈍器',
      'カービィ',
    ],
    collect: 'マリオ'
  }, { 
    question: "FF",
  answers: [
    'ぷれ',
    'くら',
    'あー',
    'せし',
  ],
  collect: 'くら'
}];

const quizLength = quiz.length;
let quizIndex  = 0;
let score = 0


const $button = document.getElementsByTagName('button')
buttonLength = $button.length;
// $button[0].textContent = answers [0];
// $button[1].textContent = answers [1];
// $button[2].textContent = answers [2];
// $button[3].textContent = answers [3];
const setupQuiz = () =>{
  
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers [buttonIndex];
      buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].collect === e.target.textContent){
    window.alert('seikai');
    score++;
  } else{
    window.alert('batu');
}

quizIndex++;
//次の問題へすすめる

console.log(quizIndex)
if(quizIndex < quizLength){
 setupQuiz();
}else{
  window.alert('syuuryou' + score + '/' + quizLength );
}
};
//eはevent
$button[0].addEventListener('click', (e) => {
  clickHandler(e);
//   if (collect === $button[0].textContent)
//   window.alert('seikai');
//   else
//   window.alert('batu');
});

$button[1].addEventListener('click', (e) => {
  clickHandler(e);
//   if (collect === $button[1].textContent)
//   window.alert('seikai');
//   else
//   window.alert('batu');
});

$button[2].addEventListener('click', (e) => {
  clickHandler(e);
//   if (collect === $button[2].textContent)
//   window.alert('seikai');
//   else
//   window.alert('batu');
});

$button[3].addEventListener('click', (e) => {
  clickHandler(e);
//   if (collect === $button[3].textContent)
//   window.alert('seikai');
//   else
//   window.alert('batu');
});