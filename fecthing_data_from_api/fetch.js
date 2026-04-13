async function fetchdata(){
    try{
        const pokemonname=document.getElementById("pokemonname").value.toLowerCase();
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if (!response.ok){
            throw new Error("could not fetch the resource");
        }
        const data = await response.json();
        const display_img_src=data.sprites.front_default;
        const img_element= document.getElementById("pokemonsprite");
        img_element.src=display_img_src;
        img_element.style.display="block";

    }
    catch(error){
        console.error(error);
    }
}