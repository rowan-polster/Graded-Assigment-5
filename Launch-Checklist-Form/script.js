// Write your JavaScript code here!

window.addEventListener("load", function() {

   //started fetching planetary data

   fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then( function(response) {
      response.json()
      .then( function(json) {
         let planet = document.getElementById("missionTarget")

         planet.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[1].name}</li>
            <li>Diameter: ${json[1].diameter}</li>
            <li>Star: ${json[1].star}</li>
            <li>Distance from Earth: ${json[1].distance}</li>
            <li>Number of Moons: ${json[1].moons}</li>
         </ol>
         <img src="${"https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"}"> 
         `
   
   //ended fetching planetary data


   });
});
   

let form = document.getElementById("launchForm");

   form.addEventListener("submit", function(event) {

      event.preventDefault()

      let submitButton = document.getElementById("formSubmit");

         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let faultyItems = document.getElementById("faultyItems");

         if (Number(pilotName.value) || Number(copilotName.value) || pilotName.value === "" || copilotName.value === "") {
            alert("Please enter Pilot and Co-Pilot names")
            
         } else if (!Number(fuelLevel.value) || !Number(cargoMass.value)) {
            alert("Please enter a number for Fuel Level and Cargo Mass")
         
         } else {

         let launchStatus = document.getElementById("launchStatus");

         let pilotStatus = document.getElementById("pilotStatus");

         let copilotStatus = document.getElementById("copilotStatus");

         let fuelStatus = document.getElementById("fuelStatus");

         let cargoStatus = document.getElementById("cargoStatus");



            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`

            if (fuelLevel.value > 10000 && cargoMass.value < 10000) {

               fuelStatus.innerHTML = "Fuel level high enough for launch"

               cargoStatus.innerHTML = "Cargo mass low enough for launch"

               launchStatus.innerHTML = "Shuttle ready for launch"

               launchStatus.style.color = "green"

               faultyItems.style.visibility = "visible"
            }

            if (fuelLevel.value < 10000) {

                  fuelStatus.innerHTML = "Fuel level too low for launch (must be 10,000kg or more)"

                  launchStatus.innerHTML = "Shuttle not ready for launch"

                  launchStatus.style.color = "red"

                  faultyItems.style.visibility = "visible"

            } else {

               fuelStatus.innerHTML = "Fuel level high enough for launch"
            }
         
            if (cargoMass.value > 10000) {

               cargoStatus.innerHTML = "Cargo mass too high for launch (must be 10,000kg or less)"

               launchStatus.innerHTML = "Shuttle not ready for launch"

               launchStatus.style.color = "red"

               faultyItems.style.visibility = "visible"

         } else {

            cargoStatus.innerHTML = "Cargo mass low enough for launch"
         }


         }
         

      });
   });
      