const rock =  document.querySelector('#rock')
const paper =  document.querySelector('#paper')
const scissor =  document.querySelector('#scissor')
const board = document.querySelector('#board')
const handler = (e) => {
    const action = e.target.id
    // if(action === 'rock'){
    //     board.innerHTML = 'Rock crushes scissor.'
    // }else if(action === 'paper'){
    //     board.innerHTML = 'Paper traps rock.'
    // }else if(action === 'scissor'){
    //     board.innerHTML = 'Scissor cuts paper.'
    // }else{
    //     board.innerHTML = 'Click something'
    // }

    switch(action){
        case 'rock':
            board.innerHTML = 'Rock crushes scissor.'
            break
        case 'paper':
            board.innerHTML = 'Paper traps rock.'
            break
        case 'scissor':
            board.innerHTML = 'Scissor cuts paper.'
            break
        default:
            board.innerHTML = 'Click something.'
    }
}
//handler('rock')
rock.addEventListener('click',handler)
paper.addEventListener('click',handler)
scissor.addEventListener('click',handler)

console.log('One')

setTimeout(() => {
    console.log('Two')
},5000)
console.log('Three')