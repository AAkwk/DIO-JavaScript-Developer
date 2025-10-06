
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger)=>{
    trigger.addEventListener('click', (e)=>{
        const acordeon = trigger.parentElement
        const isopen = acordeon.classList.contains('open')

        if (isopen){
            acordeon.classList.remove('open')
        } else{
            acordeon.classList.add('open')
        }
    })
})