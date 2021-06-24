const squares = document.querySelectorAll('.square')

let snake =[]
snake.push(Math.floor(Math.random() * squares.length))
const start=()=>{
    snake.forEach(el=>{
       squares[el].classList.add('snake')
       })
    }
    start()
let rund = 0
while (rund < 8) {
    let apple = Math.floor(Math.random() * squares.length)
    squares[apple].classList.add('apple')
    rund++
}

const colizion=()=>{
    squares.forEach((square,index)=>{
        snake.forEach(elem=>{
        if(square.classList.contains('apple') && index===elem){
           console.log(snake.length);
            square.classList.remove('apple')
            
            snake.push(snake[0]+snake.length)
            console.log(snake);
        }
    })
    }) 
    
 }
 

const control = (e) => {
   e.preventDefault()
   
    for(i=0;i<snake.length;i++){
    squares[snake[i]].classList.remove('snake')
    if(e.keyCode===39){
        squares[snake[i]+1].classList.add('snake')
         snake[i]=snake[i]+1
    }//right
    else if(e.keyCode===38){
        squares[snake[i]-15].classList.add('snake')
        snake[i]=snake[i]-15
    }//up
    else if(e.keyCode===37){
        squares[snake[i]-1].classList.add('snake')
        snake[i]=snake[i]-1
    }//left
    else if(e.keyCode===40){
        squares[snake[i]+15].classList.add('snake')
        snake[i]=snake[i]+15
    }//down
    
}

colizion()
start()
}
document.addEventListener('keyup',control)

