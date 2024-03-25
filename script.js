//Elements
const buttonRequest = document.getElementById("buttonRequest");
const img = document.querySelector("#randomImage");
const author = document.querySelector("#authorName");

//Events
buttonRequest.addEventListener("click",() => {
    var fetchJson = fetch("https://api.unsplash.com/photos/random?client_id=qp_DtNNVIgZ85TeHYDYXEt8HGGE92IefkP_aAcGIVas")
    .then(function (response){
        return response.json();
    })
    .then(function (jsonData){
        img.src = jsonData.urls.regular;
        author.textContent = "by " + jsonData.user.name;
    })
})
