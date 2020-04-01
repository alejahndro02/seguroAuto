
//variables
const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;// 
const yearSelect = document.getElementById('anio');
const formulario = document.getElementById('cotizar-seguro')
//pinta los options dentro del contenedor con la clase anio
for(let i = maxYear; i >= minYear; i-- ){
    let option= document.createElement('option');
    option.value =i;
    option.innerHTML=i;
    yearSelect.appendChild(option);
}

//EventListeners
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    let marca =document.getElementById('marca');
    let marcaSelect= marca.options[marca.selectedIndex].value;
    //lee los datos del campo año 
    let anio=document.getElementById('anio')
    let anioSelect = anio.options[anio.selectedIndex].value;
    //lee el elemento select del formulario 
    let check=document.querySelector('input[name="tipo"]').value;
    //crear una instancia de Interfaz
    let interfaz= new Interfaz();
    if (marcaSelect==='' || anioSelect==='' || check===''){
        console.error('faltan datos');
    }else{
        console.log('todo correcto');
        
    }
    console.log(marcaSelect);
    console.log(anioSelect);
    console.log(check);
})

//Funciones
function Seguro (marca, anio, tipo){
    this.marca=marca;
    this.anio=anio;
    this.tipo=tipo;
}