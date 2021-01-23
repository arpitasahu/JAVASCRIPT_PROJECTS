let sign = 'X';
let turn = document.getElementById('play');

function printx(number){
  let container = document.getElementById('r'+number);
  console.log(container);

  if(container.innerHTML == ''){
  container.innerText = sign;
  winner();
  checkSign();
  turn.innerHTML = '<center>' + sign + " turn now! " +'</center>';

  }

}
function checkSign(){
  if(sign == 'X') sign = 'O';
  else (sign = 'X')
}
function  getbox (no){
  return document.getElementById('r'+no).innerHTML;
}

function checkMove(a,b,c,m){
  if(
  getbox(a)==m && getbox(b)==m && getbox(c)==m)
  return true;

  
  else  return false;
}

function winner(){
  if(checkMove (1,2,3, sign) || checkMove (4,5,6, sign) ||checkMove (7,8,9, sign) ||checkMove (1,5,9, sign) ||checkMove (3,5,7, sign) ||checkMove (1,4,7, sign) ||checkMove (3,6,9, sign)|| checkMove (2,5,8,sign) ||checkMove (7,5,3, sign)
  )
  {
    turn.innerHTML = '<center>' + sign + ' WON THE MATCH!'+ '</center>';
    for(let i =1; i<=9 ;i++){
       document.getElementById('r'+ i).innerHTML = ' ';
 
    }
    throw 'the game ends';

  }
  else{
    if(getbox(1)!= '' && getbox(2)!= '' && getbox(3)!= '' && getbox(4)!= ''  && getbox(5)!= ''  && getbox(6)!= ''  && getbox(7)!= ''  && getbox(8)!= '' && getbox(9)!= '') {
      turn.innerHTML = '<center> its a Tie </center>';
      throw 'its a tie';

    }

  }
}

