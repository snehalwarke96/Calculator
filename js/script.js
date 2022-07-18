let string = '';
let pressDetect = document.querySelectorAll('.press');
console.log(pressDetect);
Array.from(pressDetect).forEach((butn) => {
    butn.addEventListener('click', (btnPress) => {
      console.log(btnPress.target);  
      if(btnPress.target.innerHTML== '=')
      {
        string=eval(string);
      }
      else if(btnPress.target.innerHTML== 'C')
      {
        string=" ";
      }
      else{
        string= string+btnPress.target.innerHTML;
      }
      
      document.querySelector('input').value= string;
    } )

})