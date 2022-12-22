const inputsalario = document.querySelector('#salario');
const inputinicio= document.querySelector('#inicio');
const inputdefin= document.querySelector('#fin');
const inpuTSUB= document.querySelector('#subsidio');
const btn = document.querySelector('#calcular');
const pcesantis= document.querySelector('#cesantias');
const pintereses = document.querySelector('#interes');
const pprima = document.querySelector('#prima');
const pprima2 = document.querySelector('#prima2')
const pvacaciones=document.querySelector('#vacaciones');
const paportes = document.querySelector('#aportesSP')
const ptotal=document.querySelector('#total')
const pdias=document.querySelector('#dias') 
const pmensaje=document.querySelector('#mensaje') 






btn.addEventListener('click', calcularPrecioConDescuento);


function calcularPrecioConDescuento(event){
  event.preventDefault();
//variables 
let salario= Number(inputsalario.value);
let subcidio=Number(inpuTSUB.value);
let inicio = new Date(inputinicio.value);
let  fin = new Date(inputdefin.value);

console.log({
  salario,subcidio,inicio,fin
}) 
 if(salario=="" ){
  document.querySelector('#salario').focus();

 } else if(salario!="" ){
  function calculardias(timeStart,timeEnd) {
    let actualDate = new Date();
  
      let diff = timeEnd.getTime() - timeStart.getTime();
     let diferencia= Math.round(diff / (1000 * 60 * 60 * 24));
 
  return   diferencia+1
  } 
  let  dias= calculardias(inicio,fin) 
  pdias.innerText=dias
  
  console.log(dias)
  
  // ciclo validador de llenado de spacios
  let salariofinal=salario+subcidio
  const cesantias= Math.round((salariofinal*dias) / 360);
  pcesantis.innerText = cesantias.toLocaleString();
 
 const intereses = Math.round((cesantias*0.12*dias) /360);
 pintereses.innerText = intereses.toLocaleString(); 

 let prima1
 let prima2
 if (dias <= 180) {
   prima1 = dias
   prima2 = 0
   console.log(prima1, prima2)



 } else if (dias > 180) {
   prima1 = 180
   prima2 = dias - 180


 }

 const primaprimer = Math.round((salariofinal * prima1) / 360);
 pprima.innerText = primaprimer.toLocaleString();
 const primasegundo = Math.round((salariofinal * prima2) / 360);
 pprima2.innerText = primasegundo.toLocaleString();


 const vacaciones= Math.round((salariofinal*dias) / 720);
 pvacaciones.innerText = vacaciones.toLocaleString(); 
  
 let aportestrabajador= (salario*8) / 100;
 paportes.innerText = aportestrabajador.toLocaleString();

 const totalprestaciones = cesantias + vacaciones + intereses + primaprimer + primasegundo;
 ptotal.innerText = totalprestaciones.toLocaleString();  

  
      
 }


}