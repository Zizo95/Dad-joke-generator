const btnEl= document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "gQ+zx0DqBq4Z73iNUYQJYQ==Ovxd8MIf5f13ogJE"
const options= {
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey,
    },
};
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    jokeEl.innerHTML = "Updating...";
    btnEl.disabled = true;
    btnEl.innerHTML = "Loadind...";
   const response = await fetch(apiURL, options);
   const data = await response.json();

   btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a joke";
   jokeEl.innerHTML = data[0].joke;
}
 
btnEl.addEventListener("click", getjoke)