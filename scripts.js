const xhr = new XMLHttpRequest();

xhr.onload = function(){
    const result = JSON.parse(xhr.response);
    console.log(result);
}

xhr.open("GET",' https://api.chucknorris.io/jokes/random');
xhr.send();