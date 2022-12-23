const inputsalariod = document.querySelector('#salario');
const inputiniciod= document.querySelector('#inicio');
const inputdefind= document.querySelector('#fin');
const inpuTSUBd= document.querySelector('#subsidio');
const btnd = document.querySelector('#Dias');
const pcesantisd= document.querySelector('#cesantias');
const pinteresesd= document.querySelector('#interes');
const pprimad= document.querySelector('#prima');
const pprima2d= document.querySelector('#prima2')
const pvacacionesd=document.querySelector('#vacaciones');
const paportesd= document.querySelector('#aportesSP')
const ptotald=document.querySelector('#total')
const pdiasd=document.querySelector('#dias') 
const pmensajed=document.querySelector('#mensaje') 








btnd.addEventListener('click', recargosdias);


function recargosdias(event){
  event.preventDefault();
//variables 
let salario= Number(inputsalariod.value);
let subcidio=Number(inpuTSUBd.value);
let inicio = new Date(inputiniciod.value);
let  fin = new Date(inputdefind.value);

console.log({
  salario,subcidio,inicio,fin
}) 
 if(salario=="" ){
  document.querySelector('#salario').focus();
  document.querySelector('#subsidio').focus();
 } else if(salario!="" ||subcidio!=""){
  function calculardias(timeStart,timeEnd) {
    let actualDate = new Date();
  
      let diff = timeEnd.getTime() - timeStart.getTime();
     let diferencia= Math.round(diff / (1000 * 60 * 60 * 24));
 
  return   diferencia+1
  }
  
  let  dias= calculardias(inicio,fin) 
  if(dias>7){
   alert('dias no pueden ser mayores a 6')
  } else if(dias<7){
 
  pdiasd.innerText=dias
  
  console.log(dias)
  
  // ciclo validador de llenado de spacios
  let salariofinal=salario+subcidio
  const cesantias= Math.round((salariofinal*dias) / 360);
  pcesantisd.innerText = cesantias;
  let prima1
  let prima2
  if (dias <= 6) {
    prima1 = dias
    prima2 = 0
    console.log(prima1, prima2)
  } 
 
 const intereses = Math.round((cesantias*0.12*dias) /360);
 pinteresesd.innerText = intereses; 


 const prima = Math.round((salariofinal*dias) / 360);
 pprimad.innerText= prima;
 const primasegundo = Math.round((salariofinal * prima2) / 360);
 pprima2d.innerText = primasegundo.toLocaleString();

 const vacaciones= Math.round((salariofinal*dias) / 720);
 pvacacionesd.innerText = vacaciones; 
 let aportestrabajador= (salario*8) / 100;
 paportes.innerText = aportestrabajador.toLocaleString();
  
 const totalprestaciones= cesantias+vacaciones+intereses+prima;
 ptotald.innerText= totalprestaciones;  
      
  }
 }

}