const balls = document.getElementsByClassName('ball')
const body = document.querySelector('body')
//const balls = document.querySelectorAll('.ball')


const arr = [1,2,3,4,5]

// while(arr.length < 15){
//     arr.push('Iteration')
// }
// const added = arr.indexOf(3)
//const added = arr.includes(4)
//arr.unshift(6) ---> adds at beginning of array
//arr.shift() --> removes from beginning of array
//arr.splice(2,2)
arr.forEach((element,iteration) => {
    console.log('iteration')
    console.log(element,iteration)
})

console.log(arr)