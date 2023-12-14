const xhr = new XMLHttpRequest();

xhr.onload = function(){
    const result = JSON.parse(xhr.response);
    console.log(result.value);


        const buttonjoke = $('#tell_me');

        buttonjoke.click(function(){
        document.getElementById('joke_here').innerHTML = result.value;
        });
}

xhr.open("GET",' https://api.chucknorris.io/jokes/random');
xhr.send(); 


