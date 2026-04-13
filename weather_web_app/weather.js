const weatherform=document.querySelector(".weatherform");
const cityinput=document.querySelector(".cityinput");
const card= document.querySelector(".card");
const apikey="0fa817dde322d8092dbdea69e4517200";  


weatherform.addEventListener("submit", async event=>{
    // for prevents the default action that the browser would normally perform when an event occurs. 
    //the default action after submitting the form is : Submits the form and reloads the page, to prevent this reload we use preventDefault()
    event.preventDefault();
    const city =cityinput.value;

    if(city){

    try{
    const weatherdata= await getWeatherData(city);

    displayWeatherInfo(weatherdata);
    }

    catch(error){
        console.error(error);
        DisplayError(error);
    }
    }

    else{
        DisplayError("Please enter a city");
    }

});

async function getWeatherData(city) {

        const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

        const response =await fetch(apiurl);
        
        if(!response.ok){
            throw new Error("Could not Fetch Data");
        }
        return await response.json();
}

function displayWeatherInfo(data){
    // object destructuring from the response.json() object : taking only wanted data from the response object
    const {name : city, 
           main:{temp,humidity}, 
           weather:[{description}]}=data;
    
    card.textContent="";
    card.style.display="flex";
    
    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const humiditydisplay=document.createElement("p");
    const descdisplay=document.createElement("p");
    
    citydisplay.textContent=city;
    tempdisplay.textContent=`${(temp-273.15).toFixed(1)} C`;
    humiditydisplay.textContent=`Humidity:${humidity}%`;
    descdisplay.textContent=description;

    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.classList.add("descdisplay");

    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);

}

function DisplayError(message){

const errordisplay=document.createElement("p");
errordisplay.textContent=message;
errordisplay.classList.add("errordisplay");

card.textContent="";
card.style.display="flex";
card.appendChild(errordisplay)
}