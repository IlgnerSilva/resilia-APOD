function ajax(e){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.nasa.gov/planetary/apod?date=${e}&api_key=7IQoz4h15IcN3iqphDeffx9we6cRVBouutQ6JK07`);

    xhr.onload = function(){
        const converteJSON = JSON.parse(xhr.responseText)
        document.querySelector('img').setAttribute("src", converteJSON.url)
    }
    xhr.send()
}

let data = document.querySelector("#data");

document.querySelector(".btn-pesquisar").addEventListener("click", function(){
   ajax(data.value)
})
 

ajax('');

