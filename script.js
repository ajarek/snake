const creatSquares = () => {
  const container = document.querySelector('.container')
  for (i = 0; i < 225; i++) {
    const field = document.createElement('div')
    field.setAttribute('class', 'square')
    container.append(field)
  }
}
creatSquares()

const squares = document.querySelectorAll('.square')
const scoreDisplay = document.querySelector('span')
const startBtn = document.querySelector('.start')

const width = 15
let currentIndex = 0
let appleIndex = 0
let currentSnake = [2, 1, 0]
let direction = 1
let score = 0
let speed = 0.9
let intervalTime = 0
let interval = 0
const startGame = () => {

  currentSnake.forEach(index => squares[index].classList.remove('snake'))
  squares[currentSnake[0]].classList.add('head')
  squares[appleIndex].classList.remove('apple')
  clearInterval(interval)
  score = 0
  randomApple()
  direction = 1
  scoreDisplay.innerText = score
  intervalTime = 1000
  currentSnake = [2, 1, 0]
  currentIndex = 0
  currentSnake.forEach(index => squares[index].classList.add('snake'))
  startBtn.removeEventListener('click', startGame)
  interval = setInterval(motion, intervalTime)
}

const motion = () => {

  if (
    (currentSnake[0] + width >= (width * width) && direction === width) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
  ) {
    return clearInterval(interval) ||

      alert('KONIEC GRY! Twój wynik:' + score) ||
      reload()
  }
  squares[currentSnake[0]].classList.remove('head')
  const tail = currentSnake.pop()
  squares[tail].classList.remove('snake')
  currentSnake.unshift(currentSnake[0] + direction)
  squares[currentSnake[0]].classList.add('head')

  if (squares[currentSnake[0]].classList.contains('apple')) {
    squares[currentSnake[0]].classList.remove('apple')
    squares[tail].classList.add('snake')
    currentSnake.push(tail)
    randomApple()
    score++
    scoreDisplay.textContent = score
    clearInterval(interval)
    intervalTime = intervalTime * speed
    interval = setInterval(motion, intervalTime)
  }
  squares[currentSnake[0]].classList.add('snake')
}

const randomApple = () => {
  do {
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}

const control = (e) => {
  squares[currentIndex].classList.remove('snake')

  if (e.keyCode === 39) {
    direction = 1
  } else if (e.keyCode === 38) {
    direction = -width
  } else if (e.keyCode === 37) {
    direction = -1
  } else if (e.keyCode === 40) {
    direction = +width
  }
}
const reload = () => {
  setTimeout("window.location.reload()", 1000);
}

document.addEventListener('keyup', control)
startBtn.addEventListener('click', startGame)