const pressedKeys = {}
window.addEventListener('keydown', e=>{
        
    let eventName
    switch(e.key){
        case 'w': eventName = 'PLAYER_UP'; break
        case 's': eventName = 'PLAYER_DOWN'; break
        case ' ': eventName = 'PLAYER_RUN'; break
    }
        
    if(!pressedKeys[e.key]){
        const event = new Event(eventName)
        window.dispatchEvent(event)
    }

    pressedKeys[e.key] = true
})
window.addEventListener('mousedown', e=>{
    const event = new Event('PLAYER_ATTACK')
    window.dispatchEvent(event)
})


window.addEventListener('keyup', e=>{
    let eventName

    switch(e.key){
        case ' ': eventName = 'PLAYER_STOP'; break
    }

    const event = new Event(eventName)
    window.dispatchEvent(event)

    pressedKeys[e.key] = false
})

//Test Events
window.addEventListener('PLAYER_UP', e=>{
    console.log('up event')
})
window.addEventListener('PLAYER_DOWN', e=>{
    console.log('down event')
})