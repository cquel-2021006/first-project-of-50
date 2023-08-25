
const contenedors = document.querySelectorAll('.contenedor')
  
contenedors.forEach((contenedor)=>{
    contenedor.addEventListener('click',()=>{
        contenedors.forEach((contenedor) => {
            contenedor.classList.remove('active')
        })
        contenedor.classList.add('active')
    })
})