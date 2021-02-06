const container = document.querySelector(".container");
const gamesUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames(){

    try{
        const response = await fetch(gamesUrl);
        const results = await response.json();
        const count = results.results;

        console.log(count);

        container.innerHTML = "";

        for(let i = 0; i < count.length; i++){

            if(i === 8){
                break;
            }
    
        container.innerHTML += `
        <div class="item" style="background-color: beige"><h2 style="color: green">${count[i].name}</h2>
        <p>Rating: ${count[i].rating}</p>
        <p>Number of tags: ${count[i].tags.length}</p></div>`;
        } 
    }
    catch(error) {
        console.log(error);
        container.innerHTML = errorMessage("Oops! Something went wrong.")
    }
    
}
getGames();
