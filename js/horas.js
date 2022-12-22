// variables generales

const inputsalario=document.querySelector('#salario')
const  btn = document.querySelector('#calcular'); 

//valores de inputs
const  inputhoradiurna=document.querySelector('#heo')
const  inputhoranocturna=document.querySelector('#hon')
const  inputhoraextraN=document.querySelector('#hen')
const  inputhoraDF=document.querySelector('#hodd')
const  inputhoradiuernaEDF=document.querySelector('#hodn')
const  inputhoranocturnaDF=document.querySelector('#hedd')
const  inputhoranocturnaEDF=document.querySelector('#hedn')
//variables p
const  phoradiurna=document.querySelector('#poe')
const  phoranocturna=document.querySelector('#pon')
const  phoraextraN=document.querySelector('#pen')
const  phoraDF=document.querySelector('#podd')
const  phorEadiurnaeDF=document.querySelector('#podn')
const  phoranocturnaEDF=document.querySelector('#pedd')
const   phoraEnocturnaEDF=document.querySelector('#pedn')

//valores totales
const   thoradiurna=document.querySelector('#toe')
const  thoranocturna=document.querySelector('#ton')
const  thoraextraN=document.querySelector('#ten')
const  thoradiurnaDF=document.querySelector('#todd')
const  thoranocturnaDF=document.querySelector('#tOdn')
const  thoranocturnaEDF=document.querySelector('#tedd')
const   thoraEnocturnaEDF=document.querySelector('#tedn')  
const  thorastotales=document.querySelector('#total')  



//eventos igual
 
btn.addEventListener('click', totalrecargos) ;



  function totalrecargos(event){
    event.preventDefault();
    if(salario==""){
      document.querySelector('#salario').focus();
     } else if(salario!="" ||subcidio!=""){
  
  let salario=Number(inputsalario.value);
  let horaD=Number(inputhoradiurna.value);

  let horaN=Number(inputhoranocturna.value);
  let horaEN=Number(inputhoraextraN.value);

  let horaDF=Number( inputhoraDF.value);

  let horaDDF=Number(inputhoradiuernaEDF.value);
  let horaNDF=Number(inputhoranocturnaDF.value);

  let horaENDF=Number(inputhoranocturnaEDF.value);


   // operaciones de recargos promedio

  let horapromedio= (salario/30) /8;

  let RecargoD=Math.round(horapromedio*1.25);
  phoradiurna.innerText= RecargoD;
  
   let aumentosHD=RecargoD*horaD;
   thoradiurna.innerText=aumentosHD;

   let RecargoN=Math.round(horapromedio*1.35);
  phoranocturna.innerText= RecargoN;
  
   let aumentosHN=RecargoD*horaN;
   thoranocturna.innerText=aumentosHN;




   let RecargoEN=Math.round(horapromedio*1.75);
   phoraextraN.innerText= RecargoEN;
   
    let aumentosHEN=RecargoD*horaEN;
    thoraextraN.innerText=aumentosHEN;


    let RecargoDF=Math.round(horapromedio*1.75);
    phoraDF.innerText= RecargoDF;
     let aumentosHDF=RecargoD*horaDF;
     thoradiurnaDF.innerText=aumentosHDF;

    let RecargoNDF=Math.round(horapromedio*2.10);
    phorEadiurnaeDF.innerText= RecargoNDF;
     let aumentosHNDF=RecargoD*horaDDF;
     thoranocturnaDF.innerText=aumentosHNDF;
     
    
     let RecargoENDF=Math.round(horapromedio*2.00);
     phoranocturnaEDF.innerText= RecargoENDF;
     let aumentosEHNDF=RecargoD*horaNDF;
     thoranocturnaEDF.innerText=aumentosEHNDF;

     let RecargoHEDF=Math.round(horapromedio*2.50);
     phoraEnocturnaEDF.innerText= RecargoHEDF;
     let aumentosHEDF=RecargoD*horaENDF;
     thoraEnocturnaEDF.innerText=aumentosHEDF;
     
  
     let total= aumentosEHNDF+aumentosHD+aumentosHDF+aumentosHEDF+aumentosHEN+aumentosHN+aumentosHNDF;
     thorastotales.innerHTML=total;
  }
}







 