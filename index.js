var timer = document.querySelector('.time')
var modal = document.querySelector('.modal-container')
var btn = document.querySelector('.btn-modal')
var modalText = document.querySelector('.modal-text')
var firstNum = document.getElementById('num1')
var secondNum = document.getElementById('num2')
var score = document.getElementById('score')
var ansOne = document.getElementById('ans1')
var ansTwo = document.getElementById('ans2')
var ansThree = document.getElementById('ans3')
var ansFour = document.getElementById('ans4')


var time = 0
var globalScore = 0
var answerArray = [ansOne,ansTwo,ansThree,ansFour]

function generateNumber(){
    var num1 = Math.floor(Math.random()*(100-1+1)+1)+' '
    var num2 = Math.floor(Math.random()*(100-1+1)+1)+' '
    var plus = Number(num1)+ Number(num2) 

    firstNum.innerHTML = num1
    secondNum.innerHTML = num2
    
    var selectAns = Math.floor(Math.random()*(4-1+1)+1)
    
    for(let i=0; i<answerArray.length;i++){
        if(i == selectAns){
            answerArray[i].innerHTML = plus
        }
        else{
            answerArray[i].innerHTML = Math.floor(Math.random()*(plus-1+1)+1)
        }
    }

    return plus

}

function addEvent(){
    let number = generateNumber();
    for(let i=0; i<answerArray.length;i++){
        answerArray[i].addEventListener('click', ()=>{
            if(parseInt(answerArray[i].innerHTML) == number){
                globalScore++
                score.innerHTML = globalScore
                addEvent()
            }
            else{
                addEvent()
            }
        })
    }
}

function globalCode(){
    var interval = setInterval(()=>{ 
        time = time+1;
        
        if(time != 120){
                score.innerHTML = globalScore
                timer.innerHTML = 120 - time;
                
                if(time%20 == 0 || time==1){
                    addEvent()
                }
        }
        else{
                modal.style.display = 'block'
                modalText.innerHTML = 'Your time is over :( !!!'+'<div>Score:'+globalScore+'</div>'
                time = 0
                clearInterval(interval)
        }
        
        
    },1000)
}

globalCode()

btn.addEventListener('click',()=>{
    globalCode()
    modal.style.display = 'none'
})