'use strict';

let firsproduct = document.getElementById('firstimg');
let secondproduct = document.getElementById('secondimg');
let thirdproduct = document.getElementById('thirdimg');

let firsproductindex;
let secondproductindex;
let thirdproductindex;

let countsClick = 0;
let clicklimit = 10;



function Pro(name, source, time) {
    this.name = this.name;
    this.source = source;
    this.time = 0;
    Pro.allproduct.push(this);

}

Pro.allproduct = [];

 new Pro('bag','img/bag.jpg');
new Pro ('banana', 'img/banana.jpg');
new Pro ('bathroom', 'img/bathroom.jpg');
new Pro ('boots', 'img/boots.jpg');
new Pro ('breakfast', 'img/breakfast.jpg');
new Pro ('bubblegum', 'img/bubblegum.jpg');
new Pro ('chair', 'img/chair.jpg');
new Pro ('cthulhu', 'img/cthulhu.jpg');
new Pro ('dog-duck', 'img/dog-duck.jpg');
new Pro ('dragon', 'img/dragon.jpg');
new Pro ('pen', 'img/pen.jpg');
new Pro ('scissors', 'img/scissors.jpg');
new Pro ('shark', 'img/shark.jpg');
new Pro ('sweep', 'img/sweep.png');
new Pro ('tauntaun', 'img/tauntaun.jpg');
new Pro ('unicorn', 'img/unicorn.jpg');
new Pro ('usb', 'img/usb.gif');
new Pro ('wine-glass', 'img/wine-glass.jpg');

function randomfun(){
    let randomNum = Math.floor(Math.random() * Pro.allproduct.length);
    //console.log(randomNum)
   return randomNum;
   
   }
   randomfun();

function imgs(){
    firsproductindex=randomfun();
    secondproductindex=randomfun();
    thirdproductindex=randomfun();

   // console.log(firsproductindex);
    //console.log(secondproductindex);
    //console.log(thirdproductindex);
   while(firsproductindex === secondproductindex || firsproductindex === thirdproductindex  ||thirdproductindex === secondproductindex  )
   {
       firsproductindex=randomfun;
       secondproductindex=randomfun;
       thirdproductindex=randomfun;
   }
   firsproduct.setAttribute('src',Pro.allproduct[firsproductindex].source);
   secondproduct.setAttribute('src',Pro.allproduct[secondproductindex].source);
   thirdproduct.setAttribute('src',Pro.allproduct[thirdproductindex].source);
   console.log(firsproduct);
   
}
imgs();



firsproduct.addEventListener('click',clickeventforimg);
secondproduct.addEventListener('click',clickeventforimg);
thirdproduct.addEventListener('click',clickeventforimg);

function clickeventforimg(event){
    
    countsClick++;
console.log(event.target.id);

if(countsClick >= clicklimit)
{
    if(event.target.id === 'firsproduct'){
        Pro.allproduct[firsproductindex].time++;
        console.log(Pro)
    }else if(event.target.id === 'secondproduct'){
        Pro.allproduct[secondproductindex].time++;
        console.log(Pro)

    }
    else if(event.target.id === 'thirdproduct'){
    Pro.allproduct[thirdproductindex].time++;
       // console.log(Pro)

    }
    imgs();

}

    
    else {
        creatlist();

 firsproduct.removeEventListener('click',clickeventforimg);
secondproduct.removeEventListener('click',clickeventforimg);
thirdproduct.removeEventListener('click',clickeventforimg);

   }

}

 
function creatlist(){
    let unorderlist=document.getElementById('listelm')
    for(let i = 0 ; i <Pro.allproduct.length; i++ ){
        let list=document.createElement('li');
   unorderlist.appendChild(list);
        list.textContent='${pro.allproduct[i].name} has ${pro.allproduct[i].source} source';
    }
    }
        
 

//clickeventforimg();
//console.log(clickeventforimg)

