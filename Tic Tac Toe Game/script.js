let sign = 'x';
let turn = document.getElementById('play');
function printx(number){
  let container = document.getElementById('r'+number);
  console.log(container);

  if(container.innerHTML == ''){
  container.innerText = sign;
  checkSign();
  turn.innerHTML = '<center>' + sign + " turn now " +'</center>';

  }

}
function checkSign(){
  if(sign == 'x') sign = 'O';
  else (sign = 'x')
}
