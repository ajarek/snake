const squares = document.querySelectorAll('.square')
const width = 15
let amountApples = 8
let direction=1
let snake = [122, 123, 124]
// snake.push(Math.floor(Math.random() * squares.length))
const start = () => {

   
    snake.forEach(el => {

        squares[el].classList.add('snake')
    })
   
}


let rund = 0
while (rund < amountApples) {
    let apple = Math.floor(Math.random() * squares.length)
    squares[apple].classList.add('apple')
    rund++
}
start()

const colizion = () => {
    squares.forEach((square, index) => {
        snake.forEach(elem => {
            if (square.classList.contains('apple') && index === elem) {
                const tail = snake.pop()
                console.log(tail);
                console.log(snake);
                square.classList.remove('apple')
                snake.push(tail)
                snake.push(tail+direction)
                console.log(snake);
            }
        })
    })

}


const control = (e) => {
    // e.preventDefault()

    for (i = 0; i < snake.length; i++) {
        squares[snake[i]].classList.remove('snake')
        if (e.keyCode === 39) {
           direction=1
        } //right
        else if (e.keyCode === 38) {
            direction = -width
        } //up
        else if (e.keyCode === 37) {
            direction = -1
        } //left
        else if (e.keyCode === 40) {
            direction = width
        } //down

    }
    snake.unshift(snake[0] + direction)
    snake.pop()
    
    colizion()
    start()
   
}
document.addEventListener('keyup', control)

