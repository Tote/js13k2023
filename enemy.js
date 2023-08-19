
const enemy = document.getElementById('enemy')

window.addEventListener('PLAYER_RUN', e=>{
    enemy.classList.add('running')
})