const weapon = {length: 200 }
window.addEventListener('PLAYER_ATTACK', e=>{
    console.log('attacked at ' + getComputedStyle(player).top)
    const playerData    = getComputedStyle(player)
    const enemyData     = getComputedStyle(enemy)
    const distanceBetween = (a, b) =>
        Math.sqrt( Math.pow(parseInt(a.top) - parseInt(b.top), 2) + Math.pow(parseInt(a.left) - parseInt(b.left), 2) )
     
    if( distanceBetween(playerData, enemyData) < weapon.length ){
        enemy.style.backgroundColor = 'red' 
    } else {
        enemy.style.backgroundColor = 'green'
    }
})

