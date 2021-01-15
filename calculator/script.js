let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue = '';

for(item of buttons){
  item.addEventListener('click',(e)=>{
    inputText = e.target.innerText;
    console.log('inner text clicked is' , inputText);
 

    if(inputText == 'X'){
      inputText = '*';
      screenValue += inputText;
      screen.value = screenValue;
    }


    else if
      (inputText == 'C') {
        screenValue  = '';
        screen.value = screenValue;

    }
    else if
      (inputText == '=') {
        screen.value = eval(screenValue)

    }
    else{
      screenValue += inputText;
      screen.value = screenValue;

    }


  });
}