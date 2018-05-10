
let userInput;

function setup(){
    noCanvas();
    userInput = document.querySelector('#userinput').val();
    
}

let vm = new Vue({
    el: '#app',
    data: {
        head1: 'Wikipedia coding challenge',
        para1: ''
    }
})

document.querySelector('#userinput').addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        setup();
    }
})