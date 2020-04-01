
//variables
const maxYear = new Date().getFullYear();
const minYear = maxYear - 20;// 
const yearSelect = document.getElementById('anio');
//pinta los options dentro del contenedor con la clase anio
for(let i = maxYear; i >= minYear; i-- ){
    let option= document.createElement('option');
    option.value =i;
    option.innerHTML=i;
    yearSelect.appendChild(option);
}