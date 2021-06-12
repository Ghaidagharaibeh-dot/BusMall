'use strict';

let firsproduct = document.getElementById('firstimg');
let secondproduct = document.getElementById('secondimg');
let thirdproduct = document.getElementById('thirdimg');

let firsproductindex;
let secondproductindex;
let thirdproductindex;

let countsClick = 0;
let clicklimit = 25;

let pushnamearr = [];
let shownarr = [];
let votearr = [];

function Pro(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.shown = 0;

    Pro.allproduct.push(this);
    pushnamearr.push(this.name);
   // votearr.push(this.vote);
    //shownarr.push(this.shown);


}
//console.log(arrofname);

//Pro.votearr = []
Pro.allproduct = [];
//console.log(Pro.allproduct);
//console.log(shownarr);


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

//console.log(Pro.allproduct)


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
function clickeventforimg(event) {
    countsClick++;
    console.log(event.target.id);

    if (clicklimit > countsClick) {
        if (event.target.id === 'firstimg') {
            Pro.allproduct[firsproductindex].vote++;
        }
        else if (event.target.id === 'secondimg') {
            Pro.allproduct[secondproductindex].vote++;
        }
        else if (event.target.id === 'thirdimg') {
            Pro.allproduct[thirdproductindex].vote++;
        }

        imgs();
        setTtemFun();

    }



    else {
        // gettingList();

        let button = document.getElementById('buttonElm');
        button.addEventListener('click', secondclickevet);
        section.removeEventListener('click', clickeventforimg);

        //firsproduct.removeEventListener('click',clickeventforimg);
        //secondproduct.removeEventListener('click',clickeventforimg);
        //thirdproduct.removeEventListener('click',clickeventforimg);




    }
}

//button.addEventListener('click', secondclickevet);

function secondclickevet(event) {

    creatlist();
    let button = document.getElementById('buttonElm');
 button.removeEventListener('click', secondclickevet);
    chartfun();

}



//clickeventforimg();

function creatlist() {
    let unorderlist = document.getElementById('listelm')
    for (let i = 0; i < Pro.allproduct.length; i++) {
        votearr.push(Pro.allproduct[i].vote);
        shownarr.push(Pro.allproduct[i].shown);

        let list = document.createElement('li');
        unorderlist.appendChild(list);
        list.textContent = `${Pro.allproduct[i].name} has ${Pro.allproduct[i].vote} Votes ${Pro.allproduct[i].shown} shown`;

    }

}

function setTtemFun() {
    let x = JSON.stringify(Pro.allproduct);
    localStorage.setItem('product', x);
}
function getItemFun() {
    let y = localStorage.getItem('product');
    let z = JSON.parse(y);
    if(z){
        Pro.allproduct=z;
    }
    return;


}

getItemFun();



function chartfun() {
    //console.log(votearr,shownarr)

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pushnamearr,
            datasets: [{
                label: '# of Votes',
                data: votearr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',

                ],
                borderWidth: 1
            },
            {
                label: '# of Votes',
                data: shownarr,
                backgroundColor: [
                    'rgba(400, 80, 150, 1)',

                ],
                borderWidth: 1
            },
            ]
        },

    });
}

