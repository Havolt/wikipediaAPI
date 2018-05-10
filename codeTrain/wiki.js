
let userInput;

function setup(){
    userInput = document.querySelector('#userinput').value;
    goWiki()   
}

function searchData(data){
    console.log(data);

    document.querySelector('.searchResult').innerHTML = data;
}


function goWiki(){
    let term = document.querySelector('#userinput').value;

    let s = document.createElement('script');
    s.src= 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+term+'&callback=searchData';
    document.body.appendChild(s);
    
    
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
        goWiki();;
    }
})
