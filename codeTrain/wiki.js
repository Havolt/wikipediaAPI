
let userInput;

function setup(){
    userInput = document.querySelector('#userinput').value;
    goWiki()   
}

function searchData(data){
    console.log(data)

    document.querySelector('.searchResult').innerHTML = '';

    for(let i = 0; i < data[1].length; i++){
        let newEl = document.createElement('h2');
        newEl.innerHTML = data[1][i];
        newEl.classList.add('searchLink');
        newEl.href = data[3][i];
        newEl.onclick = function(){
            window.open(data[3][i]);
        }
        document.querySelector('.searchResult').appendChild(newEl)

        let newDesc = document.createElement('p');
        newDesc.innerHTML = data[2][i];
        newDesc.classList.add('searchDesc');
        document.querySelector('.searchResult').appendChild(newDesc)
    }
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
