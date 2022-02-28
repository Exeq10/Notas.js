/* variables */
document.addEventListener('DOMContentLoaded',()=>{

  cargarApp()

}) 
  
const boton = document.getElementById('boton')
function cargarApp(){
  mostrarNotas(Notas = JSON.parse(localStorage.getItem("Notas")))

}


let texto = document.querySelector("#texto");
let lista = document.querySelector('#lista')

let Notas = [];







function agregarNota() {
  const nota =texto.value;
   

 

  if (nota.length > 0) {


    
    Notas.push(new Nota(nota));
    Localstorage();
    mostrarNotas(Notas = JSON.parse(localStorage.getItem("Notas")));

    texto.value = '';



  }
  else{
      
  } 
}

function Localstorage() {
  const Nstring = JSON.stringify(Notas);

 Notas =  localStorage.setItem("Notas", Nstring);
}

 
function mostrarNotas() {
  
if (Notas == null) {

  Notas = [];
  
}

else{
  lista.innerHTML = '';
  
 for (elemento of Notas){


   lista.innerHTML += ` 
   <div class = "nota">
       <h3><span>Nota  ${elemento.id} :</span></h3> 
      <div class = "texto-nota"> <p> ${elemento.texto}</p> </div>
     
       <div>  <button class = "btn-red" onclick="EliminarNota(${elemento.id})">X</button></div>
        
   </div>`

  

   

  
  
} 
  
}
  

   
 
  
}



function EliminarNota(id) {

    notita= Notas.findIndex((nota) => nota.id === id);

   Notas.splice(notita,1);

  

   mostrarNotas()
   
  
  
   

   
   

    
}

