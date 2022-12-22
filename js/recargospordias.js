const inputsalario = document.querySelector('#salario');
const inputinicio= document.querySelector('#inicio');
const inputdefin= document.querySelector('#fin');
const inpuTSUB= document.querySelector('#subsidio');
const btn = document.querySelector('#calcular');
const pcesantis= document.querySelector('#cesantias');
const pintereses = document.querySelector('#interes');
const pprima = document.querySelector('#prima');
const pvacaciones=document.querySelector('#vacaciones');
const ptotal=document.querySelector('#total')
const pdias=document.querySelector('#dias')






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
  document.querySelector('#subsidio').focus();
 } else if(salario!="" ||subcidio!=""){
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
  pcesantis.innerText = cesantias;
 
 const intereses = Math.round((cesantias*0.12*dias) /360);
 pintereses.innerText = intereses; 


 const prima = Math.round((salariofinal*dias) / 360);
 pprima.innerText= prima;


 const vacaciones= Math.round((salariofinal*dias) / 720);
 pvacaciones.innerText = vacaciones; 
  
 const totalprestaciones= cesantias+vacaciones+intereses+prima;
 ptotal.innerText= totalprestaciones;  
      
 }


}