(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    function choiseCase(id) {

    }

    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();

var grif =['item1','item2','item3','item4','item5','item6','item7','item8','item9',]
var ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8 = [];
var success;
var gameOver = false;
var arr =[];
var clicked = 0; // on va incrémenter celui ci après
var choice = 9;
var playerScore = 0;
var cpuScore = 0;

var player = {
    name : 'joueur1',
    team : '',
    arr : []
}

var cpu = {
    name : 'cpu',
    team : '',
    arr : []
}

$('.cpu-score').html(cpuScore);
$('.you-score').html(playerScore); 

function findElement (check){
    ar1 =['item1','item2','item3',];
    ar2 =['item4','item5','item6',];
    ar3 =['item7','item8','item9',];
    ar4 =['item1','item4','item7',];
    ar5 =['item2','item5','item8',];
    ar6 =['item3','item6','item9',];
    ar7 =['item1','item5','item9',];
    ar8 =['item3','item5','item7',];

success;

switch (true) {
    case success = ar1.every(function(val) {
        return check.arr.indexOf(val) !==-1;
}):
    gameOver = true;
    winning(ar1); // function winning
    setTimeout (on, 700, check.name);
    break;

    case success = ar2.every(function(val){
        return check.arr.indexOf(val) !==-1;
}):
    gameOver = true;
    winning(ar2);
    setTimeout (on, 700, check.name);
    break;

    case success = ar3.every(function(val){
        return check.arr.indexOf(val) !==-1;
}):
    gameOver = true;
    winning(ar3);
    setTimeout (on, 700, check.name);
    break;

    case success = ar3.every(function(val){
        return check.arr.indexOf(val) !==-1;
}):
    gameOver = true;
    winning(ar3);
    setTimeout (on, 700, check.name);
    break;

    case success = ar4.every(function(val){
        return check.arr.indexOf(val) !==-1;
}):
    gameOver = true;
    winning(ar4);
    setTimeout (on, 700, check.name);
    break;

    case success = ar5.every(function(val){
        return check.arr.indexOf(val) !==-1;
    }):
    gameOver = true;
    winning(ar5);
    setTimeout (on, 700, check.name);
    break;

    case success = ar6.every(function(val){
        return check.arr.indexOf(val) !==-1;
    }):
    gameOver = true;
    winning(ar6);
    setTimeout (on, 700, check.name);
    break;

    case success = ar7.every(function(val){
        return check.arr.indexOf(val) !==-1;
    }):
    gameOver = true;
    winning(ar7);
    setTimeout (on, 700, check.name);
    break;

    case success = ar8.every(function(val){
        return check.arr.indexOf(val) !==-1;
    }):
    gameOver = true;
    winning(ar8);
    setTimeout (on, 700, check.name);
    break;
}

}

function choiseCase(clicked_id){
    if( clicked %2 ==0){
        
    }
}