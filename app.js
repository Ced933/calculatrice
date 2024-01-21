
function reverse(word){
    console.log(word)
    let array = word.split('').reverse().join('');
    console.log(`devient ${array}`)
}
// reverse('Hello World');

function palindrom(word){
    let array = word.split('').reverse().join('');
    if(word === array ){
        console.log("c'est un palindrome")
    }else{
        console.log("ce n'est pas un palindrome")
    }
}


let wordToCheck = 'ce matin un lapin a tué un chasseur';
let largestword = 0;
let array = wordToCheck.split(' ');
console.log(array)

for(let i = 0; i < array.length; i++){
    if(array[i].length > largestword ){
        largestword = array[i].length;
        
    }
console.log(largestword)
}

let screen = document.querySelector("#screen");
let pScreen = document.querySelector("#screen-p");
let p = document.createElement("p");

// Number 
let seven = document.querySelector("#seven");
let four = document.querySelector("#four");
let one = document.querySelector("#one");
let eight = document.querySelector("#eight");
let five = document.querySelector("#five");
let two = document.querySelector("#two");
let zero = document.querySelector("#zero");
let nine = document.querySelector("#nine");
let six = document.querySelector("#six");
let three = document.querySelector("#three");
// operation 
let time = document.querySelector("#time");
let add = document.querySelector("#add");
let less = document.querySelector("#less");
let divide = document.querySelector("#divide");
let cancel = document.querySelector("#cancel");
let equal = document.querySelector("#equal");

cancel.addEventListener('click', ()=>{
    p.innerHTML = "" ;
    screen.appendChild(p);
})

divide.addEventListener('click', ()=>{
    p.innerHTML += '/';
    screen.appendChild(p);
})



add.addEventListener('click', ()=>{
 
    p.innerHTML += '+'
    screen.appendChild(p)
})




less.addEventListener('click', ()=>{
    p.innerHTML += '-'
    screen.appendChild(p)
})

seven.addEventListener('click', ()=>{
    p.innerHTML += 7
    screen.appendChild(p)
})
four.addEventListener('click', ()=>{
    p.innerHTML += 4
    screen.appendChild(p)
})
one.addEventListener('click', ()=>{
    p.innerHTML += 1
    screen.appendChild(p)
})


eight.addEventListener('click', ()=>{
    p.innerHTML += 8
    screen.appendChild(p)
})
five.addEventListener('click', ()=>{
    p.innerHTML += 5
    screen.appendChild(p)
})
two.addEventListener('click', ()=>{
    p.innerHTML += 2
    screen.appendChild(p)
})
zero.addEventListener('click', ()=>{
    p.innerHTML += 2
    screen.appendChild(p)
})

nine.addEventListener('click', ()=>{
    p.innerHTML += 9
    screen.appendChild(p)
})
six.addEventListener('click', ()=>{
    p.innerHTML += 6
    screen.appendChild(p)
})
three.addEventListener('click', ()=>{
    p.innerHTML += 3
    screen.appendChild(p)
})
time.addEventListener('click', ()=>{
    p.innerHTML += '*'
    screen.appendChild(p)
})

equal.addEventListener('click', ()=>{
    let calcul = eval(p.textContent);
    p.textContent = calcul;
})

