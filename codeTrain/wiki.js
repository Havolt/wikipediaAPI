let searchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let req = new XMLHttpRequest();

let myFunc = function(data){
    console.log(data)
}



let userInput;

function setup(){
    //noCanvas();
    userInput = document.querySelector('#userinput').value;
    goWiki()
    
}

/*
function goWiki(){
    let term = document.querySelector('#userinput').value;
    let url = searchURL + term;

    req.open('GET', url);
    req.responseType = 'json';
    req.send();
    
    console.log(url);
}
*/



let vm = new Vue({
    el: '#app',
    data: {
        head1: 'Wikipedia coding challenge',
        para1: ''
    }
})

document.querySelector('#userinput').addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        goWiki();;
    }
})


setup();