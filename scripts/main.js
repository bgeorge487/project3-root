let url = "https://jsonplaceholder.typicode.com/photos";
let thumbnail = document.getElementById("thumbnail");
let display = document.getElementById("full-size");
let userInput = document.getElementById("text_input");


async function getImages () {
    let promise = fetch(url)
    let response = await promise;

    if (!response.ok) {
        throw new Error(`${response.status} returned.`)
    }

    console.log(promise)
}