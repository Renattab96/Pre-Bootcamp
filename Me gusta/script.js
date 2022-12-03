count = 1;
CountElement = document.querySelector('#count');

// console.log(CountElement);
function add() {
    count++;
    console.log(count)
    CountElement.innerText= count +' Likes'
}

