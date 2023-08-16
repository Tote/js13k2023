const background = document.getElementById('game')
const player     = document.getElementById('player')

window.addEventListener('PLAYER_RUN', e=>{
    background.classList.add('running')
    player.classList.add('running')
})
window.addEventListener('PLAYER_STOP', e=>{
    background.classList.remove('running')
    player.classList.remove('running')
})

player.addEventListener('transitionend', e=> {
    console.debug()
    player.style.setProperty('top', getComputedStyle(player).top)
})

window.addEventListener('PLAYER_ATTACK', e=>{
    console.log('attacked at ' + getComputedStyle(player).top)
})