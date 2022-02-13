const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
document.getElementById('submit').addEventListener('click', machPin);

const buttonF = document.getElementsByClassName('calc-button-row');
function generatePin(){
     const pin = Math.round(Math.random() * 10000);
     const pinSt = pin + "";
     
     if(pinSt.length == 4){
          screen1.value = pin;
     }
     else{
         generatePin();
     }
}
let screenValue = "";
for (item of buttonF){
     item.addEventListener('click', (e) => {
          buttonText = e.target.innerText;
          
          if (buttonText == 'C') {
               screenValue = "";
               screen2.value = screenValue;
           }
           else {
               screenValue += buttonText;
               screen2.value = screenValue;
           }
          


     })
}
function machPin(){
     
     if (screen1.value == screen2.value){
          document.getElementById('alert-sucess').style.display="block";
          document.getElementById('alert-fail').style.display="none";
     }
     else{
          document.getElementById('alert-fail').style.display="block";
          document.getElementById('alert-sucess').style.display="none";
     }
}