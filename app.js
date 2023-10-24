const url = "https://api.thecatapi.com/v1/images/search";
const image = document.querySelector(".image");
const button = document.querySelector(".btn");
async function fetchHandler(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        image.src = data[0].url;
    } catch(error){
        console.log(error);
    }
}

button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded){
        fetchHandler();
    }
})