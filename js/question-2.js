const container = document.querySelector(".container");
const gamesUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames(){
    try{
        const response = await fetch(gamesUrl);
        const results = await response.json();
        const details = results.results;
        console.log(details);

        container.innerHTML = "";

        for(let i = 0; i < details.length; i++){
            if(i === 8){
                break;
            }

            let name = "Unknown name"
            let tags = "Unknown"
            let rating = "Unknown"

            if(details[i].name){
                name = details[i].name;
            } 
            if(details[i].rating){
                rating = details[i].rating;
            }  
            if(details[i].tags.length){
                tags = details[i].tags.length;
            }  
            
            container.innerHTML += `
            <div class="item" style="background-color: beige"><h2 style="color: green">${name}</h2>
            <p>Rating: ${rating}</p>
            <p>Number of tags: ${tags}</p></div>`;
        } 

    }
    catch(error) {
        console.log(error);
        container.innerHTML = errorMessage("Oops! Something went wrong.")
    }
}
getGames();
