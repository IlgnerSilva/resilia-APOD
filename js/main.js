function ajax(e){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.nasa.gov/planetary/apod?date=${e}&api_key=7IQoz4h15IcN3iqphDeffx9we6cRVBouutQ6JK07`);

    xhr.onload = function(){
        const converteJSON = JSON.parse(xhr.responseText)
        console.log(converteJSON)
        mostra(converteJSON)
    }
    xhr.send()
}

function mostra(propriedade){
    document.querySelector('#imagem').setAttribute("src", propriedade.url)
    document.querySelector('#imagem-modal').setAttribute("src", propriedade.url)
    document.querySelector('#titulo-da-imagem').innerHTML = propriedade.title
    document.querySelector('#titulo-imagem-modal').innerHTML = propriedade.title
    document.querySelector('#descricao-imagem-modal').innerHTML = propriedade.explanation
}

ajax('');

let data = document.querySelector("#data");
document.querySelector(".btn-pesquisar").addEventListener("click", function(){
   ajax(data.value)
})
 
 