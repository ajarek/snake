const squares = document.querySelectorAll('.square')

let snake = Math.floor(Math.random() * squares.length)
let rund = 0
while (rund < 8) {
    let apple = Math.floor(Math.random() * squares.length)
    squares[apple].style.backgroundImage = `url('apple.png')`
    rund++
}
squares[snake].style.backgroundImage = `url('snake.jpg')`