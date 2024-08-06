let popname = document.getElementById('Name');
let about = document.getElementById('about');
let ach = document.getElementById('ach');
let goals = document.getElementById('goals');


function pop(){
    popname.style.display = 'block';

}
function dispop(){
    popname.style.display = 'none';
}

function ABOUT(){
    if (ach.style.display === 'block'){
        ach.style.display = 'none';
        about.style.display = 'block';
    }else if (goals.style.display === 'block'){
        goals.style.display = 'none';
        about.style.display = 'block';
    }else about.style.display = 'block';
}
function ACH(){
    if (about.style.display === 'block'){
        about.style.display = 'none';
        ach.style.display = 'block';
    }else if (goals.style.display === 'block'){
        goals.style.display = 'none';
        ach.style.display = 'block';
    }else ach.style.display = 'block';
}
function GOALS(){
    if (about.style.display === 'block'){
        about.style.display = 'none';
        goals.style.display = 'block';
    }else if (ach.style.display === 'block'){
        ach.style.display = 'none';
        goals.style.display = 'block';
    }else goals.style.display = 'block';
}