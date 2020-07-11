
const cursos = [
    {nom: 'Introduccion a la Programacion', enlace: 'Intro_Prog.html'},
    {nom: 'Calculo I', enlace: 'calculo1.html'},
    {nom: 'Algebra I', enlace: 'algebra1.html'},
    {nom: 'Ingles I', enlace: 'ingles.html'},
    {nom: 'Metodologia de la Investigacion', enlace: 'metodologia.html'},
    {nom: 'Fisica General', enlace: 'fisica_Gral.html'}
]

const cajaBusqueda   = document.querySelector('#input-buscar');
const boton          = document.querySelector('.icon');
const resultadoCurso = document.querySelector('.caja-busqueda');

const filtrar = () =>{
    resultadoCurso.innerHTML = '';
    const texto = cajaBusqueda.value.toLowerCase();

    for(let curso of cursos){
        let nomCurso = curso.nom.toLowerCase();
        if(nomCurso.indexOf(texto) !== -1 ){
            resultadoCurso.innerHTML += `
            <li><a href="../cursos/${curso.enlace}"><i class="fas fa-search"></i> ${curso.nom} </a></li>
            `
        }
    }
    if(resultadoCurso.innerHTML === ''){
        resultadoCurso.innerHTML += `
            <li><a href="#"><i class="fas fa-search"></i>Materia no encontrada...</a></li>
            `
    }

}

const closer = document.querySelector('.close-search');
const input_text = document.querySelector('#input-buscar');
function listaLimpia(){
    resultadoCurso.innerHTML = '';
    input_text.value = '';
}
function cerrar_show(){
    closer.classList.add('show')
}

const cerrar = () =>{
    closer.addEventListener('click', listaLimpia)
}

boton.addEventListener('click', filtrar);
cajaBusqueda.addEventListener('keyup', filtrar);
cajaBusqueda.addEventListener('keyup', cerrar_show);
cajaBusqueda.addEventListener('keyup', cerrar);


