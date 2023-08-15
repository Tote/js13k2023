const pressedKeys = {}
window.addEventListener('keydown', e=>{
        
    let eventName
    switch(e.key){
        case 'w': eventName = 'PLAYER_UP'; break
        case 's': eventName = 'PLAYER_DOWN'; break
    }
        
    if(!pressedKeys[e.key]){
        const event = new Event(eventName)
        window.dispatchEvent(event)
    }

    pressedKeys[e.key] = true
})

window.addEventListener('keyup', e=>{
    pressedKeys[e.key] = false
})

//Test Events
window.addEventListener('PLAYER_UP', e=>{
    console.log('up event')
})
window.addEventListener('PLAYER_DOWN', e=>{
    console.log('down event')
})