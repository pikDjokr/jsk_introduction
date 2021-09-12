// const rock =  document.querySelector('#rock')
// const paper =  document.querySelector('#paper')
// const scissor =  document.querySelector('#scissor')

function logName(Name = 'John Doe', age = 18){  //Default values
    // console.log('Nistha')
    console.log(Name + " you are " + age)
}

logName()


// const add = function(a=0,b=0) {
//     return a+b
// }

const add = (a=0,b=0) => {
    return a+b
}

// function add  (a=0,b=0) {
//     return a+b
// }

console.log(add(12,23))
