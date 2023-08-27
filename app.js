// let a =document.querySelector('h1');
// a.innerHTML = 'Badal Barsa';
// a.style.fontSize = '50px'
// a.addEventListener('click', function(){
//     a.innerHTML = 'Hi there'
//     a.style.backgroundColor = 'Red'
// })
/*
let a = document.querySelector('#btn');
let b = document.querySelector('.cir');

let x = 0;
a.addEventListener('click', function(){
    if (x == 0){
    b.style.backgroundColor = 'Yellow';
    x = 1
    a.innerHTML = 'Off'
    }else{
        b.style.backgroundColor = '#fff'
        a.innerHTML = 'On'
        x = 0
    }

})*/

//let q = document.getElementById("btn")
// let w = document.getElementById("adda")
//  let r = 0
// q.addEventListener("click", function(){
//    if(r == 0){
//     w.innerHTML = 'Friend'
//     w.style.color = 'Green'
//     r =1;
//     q.innerHTML = "Remove Friend"
//    }else{
//     w.innerHTML = 'Stranger'
//     w.style.color = 'Red'
//     r =0;
//     q.innerHTML = "Add Friend"
//    }
   
// })
let conx = document.querySelector(".container")

let love = document.querySelector("i")

conx.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(2)"
    love.style.color = "red"
    love.style.opacity = 0.7
    setTimeout(function(){
        love.style.opacity= 0
    }, 1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000)
})

