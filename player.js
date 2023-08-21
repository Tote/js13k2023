const background = document.getElementById('game')
const player     = document.getElementById('player')
  
/** Player movement */
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

