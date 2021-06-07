'use strict';

let firsproduct = document.getElementById('firstimg');
let secondproduct = document.getElementById('secondimg');
let thirdproduct = document.getElementById('thirdimg');

let firsproductindex;
let secondproductindex;
let thirdproductindex;

let countsClick = 0;
let clicklimit = 5;

//let pushnamearr=[];
let shownarr = [];
//let votearr = [];

function Pro(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.shown = 0;
    //pushnamearr.puch(this.name);
    //votearr.push(this.vote);
    shownarr.push(this.shown);
    Pro.allproduct.push(this);


}
//console.log(arrofname);

//Pro.votearr = []
Pro.allproduct = [];
console.log(Pro.allproduct);
console.log(shownarr);


new Pro('bag', 'img/bag.jpg');
new Pro('banana', 'img/banana.jpg');
new Pro('bathroom', 'img/bathroom.jpg');
new Pro('boots', 'img/boots.jpg');
new Pro('breakfast', 'img/breakfast.jpg');
new Pro('bubblegum', 'img/bubblegum.jpg');
new Pro('chair', 'img/chair.jpg');
new Pro('cthulhu', 'img/cthulhu.jpg');
new Pro('dog-duck', 'img/dog-duck.jpg');
new Pro('dragon', 'img/dragon.jpg');
new Pro('pen', 'img/pen.jpg');
new Pro('scissors', 'img/scissors.jpg');
new Pro('shark', 'img/shark.jpg');
new Pro('sweep', 'img/sweep.png');
new Pro('tauntaun', 'img/tauntaun.jpg');
new Pro('unicorn', 'img/unicorn.jpg');
new Pro('usb', 'img/usb.gif');
new Pro('wine-glass', 'img/wine-glass.jpg');

function randomfun() {
    let randomNum = Math.floor(Math.random() * Pro.allproduct.length);
    //console.log(randomNum)
    return randomNum;

}

randomfun();

function imgs() {
    firsproductindex = randomfun();
    secondproductindex = randomfun();
    thirdproductindex = randomfun();

    console.log(firsproductindex);
    console.log(secondproductindex);
    console.log(thirdproductindex);
    while (firsproductindex === secondproductindex || firsproductindex === thirdproductindex || thirdproductindex === secondproductindex) {
        firsproductindex = randomfun();
        secondproductindex = randomfun();
    }
    console.log(firsproduct);

    //firsproduct.src = pro.allproduct[firsproductindex].source;
    firsproduct.setAttribute('src', Pro.allproduct[firsproductindex].source);
    Pro.allproduct[firsproductindex].shown++;
    //secondproduct.src = pro.allproduct[secondproductindex].source;
    secondproduct.setAttribute('src', Pro.allproduct[secondproductindex].source);
    Pro.allproduct[secondproductindex].shown++;
    thirdproduct.setAttribute('src', Pro.allproduct[thirdproductindex].source);
    //thirdproduct.src = pro.allproduct[thirdproductindex].source;
    Pro.allproduct[thirdproductindex].shown++;

}
//console.log(Pro.allproduct[secondproductindex].shown++);


imgs();
console.log(firsproduct);



let section = document.getElementById('section');
section.addEventListener('click', clickeventforimg)
//firsproduct.addEventListener('click',clickeventforimg);
//secondproduct.addEventListener('click',clickeventforimg);
//thirdproduct.addEventListener('click',clickeventforimg);



let button;
function clickeventforimg(event){
    countsClick++;
    console.log(event.target.id);

    if (clicklimit > countsClick) {
        if (event.target.id === 'firsproduct') {
            Pro.allproduct[firsproductindex].vote++;
        } else if (event.target.id === 'secondproduct') {
            Pro.allproduct[secondproductindex].vote++;
           

            //console.log(Pro)
        }


        else if (event.target.id === 'thirdproduct') {
            Pro.allproduct[thirdproductindex].vote++;
        }
        
        

    

    imgs();}



    else {
    // gettingList();

    let button = document.getElementById('buttonElm');
    section.removeEventListener('click', clickeventforimg);
 button.addEventListener('click', secondclickevet);
    //firsproduct.removeEventListener('click',clickeventforimg);
//secondproduct.removeEventListener('click',clickeventforimg);
//thirdproduct.removeEventListener('click',clickeventforimg);




}

}

function secondclickevet() {

    //chartfun();
     creatlist();
         //button.removeEventListener('click', secondclickevet);



}

//clickeventforimg();

function creatlist() {
    let unorderlist = document.getElementById('listelm')
    for (let i = 0; i < Pro.allproduct.length; i++) {
     //   votearr.push(Pro.allproduct[i].vote);
       // shownarr.push(Pro.allproduct[i].shown);

        let list = document.createElement('li');
        unorderlist.appendChild(list);
        list.textContent = `${Pro.allproduct[i].name} has ${Pro.allproduct[i].vote} Votes ${Pro.allproduct[i].shown} shown`;
    }

}

